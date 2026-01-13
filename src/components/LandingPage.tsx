import React from "react";
import { ChevronsDown } from "lucide-react";
import Image from "next/image";

interface LandingPageProps {
    description: string;
    leftImages: string[];
    rightImages: string[];
}

const LandingPage: React.FC<LandingPageProps> = ({
    description,
    leftImages,
    rightImages,
}) => {
    // Duplicate images for seamless loop
    const duplicatedLeft = [...leftImages, ...leftImages];
    const duplicatedRight = [...rightImages, ...rightImages];

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-30 bg-[#EFEAD6]" />

            {/* Top scroll strip - mobile only */}
            <div className="md:hidden absolute top-24 left-0 right-0 h-32 overflow-hidden opacity-60">
                <div className="animate-scroll-left flex flex-row gap-4 h-full">
                    {duplicatedLeft.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative h-full aspect-[4/3] flex-shrink-0"
                        >
                            <Image
                                src={img}
                                alt={`Top scroll ${idx}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom scroll strip - mobile only */}
            <div className="md:hidden absolute bottom-24 left-0 right-0 h-32 overflow-hidden opacity-60">
                <div className="animate-scroll-right flex flex-row gap-4 h-full">
                    {duplicatedRight.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative h-full aspect-[4/3] flex-shrink-0"
                        >
                            <Image
                                src={img}
                                alt={`Bottom scroll ${idx}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Left scroll strip - desktop only */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 md:w-48 lg:w-64 overflow-hidden opacity-60">
                <div className="animate-scroll-up flex flex-col gap-4">
                    {duplicatedLeft.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative w-full aspect-[4/3] flex-shrink-0"
                        >
                            <Image
                                src={img}
                                alt={`Left scroll ${idx}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right scroll strip - desktop only */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 md:w-48 lg:w-64 overflow-hidden opacity-60">
                <div className="animate-scroll-down flex flex-col gap-4">
                    {duplicatedRight.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative w-full aspect-[4/3] flex-shrink-0"
                        >
                            <Image
                                src={img}
                                alt={`Right scroll ${idx}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full">
                {/* Donate Here text - hidden on mobile */}
                <div className="hidden md:flex absolute top-16 right-8 flex-col items-end gap-2 text-primary-brown z-10">
                    <Image
                        src="/curved-arrow.png"
                        alt="Curved arrow"
                        className="scale-x-[-1] rotate-65 mr-8"
                        width={40}
                        height={40}
                    />
                    <span className="text-base font-base -mt-2 mr-10">
                        Donate here!
                    </span>
                </div>

                <div className="flex flex-col items-center text-center z-10">
                    <div className="flex items-end -mb-2 md:-mb-4 lg:-mb-6">
                        <div className="flex flex-col text-left -mr-2 md:-mr-5 mb-1 md:mb-6 -space-y-1 md:-space-y-2">
                            <span className="text-md md:text-xl lg:text-3xl font-bold text-primary-brown tracking-wider font-[family-name:var(--font-gotham-medium)]">
                                WHAT
                            </span>
                            <span className="text-md md:text-xl lg:text-3xl font-bold text-primary-brown tracking-wider font-[family-name:var(--font-gotham-medium)]">
                                IS
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            Balik
                        </h1>
                    </div>
                    <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-extralight text-primary-brown mb-4 md:mb-6 font-[family-name:var(--font-marons-regular)]">
                        Kampoeng?
                    </h1>
                    <p className="text-xs md:text-base lg:text-md text-primary w-full px-2 md:w-2/3 lg:w-1/2 mx-auto font-[family-name:var(--font-gotham-book)]">
                        {description}
                    </p>
                </div>

                {/* Scroll to learn more */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-primary-brown z-10">
                    <span className="text-xs md:text-sm font-[family-name:var(--font-gotham-book)] mb-1">
                        Scroll to learn more
                    </span>
                    <ChevronsDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
