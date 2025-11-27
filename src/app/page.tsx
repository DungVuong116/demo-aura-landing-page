"use client";
import { CommentsSection } from "@/components/body/comments-section";
import { FAQ } from "@/components/body/faq";
import { GetStarted } from "@/components/body/get-started";
import { HeroSection } from "@/components/body/hero-section";
import { MeetAura } from "@/components/body/meet-aura";
import { NumbersSection } from "@/components/body/numbers-section";
import { PricingSection } from "@/components/body/pricing-section";
import { SocialGrowthSection } from "@/components/body/social-growth-section";
import { RedirectModal } from "@/components/redirect-modal";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <div className="my-10 md:my-20 flex flex-col gap-20">
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <NumbersSection />
      <div
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="section-animate"
        style={{ transitionDelay: "0.15s" }}
      >
        <CommentsSection />
      </div>
      <SocialGrowthSection onOpenModal={() => setIsModalOpen(true)} />
      <MeetAura onOpenModal={() => setIsModalOpen(true)} />
      <div className="flex flex-col-reverse md:flex-col gap-20">
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
          <PricingSection onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[7] = el;
        }}
        className="section-animate"
        style={{ transitionDelay: "0.4s" }}
      >
        <GetStarted onOpenModal={() => setIsModalOpen(true)} />
      </div>

      <RedirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
