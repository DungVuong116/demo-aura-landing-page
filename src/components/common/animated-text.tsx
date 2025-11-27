"use client";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef, ReactNode } from "react";

interface AnimatedWordProps {
  word: string;
  scrollYProgress: MotionValue<number>;
  wordIndex: number;
  totalWords: number;
}

const AnimatedWord = ({
  word,
  scrollYProgress,
  wordIndex,
  totalWords,
}: AnimatedWordProps) => {
  const wordProgress = wordIndex / totalWords;
  const startProgress = wordProgress * 0.9;
  const endProgress = Math.min(startProgress + 0.1, 1);

  const opacity = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
};

interface AnimatedTextProps {
  texts: string[];
  children: (
    renderText: (text: string, index: number) => ReactNode
  ) => ReactNode;
  className?: string;
}

export const AnimatedText = ({
  texts,
  children,
  className = "",
}: AnimatedTextProps) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const allText = texts.join(" ");
  const totalWords = allText.split(" ").length;

  const textData = texts.reduce(
    (acc, text) => {
      const startIndex = acc.currentIndex;
      const wordCount = text.split(" ").length;
      acc.data.push({ text, startIndex });
      acc.currentIndex += wordCount;
      return acc;
    },
    { currentIndex: 0, data: [] as { text: string; startIndex: number }[] }
  ).data;

  const renderAnimatedText = (text: string, startWordIndex: number) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) => {
          const wordIndex = startWordIndex + index;
          return (
            <AnimatedWord
              key={index}
              word={word}
              scrollYProgress={scrollYProgress}
              wordIndex={wordIndex}
              totalWords={totalWords}
            />
          );
        })}
      </>
    );
  };

  const renderText = (text: string, index: number) => {
    const data = textData[index];
    return renderAnimatedText(data.text, data.startIndex);
  };

  return (
    <div ref={sectionRef} className={className}>
      {children(renderText)}
    </div>
  );
};

export const useAnimatedArrow = (scrollYProgress: MotionValue<number>) => {
  return useTransform(scrollYProgress, [0.85, 1], [0.2, 1]);
};
