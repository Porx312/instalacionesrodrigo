"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};



const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b w-full  border-gray-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{item.question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180 transform" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-base">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSectionServices({ faqData }: { faqData: FAQItem[] }) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 ">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Resolvemos tus dudas
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} item={faq} />
        ))}
      </div>
    </section>
  );
}
