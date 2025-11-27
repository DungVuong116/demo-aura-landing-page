"use client";
import { Typography } from "@poweredbygen/gen-ui";
import { Button } from "@/components/common/button";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-bg-image.png";
import { motion } from "motion/react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const lines = [
    "Grow your audience automatically. Every day. AURA is your always-on social manager — powered by a",
    "real phone — who engages for you and grows your account.",
  ];

  return (
    <section className="flex w-full flex-col gap-6 md:gap-8">
      {/* Heading */}
      <Typography
        variant="h4"
        className="w-full text-2xl md:text-[28px] font-medium leading-[38px] text-(--text-muted-dark)"
      >
        {lines.map((line, lineIndex) => (
          <motion.span
            key={lineIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6 + lineIndex * 0.2,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </Typography>

      {/* CTA Button */}
      <motion.div
        className="flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0,
          ease: "easeOut",
        }}
      >
        <Button
          className="h-12 text-[14px]! w-[132px]!"
          textSize={14}
          onClick={onOpenModal}
        >
          Get AURA
        </Button>
      </motion.div>

      {/* Hero Image Section */}
      <div className="mt-[46px] md:mt-0 relative w-full min-h-[600px]">
        <Image
          src={HeroImage}
          alt="hero"
          className="w-full h-auto min-h-[600px]"
        />
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] md:h-[600px] rounded-2xl!"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/aurahomepage.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
