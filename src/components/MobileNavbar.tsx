import { ComponentProps, useEffect, useRef, useState } from "react";
import styles from "./MobileNavbar.module.scss"

function MobileNavbar() {
    const [state, setState] = useState<"hidden" | "topbar" | "open">("topbar");
    const showTopbar = state !== "hidden";
    const contentRef = useRef<HTMLDivElement>(null);

    const navigateInner: ComponentProps<"a">["onClick"] = (event) => {
        event.preventDefault();

        const element = document.getElementById(event.currentTarget.href.split("#")[1]);

        let currentElement: HTMLElement | null = element;
        let top = 0;

        if (!element) {
            return;
        }

        while (currentElement != null) {
            top += currentElement.offsetTop;
            currentElement = currentElement.parentElement;
        }

        window.scroll({
            top: top - 80,
            behavior: "smooth",
        });
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarTop} aria-hidden={!showTopbar}>
                <div className={styles.navbarGradient} />
                <a href="/">
                    <img src=".//navbar-logo.png" className={styles.navbarLogo} />
                </a>
                <button
                    className={styles.navbarToggleButton}
                    aria-pressed={state === "open"}
                    onClick={() => {
                        setState((state) => {
                            if (state !== "open") {
                                return "open";
                            }
                            return "topbar";
                        });
                    }} />
            </div>
            <div
                className={styles.navbarContent}
                aria-hidden={state !== "open"}
                ref={contentRef}>
                <div
                    className={styles.navbarLinks}
                    onClick={(event) => {
                        setState("topbar");
                    }}>
                    <a onClick={navigateInner} href="#m_about">
                        about
                    </a>
                    <a onClick={navigateInner} href="#m_roadmap">
                        roadmap
                    </a>
                    <a onClick={navigateInner} href="#m_team">
                        team
                    </a>
                    <a onClick={navigateInner} href="#m_gallery">
                        gallery
                    </a>
                    <a href="https://studio.avantgarde.design/" target="_blank">
                        ag studio
                    </a>
                    <a href="https://discord.com/invite/tZDtDSPRF8" target="_blank">
                        <img src=".//navbar/discord.svg" />
                        discord
                    </a>
                    <a href="https://twitter.com/NFT_Avant_Garde" target="_blank">
                        <img src=".//navbar/twitter.svg" />
                        twitter
                    </a>
                    <a href="#"
                        onClick={(event) => {
                            event.preventDefault();
                            alert("coming soon");
                        }}>
                        <img src=".//navbar/instagram.svg" />
                        instagram
                    </a>
                    <a href="https://opensea.io/collection/ha-jung-woo-x-supernormal-by-avant-garde" target="_blank">
                        <img src=".//navbar/opensea.svg" />
                        opensea
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default MobileNavbar;