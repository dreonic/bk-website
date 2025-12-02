"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import DonationMethod from "@/components/DonationMethod";
import SubmissionConfirmation from "@/components/SubmissionConfirmation";
import { Button } from "@/components/ui/button";

const headerDescription = `Each year, Balik Kampoeng reach communities in need, creating meaningful impact through initiatives in education, environmental sustainability, and community empowerment. With the support of donors and partners, we are able to extend our reach, bring projects to life, and uplift communities across the region.

Every contribution, no matter how big or small, helps transform lives, nurture potential, and foster lasting change. Join us in making a difference and be part of the journey to create stronger, empowered communities.`;

export default function DonatePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({ name, email });
        setIsSubmitted(true);
    };

    return (
        <>
            <Header title="Donation" description={headerDescription} />

            <div className="flex flex-col items-center py-16 px-8 text-primary-brown">
                <div className="relative w-full max-w-2xl h-64 md:h-80 rounded-lg overflow-hidden mb-8">
                    <Image
                        src="/donate/donation-hero.jpg"
                        alt="Donation impact"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="text-center max-w-2xl mb-12">
                    <p className="text-sm md:text-base text-primary-brown">
                        No matter the size, every donation plays a vital role in
                        supporting our mission. Your generosity helps provide
                        resources, fund community projects, and empower
                        individuals, ensuring that our programmes continue to
                        make a tangible difference where it matters most.
                    </p>
                </div>

                <div className="text-center max-w-2xl mb-16">
                    <p className="text-sm md:text-base text-primary-brown">
                        We accept donation via{" "}
                        <strong className="font-bold">Bank BCA (IDR)</strong>{" "}
                        and{" "}
                        <strong className="font-bold underline">
                            Bank Transfer/Paynow (SGD)
                        </strong>
                        . If you would like to contribute through other methods,
                        please fill out the form below and our team will reach
                        out to assist you.
                    </p>
                </div>

                <DonationMethod
                    title="Bank BCA (IDR)"
                    qrCodeSrc="/donate/qr-bca.png"
                    qrCodeAlt="BCA QR Code"
                    bankName="Bank BCA"
                />

                <DonationMethod
                    title="Local Transfer (SGD)"
                    qrCodeSrc="/donate/qr-paynow.png"
                    qrCodeAlt="PayNow QR Code"
                    bankName="DBS Bank Pte. Ltd."
                />

                <div className="w-full max-w-md">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-[family-name:var(--font-gotham-medium)]">
                        Other Methods
                    </h2>
                    <p className="text-sm text-center mb-8">
                        If you are unable to donate through the above methods,
                        please fill in the form so our team can reach out to you
                        directly.
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
