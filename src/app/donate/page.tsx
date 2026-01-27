"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import DonationMethod from "@/components/DonationMethod";
import SubmissionConfirmation from "@/components/SubmissionConfirmation";
import { Button } from "@/components/ui/button";
import { attributes } from "./content.md";

interface DonationMethodData {
    title: string;
    bankName: string;
    accountName: string;
    accountDetails: string;
    qrCodeSrc?: string;
}

export default function DonatePage() {
    const {
        headerDescription,
        heroImage,
        introText,
        paymentMethodsText,
        donationMethods,
        otherMethodsTitle,
        otherMethodsDescription,
    } = attributes as {
        headerDescription: string;
        heroImage: string;
        introText: string;
        paymentMethodsText: string;
        donationMethods: DonationMethodData[];
        otherMethodsTitle: string;
        otherMethodsDescription: string;
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const lambdaEndpoint = process.env.NEXT_PUBLIC_LAMBDA_ENDPOINT;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(lambdaEndpoint || "", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    type: "donation inquiry",
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error("Failed to submit donation inquiry");
            }
        } catch (error) {
            console.error("Error submitting donation inquiry:", error);
        }
    };

    return (
        <>
            <Header title="Donation" description={headerDescription} />

            <div className="flex flex-col items-center py-8 md:py-16 px-4 sm:px-8 text-primary-brown">
                <div className="relative w-full max-w-2xl h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-6 md:mb-8">
                    <Image
                        src={heroImage}
                        alt="Donation impact"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="text-center max-w-2xl mb-8 md:mb-12">
                    <p className="text-sm md:text-base text-primary-brown">
                        {introText}
                    </p>
                </div>

                <div className="text-center max-w-2xl mb-12 md:mb-16">
                    <p
                        className="text-sm md:text-base text-primary-brown"
                        dangerouslySetInnerHTML={{
                            __html: paymentMethodsText
                                .replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<strong>$1</strong>",
                                )
                                .replace(
                                    /<strong>(.*?)<\/strong>/g,
                                    (match, text) => {
                                        if (
                                            text.includes(
                                                "Bank Transfer/Paynow",
                                            )
                                        ) {
                                            return `<strong class="font-bold underline">${text}</strong>`;
                                        }
                                        return `<strong class="font-bold">${text}</strong>`;
                                    },
                                ),
                        }}
                    />
                </div>

                {donationMethods.map((method, index) => (
                    <DonationMethod
                        key={index}
                        title={method.title}
                        bankName={method.bankName}
                        accountName={method.accountName}
                        accountDetails={method.accountDetails}
                        qrCodeSrc={method.qrCodeSrc || undefined}
                        qrCodeAlt={
                            method.qrCodeSrc
                                ? `${method.title} QR Code`
                                : undefined
                        }
                    />
                ))}

                <div className="w-full max-w-md">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-[family-name:var(--font-gotham-medium)]">
                        {otherMethodsTitle}
                    </h2>
                    <p className="text-sm text-center mb-8">
                        {otherMethodsDescription}
                    </p>

                    {isSubmitted ? (
                        <SubmissionConfirmation email={email} />
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <label className="w-16 text-sm">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="flex-1 border border-primary-brown rounded px-3 py-2 text-sm focus:outline-none focus:ring-2"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="w-16 text-sm">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-1 border border-primary-brown rounded px-3 py-2 text-sm focus:outline-none focus:ring-2"
                                />
                            </div>
                            <div className="flex justify-center pt-4">
                                <Button
                                    type="submit"
                                    variant="outline"
                                    className="rounded-full px-8 font-bold"
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
