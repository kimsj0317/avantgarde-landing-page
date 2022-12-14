import { CSSProperties, ReactNode, useEffect, useId, useRef, useState } from "react";
import { ResponsiveBox } from "./ResponsiveBox";
import styles from "./DesktopRoadmap.module.scss";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import constate from "constate";

type SlideItem = {
    description: string;
    content: ReactNode;
    imageUrl: string;
    disabled?: boolean;
};

export const roadmapSlideItems: SlideItem[] = [
    {
        description: "Interoperability & Integration",
        content: (
            <>
                <h3>Interoperability &amp; Integration</h3>
                <p>
                    We are committed to providing interoperability for the collection by
                    allowing them to be integrated into anywhere our holders have an
                    online presence.
                </p>
                <h4>Web 3.0 Metaverses</h4>
                <ol>
                    <li>
                        The Sandbox <span className={styles.chip}>complete</span>
                    </li>
                    <li>
                        Decentraland <span className={styles.chip}>complete</span>
                    </li>
                    <li>
                        Roblox{" "}
                        <span className={styles.chip} data-secondary>
                            2023/Q1
                        </span>
                    </li>
                    <li>
                        Zepeto{" "}
                        <span className={styles.chip} data-secondary>
                            2023/Q1
                        </span>
                    </li>
                    <li>
                        ifland{" "}
                        <span className={styles.chip} data-secondary>
                            2023/Q1
                        </span>
                    </li>
                </ol>
                <h4>Online Games</h4>
                <p>
                    User favorite Web 2.0 &amp; 3.0 games{" "}
                    <span className={styles.chip} data-secondary>
                        2023
                    </span>
                </p>
            </>
        ),
        imageUrl: ".//roadmap/roadmap_1_pc.png",
    },
    {
        description: "Launchpad",
        content: (
            <>
                <h3>Launchpad</h3>
                <p>
                    We aim to provide a hassle-free experience for both collectors and
                    artists alike. Our launchpad will be offering a secure minting
                    platform for our projects and participating artists.
                </p>
                <ol>
                    <li>
                        <strong>
                            Phase 1 <span className={styles.chip}>complete</span>
                        </strong>{" "}
                        : The platform is ready to securely mint our collections to the
                        users. Detailed information such as composition and rarity of the
                        NFTs will be available to view.
                    </li>
                    <li>
                        <strong>
                            Phase 2{" "}
                            <span className={styles.chip} data-secondary>
                                2022/Q4
                            </span>
                        </strong>{" "}
                        : We will be providing an artist-friendly launchpad that allows them
                        to mint their own NFTs without the technical hurdle.
                    </li>
                </ol>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}>
                    kSEguLX7ePCY 51f +pg CUl c5Gf lU R ZTj6rvY WoW3i7 RFpRJe 0lisHOBbfuAg
                    Qun2 Wuhm 7uMyjcR 2OrUH8YBQ dVeJzxcr tblGR Jk 41b iWEsCST L1DC rVn K5
                    dP7V dSgiGq
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}>
                    ZXR+EcFTt Kpn7cn Q2QxLHZhg3 o15 J/wjy xwa0IZ4 iOtHw 7si4Ha7 F3VfEIT9Jg
                    D7cZH HHtVS1cqZkX OtHw 7si4Ha7 F3VfEIT9Jg D7cZH HHtVS1cqZkX
                </p>
            </>
        ),
        imageUrl: ".//roadmap/roadmap_2_pc.png",
    },
    {
        description: "Holder Benefits",
        content: (
            <>
                <h3>Holder Benefits</h3>
                <p>
                    In addition to gaining exclusive access to airdrops and priority sales
                    of our upcoming projects, holders of our collection will be able to
                    profit from secondary sales of the wearable assets included in the
                    PFPs in each of the supported metaverses and platforms.
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}>
                    kSEguLX7ePCY 51f +pg CUl c5Gf lU R ZTj6rvY WoW3i7 RFpRJe 0lisHOBbfuAg
                    Qun2 Wuhm 7uMyjcR 2OrUH8YBQ dVeJzxcr tblGR Jk 41b iWEsCST L1DC rVn K5
                    dP7V dSgiGq
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}>
                    ZXR+EcFTt Kpn7cn Q2QxLHZhg3 o15 J/wjy xwa0IZ4 iOtHw 7si4Ha7 F3VfEIT9Jg
                    D7cZH HHtVS1cqZkX OtHw 7si4Ha7 F3VfEIT9Jg D7cZH HHtVS1cqZkX
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}>
                    2OrUH8YBQ dVeJzxcr tblGR Jk 41b iWEsCST L1DC rVn K5 dP7V dSgiGq
                    kSEguLX7ePCY 51f +pg CUl RFpRJe 0lisHOBbfuAg Qun2 Wuhm 7uMyjcR
                </p>
                <p
                    style={{
                        color: "transparent",
                        textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        userSelect: "none",
                    }}>
                    J/wjy xwa0IZ4 iOtHw 7si4Ha7 F3VfEIT9Jg HHtVS1cqZkX ZXR+EcFTt Kpn7cn
                    Q2QxLHZhg3 o15 Qun2 Wuhm 7uMyjcR 2OrUH8YBQ dVeJzxcr tblGR Jk 41b
                    iWEsCST L1DC rVn K5
                </p>
            </>
        ),
        imageUrl: ".//roadmap/roadmap_3_pc.png",
    },
    {
        description: "Coming Soon",
        content: (
            <>
                <h3>02 // Vision &amp; Value</h3>
                <p>
                    Avant Garde Studio aims to become the Louis Vuitton of the digital
                    fashion industry through its exclusive technology and attractive
                    ecosystem.
                </p>
            </>
        ),
        imageUrl: ".//roadmap/roadmap_4_pc.png",
        disabled: true,
    },
];

