import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";

import Image from "next/image";
import StatisticsItem from "@/components/StatisticsItem";

export default function Home() {
    return (
        <div>
            <LandingPage />
            {/* <Footer /> */}

            {/* Our Programme */}
            <div className="flex flex-col items-center w-full h-144 pt-15 gap-8">
                <h1 className="text-6xl md:text-7xl font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)]">
                    Our Programme
                </h1>
                <div className="flex items-start justify-center gap-8 md:gap-16 lg:gap-24 mt-10 w-full h-72">
                    <div className="flex flex-col w-56 items-center gap-2">
                        <h1 className="text-2xl md:text-3xl font-medium text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            Beloem BK
                        </h1>
                        <Image
                            src="/landing/our-programme-1.jpg"
                            alt="Our Programme"
                            width={144}
                            height={144}
                        />
                        <p className="text-2xs md:text-sm font-medium">
                            BeloemBK is an initiative to foster meaningful
                            community involvement by offering participants an
                            opportunity to experience volunteering firsthand.
                        </p>
                    </div>
                    <div className="flex flex-col w-56 items-center gap-2">
                        <h1 className="text-2xl md:text-3xl font-medium text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            Education
                        </h1>
                        <Image
                            src="/landing/our-programme-2.jpg"
                            alt="Our Programme"
                            width={144}
                            height={144}
                        />
                        <p className="text-2xs md:text-sm font-medium">
                            Our Education arm aims to enhance learning
                            opportunities for the community, providing
                            programmes and activities that support skill
                            development and lifelong learning.
                        </p>
                    </div>
                    <div className="flex flex-col w-56 items-center gap-2">
                        <h1 className="text-2xl md:text-3xl font-medium text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            Environment
                        </h1>
                        <Image
                            src="/landing/our-programme-3.jpg"
                            alt="Environment"
                            width={144}
                            height={144}
                        />
                        <p className="text-2xs md:text-sm font-medium">
                            Our Environment arm focuses on improving the local
                            environment through sustainable projects and
                            initiatives that benefit both the community and the
                            natural surroundings.
                        </p>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-rows-2 w-full justify-items-center bg-primary-brown py-24 gap-16">
                <div className="flex flex-row items-center gap-16">
                    <StatisticsItem number="6" label="Cities" />
                    <StatisticsItem number="14" label="NGOs" />
                    <StatisticsItem number="300+" label="Volunteers" />
                </div>
                <div className="flex flex-row items-center gap-16">
                    <StatisticsItem number="200+" label="People Reached" />
                    <StatisticsItem
                        number="20"
                        label="Environmental Projects"
                    />
                    <StatisticsItem number="13" label="Villages Visited" />
                </div>
            </div>
        </div>
    );
}
