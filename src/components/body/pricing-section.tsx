"use client";
import Image from "next/image";
import auraImage from "@/assets/images/aura.png";
import { PricingCard } from "./pricing-card";

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
  {
    title: "AURA GROWTH",
    credits: "17,200 credits",
    commentsPerDay: "30",
    price: "$139/month",
    features: [
      "Dedicated USA phone",
      "Social calendar for posting",
      "Growth phone access",
      "Analytics dashboard",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="flex w-full items-start gap-16">
      {/* Left side - Decorative AURA image */}
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
      <div className="flex flex-1 gap-16">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            credits={plan.credits}
            commentsPerDay={plan.commentsPerDay}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
};
