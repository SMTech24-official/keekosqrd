"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    "General Questions",
    "Subscription Questions",
    "Voting Questions",
    "Raffle and Winner Selection",
    "Referral Program",
    "Shipping and Delivery",
    "Other Questions",
  ];

  return (
    <div className="container mx-auto px-4 md:px-0 pb-[120px]">
      <h1 className="text-center text-3xl font-bold mb-12">
        Do You Have Any Questions?
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="md:w-[515px]">
          <h1 className="text-2xl  text-default mb-4">
            Common Inquiries About Our Service
          </h1>
          <p className="text-gray-600 mb-6">
            Not is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but occasionally circumstances occur
            in which toil and pain can procure him some great pleasure.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 bg-grey text-default rounded-md hover:bg-gray-300 transition text-[18px] font-medium">
              Join Now
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 bg-transparent">
          {sections.map((section) => (
            <div key={section} className="border-b-[2px] border-[#C3C3C3]">
              <button
                className="w-full flex justify-between items-center  py-4 text-left focus:outline-none"
                onClick={() => toggleSection(section)}
              >
                <span className="text-lg font-medium text-[#4F4F4F]">
                  {section}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openSection === section ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openSection === section && (
                <div className="pb-4 text-gray-600">
                  <p>
                    Here you can add the content for <strong>{section}</strong>.
                    Provide answers or details as necessary.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
