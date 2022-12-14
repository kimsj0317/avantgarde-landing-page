import { Fragment, useRef, useState, } from "react";
import { ResponsiveBox } from "./ResponsiveBox";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./MobileGallery.module.scss";
import { galleryItems as desktopGalleryItems } from "./DesktopGallery";
import { Swiper, SwiperSlide } from "swiper/react";
import type TSwiper from "swiper";
import "swiper/css";
import SlideUpText from "./SlideUpText";

type GalleryItem = {
    imageUrl: string;
    description: string[];
    ratio: number;
};

const galleryItems: GalleryItem[] = [
    {
        imageUrl: ".//gallery/galleryimg1.png",
        description: ["Dream", "2010", "Mixed Media on Plywood", "88 × 65 cm"],
        ratio: 390 / 295,
    }, {
        imageUrl: ".//gallery/galleryimg2.png",
        description: ["Portrait G", "2022", "Mixed Media on Canvasd", "116.8 × 91 cm",],
        ratio: 116.8 / 88.5,
    }, {
        imageUrl: ".//gallery/galleryimg3.png",
        description: ["Work", "2018", "Oil on Canvas", "101.5 × 76 cm",],
        ratio: 101.5 / 77,
    }, {
        imageUrl: ".//gallery/galleryimg4.png",
        description: ["Berlin", "2012", "Acrylic, Pen on Canvas", "178 × 139 cm",],
        ratio: 178 / 135,
    }, {
        imageUrl: ".//gallery/galleryimg5.png",
        description: ["Grapeseed", "2019", "Mixed Media on Canvas", "53.0 × 45.5 cm",],
        ratio: 53 / 40.5,
    }, {
        imageUrl: ".//gallery/galleryimg6.png",
        description: ["Untitled", "2021", "Oil on Canvas", "73 × 61 cm",],
        ratio: 73 / 55.5,
    }, {
        imageUrl: ".//gallery/galleryimg7.png",
        description: ["Red flower 2", "2013", "Acrylic, Pen on Canvas", "50 × 39 cm",],
        ratio: 50 / 38,
    }, {
        imageUrl: ".//gallery/galleryimg8.png",
        description: ["Portrait L", "2020", "Mixed Media on Canvas", "72.7 × 60.6 cm",],
        ratio: 72.7 / 55,
    }, {
        imageUrl: ".//gallery/galleryimg9.png",
        description: ["Untitled", "Oil on Canvas", "91 × 72.8 cm",],
        ratio: 91 / 68.8,
    }, {
        imageUrl: ".//gallery/galleryimg10.png",
        description: ["Untitled", "2021", "Oil on Canvas", "117 × 91 cm",],
        ratio: 117 / 89,
    }, {
        imageUrl: ".//gallery/galleryimg11.png",
        description: ["Untitled", "2021", "Oil on Canvas", "73 × 61 cm",],
        ratio: 73 / 55.5,
    },
];

function MobileGallerySlideItem({
    imageUrl,
    highlight,
    onClick,
}: {
    imageUrl: string;
    highlight: boolean;
    onClick?: () => void;
}) {
    return (
        <div
            className={styles.slideItem}
            data-highlight={highlight}>
            <img src={imageUrl} onClick={onClick} />
        </div>
    );
}

function MobileGallery() {
    const [currentSlide, setSlide] = useState(0);
    const currentGalleryItem = galleryItems[currentSlide];
    const [previousRatio, setPreviousRatio] = useState(currentGalleryItem.ratio);
    const ratio = useSpring(currentGalleryItem.ratio);
    const swiperRef = useRef<TSwiper | null>(null);
    const frameWidth = useTransform([ratio], (ratio) => `calc(360rem / ${ratio} + 21rem)`);

    if (currentGalleryItem.ratio !== previousRatio) {
        ratio.set(currentGalleryItem.ratio);
        setPreviousRatio(currentGalleryItem.ratio);
    }

    return (
        <>
            <ResponsiveBox
                width={375}
                height={400}
                rootProps={{
                    style: {
                        marginLeft: `calc(-20rem)`,
                        marginRight: "-200rem",
                        transform: `translateY(-30rem)`,
                    },
                }}>
                <motion.div
                    style={{
                        position: "absolute",
                        top: "29rem",
                        left: "20rem",
                        width: frameWidth,
                        height: "360rem",
                        border: "1px solid #CE8BB4",
                    }} />
                <Swiper
                    slidesPerView={2}
                    onActiveIndexChange={(swiper) => {
                        setSlide(swiper.activeIndex);
                    }}
                    centeredSlides
                    className={styles.slideWrapper}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}>
                    {galleryItems.map((item, index) => {
                        return (
                            <SwiperSlide key={item.imageUrl}>
                                <MobileGallerySlideItem
                                    imageUrl={item.imageUrl}
                                    highlight={currentSlide === index}
                                    onClick={() => {
                                        if (currentSlide + 1 === index) {
                                            swiperRef.current?.slideNext();
                                            return;
                                        }
                                        if (currentSlide - 1 === index) {
                                            swiperRef.current?.slidePrev();
                                            return;
                                        }
                                    }}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </ResponsiveBox>
            <div
                style={{
                    height: "6rem",
                    marginTop: "20rem",
                    backgroundColor: "rgba(112,112,112, 0.5)",
                }}>
                <div
                    style={{
                        width: `calc(100% / ${galleryItems.length})`,
                        height: "100%",
                        backgroundColor: "#fff",
                        transition: `transform 0.15s`,
                        transform: `translateX(calc((100vw - 40rem) / ${galleryItems.length} * ${currentSlide}))`,
                    }} />
            </div>
            <div>
                <div
                    style={{
                        fontSize: "14rem",
                        fontWeight: 700,
                        fontStyle: "italic",
                        margin: "20rem 0px",
                        textTransform: "uppercase",
                    }}>
                    Ha Jung woo
                </div>
                <div
                    style={{
                        marginBottom: "57rem",
                        fontSize: "14rem",
                        lineHeight: "18rem",
                        minHeight: "74rem",
                    }}>
                    {currentGalleryItem.description.map((text, index) => {
                        return (
                            <Fragment key={text}>
                                {index !== 0 && <br />}
                                <SlideUpText text={text} key={text} />
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default MobileGallery;