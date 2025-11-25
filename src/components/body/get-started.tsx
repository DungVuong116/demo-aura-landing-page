"use client";
import { Typography } from "@poweredbygen/gen-ui";
import { Button } from "../common/button";

export const GetStarted = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-3 rounded-[20px] bg-(--testimonial-bg) p-20">
      {/* Heading */}
      <div className="flex w-[630px] flex-col items-start gap-4">
        <Typography
          variant="h6"
          className="w-full text-[44px] font-medium leading-[50px] text-(--get-started-text)"
        >
          Ready to grow without the daily grind?
        </Typography>
      </div>

      {/* Description and Button */}
      <div className="flex w-full flex-col items-start gap-8">
        <p className="w-full min-w-full text-[19px] font-normal leading-8 text-(--get-started-text)">
          Grow your audience automatically. Every day. AURA is your always-on
          social manager — powered by a real phone — who engages for you and
          drives consistent growth.
        </p>

        <Button
          variant="primary"
          className="h-auto rounded-[1000px] bg-(--text-muted-dark) px-8 py-3"
        >
          <Typography
            variant="buttonSmall"
            className="text-[14px] font-semibold capitalize text-white"
          >
            Get Started
          </Typography>
        </Button>
      </div>
    </section>
  );
};
