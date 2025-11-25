"use client";

import { Typography } from "@poweredbygen/gen-ui";
import Image from "next/image";
import { Sun, Moon, Globe, ChevronDown, ArrowUp } from "lucide-react";
import auraLogo from "@/assets/images/aura_logo.png";

const sitemapLinks = ["Home", "Platform", "Features", "Pricing"];
const legalLinks = ["Terms of Conditions", "Privacy Policy", "Cookie Policy"];
const contactLinks = ["FAQ", "Support"];
const socialLinks = ["X/Twitter", "LinkedIn", "Instagram"];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll (you can use 'auto' for instant)
    });
  };
  return (
    <footer className="flex w-full flex-col items-center gap-[60px] bg-(--footer-bg)! px-8 pb-0 pt-[100px]">
      <div className="flex w-full max-w-[1416px] flex-col items-center gap-6">
        {/* Links Section */}
        <div className="flex w-full items-start justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-[25.14px] w-[92.9px]">
              <Image
                src={auraLogo}
                alt="AURA"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-5">
            <Typography
              variant="label"
              className="text-[11px] font-medium uppercase tracking-[1.1px] text-(--text-secondary)"
            >
              Sitemap
            </Typography>
            <div className="flex flex-col gap-2 text-[14px] font-normal text-white">
              {sitemapLinks.map((link, index) => (
                <p key={index} className={index === 1 ? "underline" : ""}>
                  {link}
                </p>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex w-[133px] flex-col gap-5">
            <Typography
              variant="label"
              className="w-full text-[11px] font-medium uppercase tracking-[1.1px] text-(--text-secondary)"
            >
              Legal
            </Typography>
            <div className="flex w-full flex-col gap-2 text-[14px] font-normal text-white">
              {legalLinks.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex w-[70px] flex-col gap-5">
            <Typography
              variant="label"
              className="text-[11px] font-medium uppercase tracking-[1.1px] text-(--text-secondary)"
            >
              Contact
            </Typography>
            <div className="flex flex-col gap-2 text-[14px] font-normal text-white">
              {contactLinks.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex w-[133px] flex-col gap-5">
            <Typography
              variant="label"
              className="w-full text-[11px] font-medium uppercase tracking-[1.1px] text-(--text-secondary)"
            >
              Social
            </Typography>
            <div className="flex w-full flex-col gap-2 text-[14px] font-normal text-white">
              {socialLinks.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex w-full max-w-[1416px] items-center justify-between">
        <Typography
          variant="body2"
          className="text-center text-[14px] font-normal leading-6 text-white"
        >
          ©2025 AURA. All Rights Reserved.
        </Typography>

        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <div className="flex items-center gap-3 overflow-clip rounded-[232px] bg-(--footer-surface-primary) p-1">
            <button className="flex h-8 w-8 items-center justify-center rounded-[40px] bg-(--footer-surface-tertiary)">
              <Sun className="h-4 w-4 text-white" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center">
              <Moon className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Language Selector */}
          <button className="flex h-[38px] items-center gap-1 rounded-[124px] bg-(--footer-surface-primary) px-3 py-1">
            <Globe className="h-4 w-4 text-white" />
            <span className="text-center text-[14px] font-normal leading-6 text-white">
              English
            </span>
            <ChevronDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button (positioned absolutely) */}
      <button
        className="fixed bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-(--footer-surface-primary) hover:bg-(--footer-surface-tertiary)"
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </footer>
  );
};
