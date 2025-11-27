"use client";
import { TestimonialCard } from "./testimonial-card";

import TonyChen from "@/assets/images/tony-chen.png";
import ThuVu from "@/assets/images/thuvu.png";
import TTBrown from "@/assets/images/ttbrown.png";

const testimonials = [
  {
    quote:
      'AURA brought in more followers in a week than my last 3 months combined."',
    name: "Tony Chen",
    title: "Mon Blanket Company",
    imageUrl: TonyChen,
  },
  {
    quote: '"Her comments feel human. People respond."',
    name: "Thu Vu",
    title: "Influencer",
    imageUrl: ThuVu,
  },
  {
    quote:
      '"My AI influencer is growing fast. The USA phone number unlocks everything."',
    name: "TT Brown",
    title: "Creator",
    imageUrl: TTBrown,
  },
];

export const CommentsSection = () => {
  return (
    <section className="flex w-full flex-col md:flex-row items-center gap-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </section>
  );
};
