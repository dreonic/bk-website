"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Accordion from "@/components/Accordion";
import SubmissionConfirmation from "@/components/SubmissionConfirmation";
import { Button } from "@/components/ui/button";

const headerDescription = `Find the answers to your burning questions here!`;

const faqItems = [
    {
        question: "How do I join Balik Kampoeng as a volunteer?",
        answer: "Check out our Instagram or Telegram Channel for any new updates about Balik Kampoeng.",
    },
    {
        question: "What do you do in Balik Kampoeng as a volunteer?",
        answer: "As a volunteer, you'll participate in community service activities focused on education, environmental sustainability, and community empowerment. This includes teaching, organizing events, and working directly with local communities in Indonesia.",
    },
    {
        question: "lorem ipsum",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

export default function FAQPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, question });
        setIsSubmitted(true);
    };

    return (
        <>
            <Header title="FAQ" description={headerDescription} />

            <div className="flex flex-col items-center py-16 px-8 text-primary-brown">
                {/* Hero Image */}
                <div className="relative w-full max-w-2xl h-64 md:h-80 mb-12">
                    <Image
                        src="/faq/faq-hero.jpg"
                        alt="FAQ Hero"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Accordion */}
                <div className="w-full max-w-2xl mb-16">
                    <Accordion items={faqItems} />
                </div>

                {/* Question Form */}
                <div className="w-full max-w-md">
                    <h2 className="text-[2rem] md:text-[3rem] font-bold text-center mb-4 font-[family-name:var(--font-gotham-medium)]">
                        Have a Question?
                    </h2>
                    <p className="text-base text-center mb-8">
                        Can&apos;t find the answer you&apos;re looking for?
                        Submit your question and we&apos;ll get back to you.
                    </p>

                    {isSubmitted ? (
                        <SubmissionConfirmation email={email} />
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-base mb-1">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-primary-brown"
                                />
                            </div>
                            <div>
                                <label className="block text-base mb-1">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-primary-brown"
                                />
                            </div>
                            <div>
                                <label className="block text-base mb-1">
                                    Your Question
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={question}
                                    onChange={(e) =>
                                        setQuestion(e.target.value)
                                    }
                                    required
                                    rows={4}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-brown"
                                />
                            </div>
                            <div className="flex justify-center pt-4">
                                <Button
                                    type="submit"
                                    variant="outline"
                                    className="rounded-full px-8"
                                >
                                    SUBMIT
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}
