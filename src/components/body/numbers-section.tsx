"use client";
import { Typography } from "@poweredbygen/gen-ui";

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
  return (
    <section className="flex w-full items-center justify-between">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Typography className="whitespace-nowrap text-[100px] font-normal leading-[68px] text-(--text-muted-dark)">
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
    </section>
  );
};
