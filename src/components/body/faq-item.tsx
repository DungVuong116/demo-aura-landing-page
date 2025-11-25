"use client";

import { Typography } from "@poweredbygen/gen-ui";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export const FAQItem = ({ question, answer, isOpen = false }: FAQItemProps) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="w-full border-b border-(--faq-border) px-0 py-5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-start justify-between gap-4"
      >
        <Typography
          variant="h6"
          className="flex-1 text-left text-[24px] font-medium leading-[30px] text-(--faq-text)"
        >
          {question}
        </Typography>
        <ChevronDown
          className={`h-6 w-6 shrink-0 text-(--faq-text) transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Typography
            variant="body2"
            className="mt-3 text-[16px] font-normal leading-[26px] text-(--faq-text)"
          >
            {answer}
          </Typography>
        </div>
      </div>
    </div>
  );
};
