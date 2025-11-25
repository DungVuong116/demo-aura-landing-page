"use client";
import { Typography } from "@poweredbygen/gen-ui";
import MeetAuraImage from "@/assets/images/meet_aura.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const MeetAura = () => {
  return (
    <section className="flex w-full gap-8 rounded-xl bg-(--testimonial-bg) p-8">
      {/* Phone Mockup with Background */}
      <div className="relative flex h-[714px] w-[826px] items-center justify-center rounded-xl">
        <Image src={MeetAuraImage} alt="Meet aura" />
      </div>

      {/* Text Content */}
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Typography
              variant="h6"
              className="text-[20px] font-medium text-(--text-muted-dark)"
            >
              Meet AURA: your 24/7 AI social intern.
            </Typography>

            <div className="space-y-4">
              {/* Section 1 */}
              <div>
                <Typography
                  variant="h6"
                  className="text-[20px] font-medium text-[#7A7A83]"
                >
                  1. Finds the right content
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[20px] font-normal text-[#7A7A83]"
                >
                  AURA watches videos in your niche and identifies conversations
                  worth joining.
                </Typography>
              </div>

              {/* Section 2 */}
              <div>
                <Typography
                  variant="h6"
                  className="text-[20px] font-medium text-[#7A7A83]"
                >
                  2. Writes natural comments
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[20px] font-normal text-[#7A7A83]"
                >
                  She speaks in your tone, adapts to context, and interacts like
                  a real person.
                </Typography>
              </div>

              {/* Section 3 */}
              <div>
                <Typography
                  variant="h6"
                  className="text-[20px] font-medium text-[#7A7A83]"
                >
                  3. Sends real traffic
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[20px] font-normal text-[#7A7A83]"
                >
                  Every comment is an entry point back to your profile.
                </Typography>
              </div>

              {/* Section 4 */}
              <div>
                <Typography
                  variant="h6"
                  className="text-[20px] font-medium text-[#7A7A83]"
                >
                  4. Gives you a dedicated creator phone
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[20px] font-normal text-[#7A7A83]"
                >
                  A U.S. device used exclusively for:
                </Typography>
                <ul className="ml-[30px] list-disc space-y-0">
                  <li>
                    <Typography
                      variant="body2"
                      className="text-[20px] font-normal text-[#7A7A83]"
                    >
                      AURA&apos;s engagement
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body2"
                      className="text-[20px] font-normal text-[#7A7A83]"
                    >
                      your content uploads
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body2"
                      className="text-[20px] font-normal text-[#7A7A83]"
                    >
                      managing brand accounts
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body2"
                      className="text-[20px] font-normal text-[#7A7A83]"
                    >
                      running a clean, separate social workflow
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Link */}
        <button className="flex w-fit items-center gap-1">
          <Typography
            variant="h6"
            className="text-[20px] font-medium text-(--text-muted-dark)"
          >
            Get Started
          </Typography>
          <ArrowRight className="h-[23px] w-[23px] text-(--text-muted-dark)" />
        </button>
      </div>
    </section>
  );
};
