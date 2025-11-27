"use client";
import { Typography } from "@poweredbygen/gen-ui";
import { FAQItem } from "./faq-item";

const faqData = [
  {
    question: "Is this safe? Will my account get flagged?",
    answer:
      "No. AURA behaves through a physical device with human-like timing, activity patterns, and a U.S. network. No browser scripts, no automation footprints, no API risks.",
  },
  {
    question: "Do I control the phone too?",
    answer:
      "Yes, you get your own dedicated phone that you can do anything you want with including posting content.",
    isOpen: false,
  },
  {
    question: "How fast does this happen?",
    answer:
      "You’ll have your phone in seconds and can start getting value in 5 minutes.",
  },
  {
    question: "How many AURA + phones can I get?",
    answer: "As many as you want. Time to deploy your army.",
  },
  {
    question: "How can I get help?",
    answer: "Message us anytime at help@aura.host",
  },
];

export const FAQ = () => {
  return (
    <section className="flex w-full flex-col items-start gap-8">
      <div className="flex w-full flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-3">
            <Typography
              variant="h6"
              className="whitespace-nowrap text-center text-[34px] font-medium leading-[42px] text-(--faq-text)"
            >
              Frequently Asked Questions
            </Typography>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
