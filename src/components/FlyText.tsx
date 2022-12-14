import { motion } from "framer-motion";
import type { ReactNode, useState } from "react";

// Word wrapper
const Wrapper = (props: any) => {
    // We'll do this to prevent wrapping of words using CSS
    return (
        <span
            style={{
                whiteSpace: "nowrap",
            }}
        >
            {props.children}
        </span>
    );
};

// Framer Motion variant object, for controlling animation
// 애니메이션 속성 값
// 위에서 등장하고 퇴장
const topItem = {
    topStart: {
        x: 0,
        y: 0,
    },
    topEnd: {
        x: 0,
        y: "-100%",
    },
};
// 아래에서 등장하고 퇴장
const bottomItem = {
    bottomStart: {
        x: "-100%",
        y: "100%",
        rotate: -90,
    },
    bottomEnd: {
        x: 0,
        y: 0,
        rotate: 0,
    },
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
export const FlyText = (props: { text: string; autoPlay?: boolean }) => {
    //  Split each word of props.text into an array
    // const splitWords = props.text.split(" ");

    // Create storage array
    const words: any[] = props.text.split("").map((x) => {
        if (x === " ") {
            return "\u00A0";
        }
        return x;
    });

    // Push each word into words array
    // for (const [, item] of splitWords.entries()) {
    //   words.push(item.split(""));
    // }

    // // Add a space ("\u00A0") to the end of each word
    // words.map((word) => {
    //   return word.push("\u00A0");
    // });

    return (
        <motion.span
            // initial={["bottomStart", "topStart"]}
            // animate={["bottomEnd", "topEnd"]}
            initial={["bottomStart", "topStart"]}
            animate={props.autoPlay ? ["bottomStart", "topStart"] : void 0} // autoPlay의 값에 따라
            transition={{
                staggerChildren: 0.05,
            }}
            whileHover={["bottomEnd", "topEnd"]}
        >
            <Wrapper>
                {words.map((word, index) => {
                    return (
                        <span
                            style={{
                                overflowY: "hidden",
                                overflowX: "hidden",
                                display: "inline-block",
                                position: "relative",
                            }}
                            key={index}
                        >
                            <motion.span
                                style={{ display: "inline-block" }}
                                variants={topItem}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.065,
                                    ease: [0, 0.2, 0.3, 1],
                                }}
                            >
                                {word}
                            </motion.span>
                            <motion.span
                                style={{
                                    display: "inline-block",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                }}
                                variants={bottomItem}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.065,
                                    ease: [0, 0.2, 0.3, 1],
                                }}
                            >
                                {word}
                            </motion.span>
                        </span>
                    );
                })}
            </Wrapper>
        </motion.span>
    );
};

export default FlyText;

export function FlyIcon({ children }: { children: ReactNode }) {
    return (
        <motion.span
            initial={["bottomStart", "topStart"]}
            whileHover={["bottomEnd", "topEnd"]}
            style={{
                overflowY: "hidden",
                overflowX: "visible",
                display: "inline-block",
                position: "relative",
            }}
        >
            <motion.span
                style={{ display: "inline-block" }}
                variants={topItem}
                transition={{
                    duration: 0.4,
                    ease: [0, 0.2, 0.3, 1],
                }}
            >
                {children}
            </motion.span>
            <motion.span
                style={{
                    display: "inline-block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                variants={bottomItem}
                transition={{
                    duration: 0.4,
                    ease: [0, 0.2, 0.3, 1],
                }}
            >
                {children}
            </motion.span>
        </motion.span>
    );
}
