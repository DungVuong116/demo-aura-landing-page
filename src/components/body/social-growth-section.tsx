"use client";
import { Typography } from "@poweredbygen/gen-ui";
import Image from "next/image";
import SocialGrowth from "@/assets/images/meet-aura-bg.png";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/common/animated-text";

interface SocialGrowthSectionProps {
  onOpenModal: () => void;
}

export const SocialGrowthSection = ({
  onOpenModal,
}: SocialGrowthSectionProps) => {
  const texts = [
    "Social growth has moved from posting… to participating.",
    "Winning on TikTok and Instagram now requires:",
    "showing up in the right conversations",
    "reacting fast",
    "building presence across your niche",
    "and engaging every day, at scale",
    "Most creators and brands simply can't keep up.",
    "Get Started",
  ];

  return (
    <AnimatedText
      texts={texts}
      className="flex flex-col md:flex-row w-full gap-8 rounded-xl bg-(--testimonial-bg) p-5 md:p-8"
    >
      {(renderText) => (
        <>
          {/* Text Content */}
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Typography
                  variant="h6"
                  className="text-[20px] font-medium text-(--text-muted-dark)"
                >
                  {renderText(texts[0], 0)}
                </Typography>

                <Typography
                  variant="h6"
                  className="text-[16px] md:text-[20px] font-medium text-[#7A7A83]"
                >
                  {renderText(texts[1], 1)}
                </Typography>

                <ul className="ml-[30px] list-disc space-y-0 text-[#7A7A83]!">
                  <li>
                    <Typography
                      variant="h6"
                      className="text-[16px] md:text-[20px] text-[#7A7A83] font-medium "
                    >
                      {renderText(texts[2], 2)}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="h6"
                      className="text-[16px] md:text-[20px] font-medium  text-[#7A7A83]"
                    >
                      {renderText(texts[3], 3)}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="h6"
                      className="text-[16px] md:text-[20px] font-medium  text-[#7A7A83]"
                    >
                      {renderText(texts[4], 4)}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="h6"
                      className="text-[16px] md:text-[20px] font-medium  text-[#7A7A83]"
                    >
                      {renderText(texts[5], 5)}
                    </Typography>
                  </li>
                </ul>

                <Typography
                  variant="h6"
                  className="text-[16px] md:text-[20px] font-medium text-[#7A7A83]"
                >
                  {renderText(texts[6], 6)}
                </Typography>
              </div>
            </div>

            {/* Get Started Link */}
            <button
              className="flex w-fit items-center gap-1"
              onClick={onOpenModal}
            >
              <Typography
                variant="h6"
                className="text-[16px] md:text-[20px] font-medium  text-[#464654]"
              >
                {renderText(texts[7], 7)}
              </Typography>
              <ArrowRight className="h-[23px] w-[23px] text-[#464654]" />
            </button>
          </div>

          {/* Phone Mockup with Background */}
          <div className="relative flex w-full md:w-[826px] min-h-[600px] items-center justify-center rounded-xl">
            <Image
              src={SocialGrowth}
              alt="Social Growth"
              className="w-full h-auto min-h-[600px]"
            />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/social-growth.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}
    </AnimatedText>
  );
};