const useRoadmapState = ({
    containerWidth,
    itemCount,
    gapSize,
}: {
    containerWidth: number;
    itemCount: number;
    gapSize: number;
}) => {
    const [hoverTarget, setHoverTarget] = useState<string | null>(null);

    return {
        containerWidth,
        gapSize,
        itemCount,
        hoverTarget,
        setHoverTarget,
    };
};

const _constate: typeof constate = (constate as any).default || constate;
const [RoadmapProvider, useRoadmapContext] = _constate(useRoadmapState);

function DesktopRoadmap() {
    const [width, setWidth] = useState<null | number>(null);
    const [gapSize, setGapSize] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    // const containerRef = useRef<HTMLDivElement>(null);
    const [containerElement, setContainerElement] =
        useState<HTMLDivElement | null>(null);
    const [gapSizeElement, setGapSizeElement] =
        useState<HTMLDivElement | null>(null);

    useEffect(() => {
        let Wip = false;
        function update() {
            if (Wip) {
                return;
            }
            Wip = true;
            requestAnimationFrame(() => {
                if (containerElement == null) {
                    return;
                }
                if (gapSizeElement == null) {
                    return;
                }
                setWidth(containerElement.getBoundingClientRect().width);
                setGapSize(gapSizeElement.getBoundingClientRect().width);
                Wip = false;
            })
        }
        update();
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("resize", update);
        };
    }, [containerElement, gapSizeElement]);

    return (
        <ResponsiveBox
            width={1740}
            height={700}
            style={{
                display: "grid",
                gridAutoFlow: "column dense",
                gridAutoColumns: "max-content",
                gap: "10rem",
                overflow: "hidden",
            }}
            ref={(node) => {
                if (!node) {
                    return;
                }
                setContainerElement(node);
            }}>
            <div
                style={{
                    width: "10rem",
                    position: "absolute",
                    top: 0,
                }}
                ref={(node) => {
                    if (!node) {
                        return;
                    }
                    setGapSizeElement(node);
                }} />
            <AnimatePresence>
                {selected != null && (
                    <motion.div
                        initial={{ width: '0rem', }}
                        animate={{ width: `${930 + 60}rem`, }}
                        exit={{ width: '0rem' }}
                        transition={{ bounce: 0, duration: 0.15 }}
                        style={{ overflow: "hidden", }}>
                        <div
                            style={{
                                minWidth: `${930 + 60}rem`,
                                position: "relative",
                            }}>
                            <button
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: "4rem",
                                    width: "20rem",
                                    height: "20rem",
                                    border: 0,
                                    backgroundColor: "transparent",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    setSelected(null);
                                }}>
                                <div
                                    style={{
                                        width: "25rem",
                                        height: "4rem",
                                        backgroundColor: "#fff",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: `translateX(-50%) translateY(-50%) rotateZ(45deg)`,
                                        transformOrigin: "50% 50%",
                                    }} />
                                <div
                                    style={{
                                        width: "25rem",
                                        height: "4rem",
                                        backgroundColor: "#fff",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: `translateX(-50%) translateY(-50%) rotateZ(-45deg)`,
                                        transformOrigin: "50% 50%",
                                    }} />
                            </button>
                            <div
                                style={{
                                    paddingLeft: "60rem",
                                    paddingRight: "20rem",
                                }}>
                                <div
                                    className={styles["roadmap-content"]}>
                                    {roadmapSlideItems[selected].content}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {width != null && (
                <RoadmapProvider
                    containerWidth={width - (selected != null ? gapSize * 99 : 0)}
                    itemCount={
                        selected != null ? roadmapSlideItems.length - 1 : roadmapSlideItems.length
                    }
                    gapSize={gapSize}>
                    {roadmapSlideItems.map((slideItem, index) => {
                        if (index === selected) { return (null); }
                        return (
                            <SlideItem
                                onClick={() => {
                                    if (slideItem.disabled) {
                                        return;
                                    }
                                    setSelected(index);
                                }}
                                imageUrl={slideItem.imageUrl}
                                key={index}
                                style={{ cursor: slideItem.disabled ? "default" : "pointer" }}>
                                <div
                                    style={{
                                        paddingLeft: "30rem",
                                        paddingRight: "20rem",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "24rem",
                                        }}>
                                        {slideItem.description}
                                    </span>
                                </div>
                            </SlideItem>
                        );
                    })}
                </RoadmapProvider>
            )}
        </ResponsiveBox>
    );
}

