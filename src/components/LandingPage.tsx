import React from "react";
import { ChevronsDown } from "lucide-react";
import Image from "next/image";

const LandingPage: React.FC = () => {
    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-start pt-20 md:pt-24 px-4">
            <div className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat bg-[#EFEAD6]" />
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-75"
                style={{ backgroundImage: "url(/landing-page.png)" }}
            />

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
                <div className="flex items-end -mb-2 md:-mb-4">
                    <div className="flex flex-col text-left -mr-2 md:-mr-4 mb-2 md:mb-3 -space-y-1 md:-space-y-2">
                        <span className="text-base md:text-2xl font-bold text-primary-brown tracking-wider font-[family-name:var(--font-gotham-medium)]">
                            WHAT
                        </span>
                        <span className="text-base md:text-2xl font-bold text-primary-brown tracking-wider font-[family-name:var(--font-gotham-medium)]">
                            IS
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)]">
                        Balik
                    </h1>
                </div>
                <h1 className="text-6xl md:text-8xl font-extralight text-primary-brown mb-3 font-[family-name:var(--font-marons-regular)]">
                    Kampoeng?
                </h1>
                <p className="text-xs md:text-sm text-primary w-full px-2 md:w-1/2 mx-auto font-[family-name:var(--font-gotham-book)]">
                    We are a student-led volunteering organisation dedicated to
                    giving back to local communities through service, learning,
                    and cultural exchange. We believe in reconnecting with our
                    roots; Balik Kampoeng means “returning to the village”, a
                    reflection of our mission to work hand in hand with rural
                    communities to create meaningful impact.
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
    );
};

export default LandingPage;
