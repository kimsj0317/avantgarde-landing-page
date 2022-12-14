import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Wrapper = (props: any) => {
    return (
        <span
            style={{
                whiteSpace: "nowrap",
            }}>
            {props.children}
        </span>
    );
};

const container = {
    slideUp: {
        transition: {},
    },
};

export const SlideUpText = (props: { text: string }) => {
    const item = {
        hidden: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        slideUp: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
        },
    };

    const splitWords = props.text.split(" ");

    const words: any[] = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    words.map((word) => {
        return word.push("\u00A0");
    });

    return (
        <motion.span
            initial="hidden"
            whileInView="slideUp"
            viewport={{ once: true }}
            variants={container}
            style={{ lineHeight: 1 }}>
            {words.map((word, index) => {
                return (
                    <Wrapper key={index}>
                        {words[index].flat().map((element: any, index: number) => {
                            return (
                                <span
                                    style={{
                                        overflowY: "hidden",
                                        overflowX: "visible",
                                        display: "inline-block",
                                    }}
                                    key={index}>
                                    <motion.span
                                        style={{ display: "inline-block", }}
                                        variants={item}>
                                        {element}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </motion.span>
    );
};

export default SlideUpText;
