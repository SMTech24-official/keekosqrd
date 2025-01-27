"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqContent } from "@/constants/FaqContent";
import { useGetUserQuery } from "@/redux/api/registerApi";
import { useRouter } from "next/navigation";

const Faq = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { data } = useGetUserQuery(undefined);
  const userData = data?.data?.user;
  const router = useRouter();

  const toggleSection = (question: string) => {
    setOpenSection(openSection === question ? null : question);
  };

  const handleJoinNowClick = () => {
    if (!userData) {
      router.push("/register");
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-0 pb-[60px] md:pb-[120px]">
      <h1 className="text-center text-3xl font-bold mb-12">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="md:w-1/2">
          <p className="text-gray-600 mb-6">
            Not is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but occasionally circumstances occur
            in which toil and pain can procure him some great pleasure.
          </p>
          <div className="flex justify-center md:justify-start">
            {/* Render the button only if user is not logged in */}
            {!userData && (
              <button
                className="px-6 py-3 bg-grey text-default rounded-md hover:bg-gray-300 transition text-[18px] font-medium"
                onClick={handleJoinNowClick}
              >
                Join Now
              </button>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 bg-transparent">
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
