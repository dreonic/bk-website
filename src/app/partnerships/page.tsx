"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import SubmissionConfirmation from "@/components/SubmissionConfirmation";
import { Button } from "@/components/ui/button";

interface PartnerSection {
    title: string;
    logos: string[];
}

const headerDescription = `Balik Kampoeng works with sponsors and like-minded NGOs to bring meaningful community programmes to life. Through collaboration, we create initiatives in education, environmental sustainability, and community empowerment that make a real difference. Join us as a partner to amplify impact, reach more communities, and drive positive change together.`;

const partnerSections: PartnerSection[] = [
    {
        title: "Past Sponsors",
        logos: [
            "/partnership/bank-indonesia.png",
            "/partnership/pertamina.png",
            "/partnership/aqua.png",
            "/partnership/daihatsu.png",
            "/partnership/ivor1.png",
            "/partnership/paragon.png",
            "/partnership/hillcon.png",
        ],
    },
    {
        title: "Past Partners",
        logos: [
            "/partnership/project-wings.png",
            "/partnership/partner-2.png",
            "/partnership/partner-3.png",
            "/partnership/aliansi-pemuda.png",
            "/partnership/sumatera.png",
            "/partnership/partner-6.png",
            "/partnership/sewara-tani.png",
            "/partnership/ksatria-batam.png",
        ],
    },
    {
        title: "Past Supporters",
        logos: [
            "/partnership/pintu.png",
            "/partnership/embassy-indonesia.png",
            "/partnership/nutrisari.png",
            "/partnership/hilo.png",
        ],
    },
];

const mediaPartnershipDescription = `We welcome media partners who share our commitment to creating positive and meaningful community impact. By collaborating with us, you'll play a key role in spotlighting the stories, challenges, and aspirations of the communities we serve. Through thoughtful coverage and shared platforms, we can raise awareness, inspire action, and strengthen public support for our initiatives. Together, we can amplify voices that matter and bring greater visibility to the work being done on the ground. Please reach out to us to explore media partnership opportunities by filling in the form below.`;

export default function PartnershipPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://ugaccavdisoogmc3eixgwufq5m0mztfv.lambda-url.ap-southeast-1.on.aws/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        organisation,
                        message,
                    }),
                }
            );

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error("Failed to submit partnership inquiry");
            }
        } catch (error) {
            console.error("Error submitting partnership inquiry:", error);
        }
    };

    return (
        <>
            <Header title="Partnerships" description={headerDescription} />

            <div className="flex flex-col items-center py-8 md:py-16 px-4 sm:px-8 text-primary-brown">
                {partnerSections.map((section, index) => (
                    <div
                        key={index}
                        className="w-full max-w-4xl mb-12 md:mb-16"
                    >
                        <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[3rem] text-center mb-6 md:mb-8 font-[family-name:var(--font-marons-regular)]">
                            {section.title}
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
                            {section.logos.map((logo, logoIndex) => (
                                <div
                                    key={logoIndex}
                                    className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32"
                                >
                                    <Image
                                        src={logo}
                                        alt={`Partner logo ${logoIndex + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Media Partnerships Section */}
                <div className="w-full max-w-4xl mb-16 md:mb-24">
                    <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[3rem] text-center mb-4 md:mb-6 font-[family-name:var(--font-marons-regular)]">
                        Media Partnerships
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed">
                        {mediaPartnershipDescription}
                    </p>
                </div>

                {/* Contact Form */}
                <div className="w-full max-w-md px-4 sm:px-0">
                    <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[3rem] text-center mb-6 md:mb-8 font-[family-name:var(--font-marons-regular)]">
                        Contact Us
                    </h2>

                    {isSubmitted ? (
                        <SubmissionConfirmation email={email} />
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 sm:space-y-6"
                        >
                            <div>
                                <label className="block text-sm sm:text-base mb-1">
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
                                <label className="block text-sm sm:text-base mb-1">
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
                                <label className="block text-sm sm:text-base mb-1">
                                    Organisation
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={organisation}
                                    onChange={(e) =>
                                        setOrganisation(e.target.value)
                                    }
                                    required
                                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-primary-brown"
                                />
                            </div>
                            <div>
                                <label className="block text-sm sm:text-base mb-1">
                                    Message
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
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
