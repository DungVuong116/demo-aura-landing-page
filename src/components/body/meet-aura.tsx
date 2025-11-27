"use client";
import { Typography } from "@poweredbygen/gen-ui";
import MeetAuraImage from "@/assets/images/meet-aura-bg.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/common/animated-text";

interface MeetAuraProps {
  onOpenModal: () => void;
}

export const MeetAura = ({ onOpenModal }: MeetAuraProps) => {
  const texts = [
    "Meet AURA: your 24/7 AI social intern.",
    "1. Finds the right content",
    "AURA watches videos in your niche and identifies conversations worth joining.",
    "2. Writes natural comments",
    "She speaks in your tone, adapts to context, and interacts like a real person.",
    "3. Sends real traffic",
    "Every comment is an entry point back to your profile.",
    "4. Gives you a dedicated creator phone",
    "A U.S. device used exclusively for:",
    "AURA's engagement",
    "your content uploads",
    "managing brand accounts",
    "running a clean, separate social workflow",
    "Get Started",
  ];

  return (
    <AnimatedText
      texts={texts}
      className="flex flex-col md:flex-row w-full gap-8 rounded-xl bg-(--testimonial-bg) p-5 md:p-8"
    >
      {(renderText) => (
        <>
          {/* Phone Mockup with Background */}
          <div className="relative flex w-full md:w-[826px] min-h-[600px] items-center justify-center rounded-xl">
            <Image
              src={MeetAuraImage}
              alt="Meet aura"
              className="w-full h-auto min-h-[600px]"
            />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/meet-aura.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

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

                <div className="space-y-4">
                  {/* Section 1 */}
                  <div>
                    <Typography
                      variant="h6"
                      className="text-[16px] md:text-[20px] font-medium text-[#7A7A83]"
                    >
                      {renderText(texts[1], 1)}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-[16px] md:text-[20px] font-normal text-[#7A7A83]"
                    >
                      {renderText(texts[2], 2)}
                    </Typography>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <Typography
                      variant="h6"
                      className="text-[16px] md:text-[20px] font-medium text-[#7A7A83]"
                    >
                      {renderText(texts[3], 3)}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-[16px] md:text-[20px] font-normal text-[#7A7A83]"
                    >
                      {renderText(texts[4], 4)}
                    </Typography>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <Typography
                      variant="h6"
                      className="text-[16px] md:text-[20px] font-medium text-[#7A7A83]"
                    >
                      {renderText(texts[5], 5)}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-[16px] md:text-[20px] font-normal text-[#7A7A83]"
                    >
                      {renderText(texts[6], 6)}
                    </Typography>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <Typography
                      variant="h6"
                      className="text-[16px] md:text-[20px] font-medium text-[#7A7A83]"
                    >
                      {renderText(texts[7], 7)}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-[16px] md:text-[20px] font-normal text-[#7A7A83]"
                    >
                      {renderText(texts[8], 8)}
                    </Typography>
                    <ul className="ml-[30px] list-disc space-y-0 text-[#7A7A83]!">
                      <li>
                        <Typography
                          variant="body2"
                          className="text-[16px] md:text-[20px] font-normal text-[#7A7A83]"
                        >
                          {renderText(texts[9], 9)}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body2"
                          className="text-[16px] md:text-[20px] font-normal text-[#7A7A83]"
                        >
                          {renderText(texts[10], 10)}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body2"
                          className="text-[16px] md:text-[20px] font-normal text-[#7A7A83]"
                        >
                          {renderText(texts[11], 11)}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body2"
                          className="text-[16px] md:text-[20px] font-normal text-[#7A7A83]"
                        >
                          {renderText(texts[12], 12)}
                        </Typography>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Started Link */}
            <button
              className="flex w-fit items-center gap-1"
              onClick={onOpenModal}
            >
              <Typography
                variant="h6"
                className="text-[16px] md:text-[20px] font-medium text-(--text-muted-dark)"
              >
                {renderText(texts[13], 13)}
              </Typography>
              <ArrowRight className="h-[23px] w-[23px] text-(--text-muted-dark)" />
            </button>
          </div>
        </>
      )}
    </AnimatedText>
  );
};
