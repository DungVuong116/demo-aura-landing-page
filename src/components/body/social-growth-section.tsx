"use client";
import { Typography } from "@poweredbygen/gen-ui";
import Image from "next/image";
import SocialGrowth from "@/assets/images/social_growth.png";
import { ArrowRight } from "lucide-react";

export const SocialGrowthSection = () => {
  return (
    <section className="flex w-full gap-8 rounded-xl bg-(--testimonial-bg) p-8">
      {/* Text Content */}
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Typography
              variant="h6"
              className="text-[20px] font-medium text-(--text-muted-dark)"
            >
              Social growth has moved from posting… to participating.
            </Typography>

            <Typography
              variant="h6"
              className="text-[20px] font-medium text-[#7A7A83]"
            >
              Winning on TikTok and Instagram now requires:
            </Typography>

            <ul className="ml-[30px] list-disc space-y-0 text-[#7A7A83]!">
              <li>
                <Typography
                  variant="h6"
                  className="text-[20px] text-[#7A7A83] font-medium "
                >
                  showing up in the right conversations
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  className="text-[20px] font-medium  text-[#7A7A83]"
                >
                  reacting fast
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  className="text-[20px] font-medium  text-[#7A7A83]"
                >
                  building presence across your niche
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  className="text-[20px] font-medium  text-[#7A7A83]"
                >
                  and engaging every day, at scale
                </Typography>
              </li>
            </ul>

            <Typography
              variant="h6"
              className="text-[20px] font-medium text-[#7A7A83]"
            >
              Most creators and brands simply can&apos;t keep up.
            </Typography>
          </div>
        </div>

        {/* Get Started Link */}
        <button className="flex w-fit items-center gap-1">
          <Typography
            variant="h6"
            className="text-[20px] font-medium  text-[#464654]"
          >
            Get Started
          </Typography>
          <ArrowRight className="h-[23px] w-[23px] text-[#464654]" />
        </button>
      </div>

      {/* Phone Mockup with Background */}
      <div className="relative flex h-[714px] w-[826px] items-center justify-center rounded-xl">
        <Image src={SocialGrowth} alt="Social Growth" />
      </div>
    </section>
  );
};
