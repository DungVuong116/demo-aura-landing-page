"use client";
import { Typography } from "@poweredbygen/gen-ui";
import { Button } from "@/components/common/button";
import Image from "next/image";
import HeroImage from "@/assets/images/hero_image.png";

export const HeroSection = () => {
  return (
    <section className="flex w-full flex-col gap-8">
      {/* Heading */}
      <Typography
        variant="h4"
        className="w-full text-[28px] font-medium leading-[38px] text-(--text-muted-dark)"
      >
        Grow your audience automatically. Every day. AURA is your always-on
        social manager — powered by a real phone — who engages for you and grows
        your account.
      </Typography>

      {/* CTA Button */}
      <div className="flex">
        <Button className="h-12 text-[14px]! w-[132px]!" textSize={14}>
          Get AURA
        </Button>
      </div>

      {/* Hero Image Section */}
      <div>
        <Image src={HeroImage} alt="hero" />
      </div>
    </section>
  );
};
