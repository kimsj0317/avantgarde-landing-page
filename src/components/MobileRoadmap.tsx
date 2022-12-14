import { ResponsiveBox } from "./ResponsiveBox";
import styles from "./MobileRoadmap.module.scss"
import { ReactNode, useRef, useState } from "react";

type SlideItem = {
    description: string;
    content: ReactNode;
    imageUrl: string;
    disabled?: boolean;
};

const roadmapSlideItems: SlideItem[] = [
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
        imageUrl: ".//roadmap/roadmap_1_mobile.png",
    }, {
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
        imageUrl: ".//roadmap/roadmap_2_mobile.png",
    }, {
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
                    kSEguLX7ePCY 51f +pg CUl c5Gf lU R ZTj6rvY WoW3i7 RFpRJe 0lisHOBbfuAg
                    Qun2 Wuhm 7uMyjcR 2OrUH8YBQ dVeJzxcr tblGR Jk 41b iWEsCST L1DC rVn K5
                    dP7V dSgiGq
                </p>
            </>
        ),
        imageUrl: ".//roadmap/roadmap_3_mobile.png",
    }, {
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
        imageUrl: ".//roadmap/roadmap_4_mobile.png",
        disabled: true,
    },
];

function RoadmapItem({
    imageUrl,
    children,
    onClick
}: {
    imageUrl: string,
    children: ReactNode,
    onClick?: () => void
}) {
    return (
        <ResponsiveBox
            width={335}
            height={111}
            onClick={() => { onClick?.(); }}>
            <img
                src={imageUrl}
                className={styles.roadmapBgImage}
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }} />
            <div className={styles.roadmapChildren}>
                <div className={styles.roadmapChildrenContent}>
                    {children}
                </div>
            </div>
        </ResponsiveBox>
    );
}

function MobileRoadmap() {
    const [selected, select] = useState<null | number>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.roadmapFlame} id="m_roadmap">
            {selected != null && (
                <div className={styles.roadmapContent}>
                    <button
                        aria-label="close"
                        className={styles.roadmapContentClose}
                        onClick={() => { select(null); }} />
                    {roadmapSlideItems[selected].content}
                </div>
            )}
            <div className={styles.roadmapList}>
                {roadmapSlideItems.map((item, index) => {
                    if (selected === index) { return null; }
                    return (
                        <RoadmapItem
                            key={index}
                            imageUrl={item.imageUrl}
                            onClick={() => {
                                if (item.disabled) {
                                    return;
                                }
                                select(index);
                            }}>
                            {item.description}
                        </RoadmapItem>
                    );
                })}
            </div>
        </div>
    );
}

export default MobileRoadmap;