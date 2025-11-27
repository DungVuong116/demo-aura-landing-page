"use client";
import Image from "next/image";
import auraImage from "@/assets/images/aura.png";
import { PricingCard } from "./pricing-card";

interface PricingSectionProps {
  onOpenModal: () => void;
}

const pricingPlans = [
  {
    title: "AURA PRO",
    credits: "14,100 credits",
    commentsPerDay: "22",
    price: "$99/month",
    features: [
      "Dedicated USA phone",
      "Social calendar for posting",
      "Growth phone access",
      "Analytics dashboard",
    ],
  },
];

export const PricingSection = ({ onOpenModal }: PricingSectionProps) => {
  return (
    <section className="flex flex-col-reverse md:flex-row w-full items-center justify-center gap-16">
      {/* Left side - Decorative AURA image */}
      <div className="flex flex-col-reverse md:flex-row gap-16">
        <div className="relative h-[421.76px] w-[253.77px] shrink-0">
          <Image
            src={auraImage}
            alt="AURA"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right side - Pricing cards */}
        <div className="flex gap-16 w-full">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              credits={plan.credits}
              commentsPerDay={plan.commentsPerDay}
              price={plan.price}
              features={plan.features}
              onPriceClick={onOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
