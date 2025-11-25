"use client";
import { CommentsSection } from "@/components/body/comments-section";
import { FAQ } from "@/components/body/faq";
import { GetStarted } from "@/components/body/get-started";
import { HeroSection } from "@/components/body/hero-section";
import { MeetAura } from "@/components/body/meet-aura";
import { NumbersSection } from "@/components/body/numbers-section";
import { PricingSection } from "@/components/body/pricing-section";
import { SocialGrowthSection } from "@/components/body/social-growth-section";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="my-20 flex flex-col gap-20">
      <div
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="section-animate"
      >
        <HeroSection />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="section-animate"
        style={{ transitionDelay: "0.1s" }}
      >
        <NumbersSection />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="section-animate"
        style={{ transitionDelay: "0.15s" }}
      >
        <CommentsSection />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        className="section-animate-left"
        style={{ transitionDelay: "0.2s" }}
      >
        <SocialGrowthSection />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
        className="section-animate-right"
        style={{ transitionDelay: "0.25s" }}
      >
        <MeetAura />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[5] = el;
        }}
        className="section-animate"
        style={{ transitionDelay: "0.3s" }}
      >
        <FAQ />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[6] = el;
        }}
        className="section-animate-right"
        style={{ transitionDelay: "0.35s" }}
      >
        <PricingSection />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[7] = el;
        }}
        className="section-animate"
        style={{ transitionDelay: "0.4s" }}
      >
        <GetStarted />
      </div>
    </div>
  );
}
