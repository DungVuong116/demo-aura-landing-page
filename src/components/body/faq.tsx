"use client";
import { Typography } from "@poweredbygen/gen-ui";
import { FAQItem } from "./faq-item";

const faqData = [
  {
    question: "Is this safe? Will my account get flagged?",
    answer:
      "AURA operates through a dedicated U.S. phone that's separate from your main account. This keeps your personal device and account completely protected. The system mimics natural human behavior patterns, making engagement appear authentic and organic to platform algorithms.",
  },
  {
    question: "Do I control the phone too?",
    answer:
      "Yes! You have full control over the dedicated creator phone. You can use it not just for AURA's engagement activities, but also for uploading your content, managing brand accounts, and running your entire social workflow. It's your device, working 24/7 for your growth.",
    isOpen: false,
  },
  {
    question: "How fast does this happen?",
    answer:
      "AURA works around the clock, engaging with content in your niche 24/7. You'll start seeing increased profile visits within the first few days, with follower growth typically accelerating within the first week. The system learns and optimizes over time, becoming more effective at driving traffic to your profile.",
  },
  {
    question: "How many AURA + phones can I get?",
    answer:
      "You can scale your presence with multiple AURA + phone combinations. Each setup includes a dedicated U.S. device and AURA instance, allowing you to manage multiple accounts, niches, or brand profiles simultaneously. Contact our team to discuss multi-device packages tailored to your growth strategy.",
  },
  {
    question: "How can I get help?",
    answer:
      "Our support team is available 24/7 to assist you. You can reach us through the in-app chat, email support, or schedule a call with our growth specialists. We also provide comprehensive documentation, video tutorials, and a community forum where successful creators share their strategies and best practices.",
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
