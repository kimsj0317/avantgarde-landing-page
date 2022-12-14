import { ComponentProps, ForwardedRef, forwardRef } from "react";
import { atom } from "nanostores";
import { useStore } from "@nanostores/react";
import styles from "./MainVideo.module.scss";

export const isMuted = atom(true);

function MainVideoImpl(
    {
        mobileSrc,
        desktopSrc,
        ...otherProps
    }: Omit<ComponentProps<"video">, "src" | "muted"> & {
        mobileSrc: string;
        desktopSrc: string;
    },
    ref: ForwardedRef<HTMLVideoElement>
) {
    const $isMuted = useStore(isMuted);
    return (
        <>
            <video ref={ref} {...otherProps} src={desktopSrc} muted={$isMuted} />
        </>
    );
}

export const MainVideo = forwardRef(MainVideoImpl);

function MainVideoSoundToggleButtonImpl(
    { children, ...otherProps }: ComponentProps<"button">,
    ref: ForwardedRef<HTMLButtonElement>
) {
    const $isMuted = useStore(isMuted);

    return (
        <button
            ref={ref}
            type="button"
            {...otherProps}
            onClick={() => {
                isMuted.set(!$isMuted);
            }}>
            {$isMuted ? (
                <img
                    src=".//navbar/round_off_face_revised.gif"
                    alt="Sound Off"
                    className={styles.IconImage} />
            ) : (
                <img
                    src=".//navbar/round_on_face_revised.gif"
                    alt="Sound On"
                    className={styles.IconImage} />
            )}
        </button>
    );
}

export const MainVideoSoundToggleButton = forwardRef(
    MainVideoSoundToggleButtonImpl
);
