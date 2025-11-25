"use client";
import { TestimonialCard } from "./testimonial-card";
import MockLogo from "@/assets/images/tony-chen.png";

const testimonials = [
  {
    quote:
      'AURA brought in more followers in a week than my last 3 months combined."',
    name: "Tony Chen",
    title: "Mon Blanket Company",
    imageUrl: MockLogo,
  },
  {
    quote: '"Her comments feel human. People respond."',
    name: "Thu Vu",
    title: "Influencer",
    imageUrl: MockLogo,
  },
  {
    quote:
      '"My AI influencer is growing fast. The USA phone number unlocks everything."',
    name: "TT Brown",
    title: "Creator",
    imageUrl: MockLogo,
  },
];

export const CommentsSection = () => {
  return (
    <section className="flex w-full items-center gap-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </section>
  );
};
