"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-300">
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between py-4 text-left"
                    >
                        <span className="text-2xl font-semibold font-[family-name:var(--font-gotham-medium)]">
                            {item.question}
                        </span>
                        {openIndex === index ? (
                            <ChevronUp className="w-5 h-5 flex-shrink-0" />
                        ) : (
                            <ChevronDown className="w-5 h-5 flex-shrink-0" />
                        )}
                    </button>
                    {openIndex === index && (
                        <div className="pb-4">
                            <p className="text-base">{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