function SlideItem({
    onClick,
    imageUrl,
    children,
    style,
}: {
    onClick?: () => void;
    imageUrl: string;
    children: ReactNode;
    style?: CSSProperties;
}) {
    const { hoverTarget, setHoverTarget, containerWidth, itemCount, gapSize } =
        useRoadmapContext();
    const gapPadding = (itemCount - 1) * gapSize;
    const actualContainerWidth = containerWidth - gapPadding;
    const expandRatio = 1.25;
    const normalWidth = actualContainerWidth / itemCount;

    const width = useSpring(normalWidth, { duration: 150, bounce: 0 });
    const id = useId();

    useEffect(() => {
        const isHover = id === hoverTarget;
        const expandedWidth = normalWidth * expandRatio;
        const collapsedWidth =
            (actualContainerWidth - expandedWidth) / (itemCount - 1);
        if (hoverTarget == null) {
            width.set(normalWidth);
            return;
        }
        if (isHover) {
            width.set(expandedWidth);
            return;
        }
        width.set(collapsedWidth);
    }, [id, hoverTarget, normalWidth, expandRatio, itemCount]);

    return (
        <motion.div
            style={{
                height: "100%",
                width,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                ...style,
            }}
            onMouseEnter={() => {
                setHoverTarget(id);
            }}
            onMouseLeave={() => {
                setHoverTarget(null);
            }}
            onClick={onClick}>
            <img
                src={imageUrl}
                style={{
                    position: "absolute",
                    transform: "translateY(-40%) translateX(0%) scale(1.75)",
                    top: "50%",
                    zIndex: -1,
                    height: "100%",
                }} />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundImage: `linear-gradient(to top, #000, rgba(255, 255, 255, 0))`,
                    opacity: 0.66,
                }} />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "28rem",
                    fontSize: "14rem",
                    display: "flex",
                    alignItems: "center",
                }}>
                {children}
                {hoverTarget === id && (
                    <img
                        src=".//roadmap-arrow.svg"
                        style={{ marginRight: "30rem", flexShrink: 0 }} />
                )}
            </div>
        </motion.div>
    );
}

export default DesktopRoadmap;
