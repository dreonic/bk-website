import React from "react";

const LandingPage: React.FC = () => {
    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-start pt-24">
            <div className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat bg-[#EFEAD6]" />
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-75"
                style={{ backgroundImage: "url(/landing-page.png)" }}
            />
            <div className="flex flex-col items-center text-center z-10">
                <div className="flex items-end -mb-4">
                    <div className="flex flex-col text-left -mr-4 mb-3 -space-y-2">
                        <span className="text-xl md:text-2xl font-bold text-primary-brown tracking-wider font-[family-name:var(--font-gotham-medium)]">
                            WHAT
                        </span>
                        <span className="text-xl md:text-2xl font-bold text-primary-brown tracking-wider font-[family-name:var(--font-gotham-medium)]">
                            IS
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)]">
                        Balik
                    </h1>
                </div>
                <h1 className="text-7xl md:text-8xl font-extralight text-primary-brown mb-3 font-[family-name:var(--font-marons-regular)]">
                    Kampoeng?
                </h1>
                <p className="text-sm md:text-sm sm:text-sm text-primary w-3/4 md:w-1/2  mx-auto font-[family-name:var(--font-gotham-book)]">
                    We are a student-led volunteering organisation dedicated to
                    giving back to local communities through service, learning,
                    and cultural exchange. We believe in reconnecting with our
                    roots; Balik Kampoeng means “returning to the village”, a
                    reflection of our mission to work hand in hand with rural
                    communities to create meaningful impact.
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
