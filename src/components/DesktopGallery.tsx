import { ResponsiveBox } from "./ResponsiveBox";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type TSwiper from "swiper";
import SwiperCore, { Keyboard } from 'swiper';
import "swiper/css";
import styles from "./DesktopGallery.module.scss";
import { Fragment, useRef, useState } from "react";
import SlideUpText from "./SlideUpText";

type GalleryItem = {
    imageUrl: string;
    description: string[];
    ratio: number;
};

export const galleryItems: GalleryItem[] = [
    {
        imageUrl: ".//gallery/galleryimg1.png",
        description: ["Dream", "2010", "Mixed Media on Plywood", "88 × 65 cm"],
        ratio: 88 / 65,
    }, {
        imageUrl: ".//gallery/galleryimg2.png",
        description: ["Portrait G", "2022", "Mixed Media on Canvasd", "116.8 × 91 cm",],
        ratio: 116.8 / 91,
    }, {
        imageUrl: ".//gallery/galleryimg3.png",
        description: ["Work", "2018", "Oil on Canvas", "101.5 × 76 cm",],
        ratio: 101.5 / 76,
    }, {
        imageUrl: ".//gallery/galleryimg4.png",
        description: ["Berlin", "2012", "Acrylic, Pen on Canvas", "178 × 139 cm",],
        ratio: 178 / 139,
    }, {
        imageUrl: ".//gallery/galleryimg5.png",
        description: ["Grapeseed", "2019", "Mixed Media on Canvas", "53.0 × 45.5 cm",],
        ratio: 53 / 45.5,
    }, {
        imageUrl: ".//gallery/galleryimg6.png",
        description: ["Untitled", "2021", "Oil on Canvas", "73 × 61 cm",],
        ratio: 73 / 61,
    }, {
        imageUrl: ".//gallery/galleryimg7.png",
        description: ["Red flower 2", "2013", "Acrylic, Pen on Canvas", "50 × 39 cm",],
        ratio: 50 / 40,
    }, {
        imageUrl: ".//gallery/galleryimg8.png",
        description: ["Portrait L", "2020", "Mixed Media on Canvas", "72.7 × 60.6 cm",],
        ratio: 72.7 / 60.6,
    }, {
        imageUrl: ".//gallery/galleryimg9.png",
        description: ["Untitled", "Oil on Canvas", "91 × 72.8 cm",],
        ratio: 91 / 72.8,
    }, {
        imageUrl: ".//gallery/galleryimg10.png",
        description: ["Untitled", "2021", "Oil on Canvas", "117 × 91 cm",],
        ratio: 117 / 92,
    }, {
        imageUrl: ".//gallery/galleryimg11.png",
        description: ["Untitled", "2021", "Oil on Canvas", "73 × 61 cm",],
        ratio: 73 / 61,
    },
];

function GallerySlideItem({
    imageUrl,
    highlight,
    prev,
    onClick,
}: {
    imageUrl: string;
    highlight: boolean;
    prev: boolean;
    onClick?: () => void;
}) {
    return (
        <div
            className={styles.slideItem}
            data-highlight={highlight}
            data-prev={prev}>
            <img src={imageUrl} onClick={onClick} />
        </div>
    );
}

function DesktopGallery() {
    const [currentSlide, setSlide] = useState(0);
    const swiperRef = useRef<TSwiper | null>(null);
    const currentGalleryItem = galleryItems[currentSlide];
    const [previousRatio, setPreviousRatio] = useState(currentGalleryItem.ratio);
    const ratio = useSpring(currentGalleryItem.ratio);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef);
    const frameWidth = useTransform(
        [ratio],
        (ratio) => `calc(670rem / ${ratio} + 40rem)`
    );

    const barWidth = "1200rem";

    SwiperCore.use([Keyboard]);

    if (currentGalleryItem.ratio !== previousRatio) {
        ratio.set(currentGalleryItem.ratio);

        setPreviousRatio(currentGalleryItem.ratio);
    }

    return (
        <ResponsiveBox
            width={1780}
            height={858}
            rootProps={{
                style: {
                    margin: `0px calc(-90rem - 410rem)`,
                },
                ref: containerRef,
            }}>
            <motion.div
                style={{
                    position: "absolute",
                    left: "50%",
                    width: frameWidth,
                    height: "710rem",
                    border: "1px solid #CE8BB4",
                    transform: "translateX(-50%)",
                }}>
                <div
                    style={{
                        zIndex: 0,
                        top: "305rem",
                        left: "-350rem",
                        position: "absolute",
                    }}>
                    <span
                        style={{
                            fontSize: "24rem",
                            fontWeight: 700,
                            fontStyle: "italic",
                            color: "#fff",
                        }}>
                        Ha Jung woo
                    </span>
                    <div
                        style={{
                            height: "1rem",
                            backgroundColor: "#CE8BB4",
                            width: "350rem",
                            marginTop: "6rem",
                            marginBottom: "10rem",
                        }} />
                    <div style={{
                        fontSize: "20rem",
                        color: "#fff",
                    }}>
                        {currentGalleryItem.description.map((text, index) => {
                            return (
                                <Fragment key={text}>
                                    {index !== 0 && <br />}
                                    <SlideUpText text={text} />
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
            <Swiper
                slidesPerView={3}
                speed={800}
                onActiveIndexChange={(swiper) => {
                    setSlide(swiper.activeIndex);
                }}
                slideToClickedSlide={true}
                centeredSlides={true}
                keyboard={{
                    enabled: true,
                    onlyInViewport: false,
                }}
                modules={[Keyboard,]}
                autoplay={false}
                style={{
                    top: "20rem",
                    left: "0%",
                    width: "100%",
                    zIndex: 0,
                }}>
                {galleryItems.map((item, index) => {
                    return (
                        <SwiperSlide key={item.imageUrl}>
                            <GallerySlideItem
                                imageUrl={item.imageUrl}
                                highlight={currentSlide === index}
                                prev={currentSlide > index}
                                onClick={() => {
                                    if (currentSlide + 1 === index) {
                                        swiperRef.current?.slideNext();
                                        return;
                                    }
                                    if (currentSlide - 1 === index) {
                                        swiperRef.current?.slidePrev();
                                        return;
                                    }
                                }} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div
                style={{
                    width: barWidth,
                    height: "10rem",
                    marginTop: "80rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: `rgba(112,112,112, 0.5)`,
                }}>
                <div
                    style={{
                        width: `calc(${barWidth} / ${galleryItems.length})`,
                        height: "100%",
                        backgroundColor: "#fff",
                        transition: `transform 0.15s`,
                        transform: `translateX(calc(${barWidth} / ${galleryItems.length} * ${currentSlide}))`,
                    }} />
            </div>
        </ResponsiveBox>
    );
}

export default DesktopGallery;
