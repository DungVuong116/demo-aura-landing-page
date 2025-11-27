"use client";
import { Typography } from "@poweredbygen/gen-ui";
import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: "1M", label: "COMMENTS WRITTEN" },
  { number: "750K", label: "LIKES RECEIVED" },
  { number: "2M", label: "VIDEOS ANALYZED" },
  { number: "351K", label: "FOLLOWERS GAINED" },
];

export const NumbersSection = () => {
  const controls = useAnimationControls();

  // Triple the stats for seamless infinite loop
  const loopedStats = [...stats, ...stats, ...stats];

  useEffect(() => {
    const animateCarousel = async () => {
      while (true) {
        // Animate through one full set of stats
        for (let i = 0; i < stats.length; i++) {
          await controls.start({
            x: `-${((i + 1) * 100) / 3.5}%`,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          });
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        // Reset to start position instantly
        controls.set({ x: "0%" });
      }
    };

    animateCarousel();
  }, [controls]);

  return (
    <>
      <section className="w-full overflow-hidden py-4 hidden lg:block">
        <motion.div
          className="flex items-start"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {loopedStats.map((stat, index) => (
            <div
              key={index}
              className="flex min-w-[28.57%] flex-col gap-2 px-8"
            >
              <Typography className="whitespace-nowrap text-[100px] font-normal leading-[100px] text-(--text-muted-dark)">
                {stat.number}
              </Typography>
              <Typography
                variant="h6"
                className="whitespace-nowrap text-[20px] font-medium leading-7 text-(--text-muted-dark)"
              >
                {stat.label}
              </Typography>
            </div>
          ))}
        </motion.div>
      </section>
      <section className="w-full overflow-hidden py-4 lg:hidden">
        <div className="flex flex-col items-center gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <Typography className="text-[100px] font-normal leading-[100px] text-(--text-muted-dark)">
                {stat.number}
              </Typography>
              <Typography
                variant="h6"
                className="text-[20px] font-medium leading-7 text-[#818A95]"
              >
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
