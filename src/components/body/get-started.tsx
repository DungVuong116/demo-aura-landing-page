"use client";
import { Typography } from "@poweredbygen/gen-ui";
import { Button } from "../common/button";
import { AnimatedText } from "@/components/common/animated-text";

interface GetStartedProps {
  onOpenModal: () => void;
}

export const GetStarted = ({ onOpenModal }: GetStartedProps) => {
  const texts = [
    "Ready to grow without the daily grind?",
    "Grow your audience automatically. Every day. AURA is your always-on social manager — powered by a real phone — who engages for you and drives consistent growth.",
    "Get Started",
  ];

  return (
    <AnimatedText
      texts={texts}
      className="flex w-full flex-col items-start justify-center gap-3 rounded-[20px] bg-(--testimonial-bg) py-10 px-5 md:p-20"
    >
      {(renderText) => (
        <>
          {/* Heading */}
          <div className="flex flex-col items-start gap-4 text-center md:text-start">
            <Typography
              variant="h6"
              className="w-full text-[44px] font-medium leading-[50px] text-(--get-started-text)"
            >
              {renderText(texts[0], 0)}
            </Typography>
          </div>

          {/* Description and Button */}
          <div className="flex w-full flex-col items-center md:items-start gap-8 text-center md:text-start">
            <p className="w-full min-w-full text-[16px] md:text-[19px] font-normal leading-8 text-(--get-started-text)">
              {renderText(texts[1], 1)}
            </p>

            <Button
              variant="primary"
              className="h-auto rounded-[1000px] bg-(--text-muted-dark) px-8 py-3"
              onClick={onOpenModal}
            >
              <Typography
                variant="buttonSmall"
                className="text-[14px] font-semibold capitalize text-white"
              >
                {renderText(texts[2], 2)}
              </Typography>
            </Button>
          </div>
        </>
      )}
    </AnimatedText>
  );
};
