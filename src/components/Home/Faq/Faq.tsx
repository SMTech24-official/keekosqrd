"use client";
import { faqContent } from "@/constants/FaqContent";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Faq = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (question: string) => {
    setOpenSection(openSection === question ? null : question);
  };

  return (
    <div className="container mx-auto px-4 md:px-0 pb-[60px] md:pb-[120px]">
      <h1 className="text-center text-3xl font-bold mb-12">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="">
        {/* Left Column */}
        {/* Right Column */}
        <div className="md:w-1/2 bg-transparent mx-auto">
          {faqContent.map((section, index) => (
            <div key={index} className="border-b-[2px] border-[#C3C3C3]">
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => toggleSection(section.question)}
              >
                <span className="text-lg font-medium text-[#4F4F4F]">
                  {section.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openSection === section.question ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openSection === section.question && (
                <div className="pb-4 text-gray-600">{section.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
