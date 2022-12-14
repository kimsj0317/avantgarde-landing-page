import {
    motion,
} from "framer-motion";

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
    visible: {
        transition: {
            staggerChildren: 0.025,
        },
    },
};

export const AnimatedText = (props: { text: string }) => {
    const item = {
        hidden: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        visible: { // 올라오는 애니메이션
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
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}>
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
                                        paddingLeft: "8rem",
                                        paddingRight: "8rem",
                                        marginLeft: "-8rem",
                                        marginRight: "-8rem",
                                    }}
                                    key={index}>
                                    <motion.span
                                        style={{ display: "inline-block" }}
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

export default AnimatedText;
