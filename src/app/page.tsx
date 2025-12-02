import LandingPage from "@/components/LandingPage";

import Image from "next/image";
import StatisticsItem from "@/components/StatisticsItem";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <LandingPage />

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
            <div className="grid md:grid-cols-3 sm:grid-cols-2 w-full px-32 justify-items-center bg-primary-brown py-24 gap-16">
                <StatisticsItem number="6" label="Cities" />
                <StatisticsItem number="14" label="NGOs" />
                <StatisticsItem number="300+" label="Volunteers" />
                <StatisticsItem number="200+" label="People Reached" />
                <StatisticsItem number="20" label="Environmental Projects" />
                <StatisticsItem number="13" label="Villages Visited" />
            </div>

            {/* Impact */}

            <div className="flex flex-col items-center w-full h-144 pt-15 gap-8">
                <h1 className="text-6xl md:text-7xl font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)]">
                    Impact
                </h1>
            </div>

            {/* Boyolali */}
            <div className="flex sm:flex-col md:flex-row items-center w-full h-144 bg-secondary-beige">
                <div className="relative w-1/3 h-full">
                    <Image
                        src="/landing/boyolali2.jpg"
                        alt="Impact Boyolali"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative flex flex-col items-end w-2/3 h-screen px-[8vw] py-[8vw]">
                    <div className="relative w-full" style={{ height: "12vw" }}>
                        <p className="absolute left-[4vw] top-[3vw] text-[1.25vw] font-bold font-[family-name:var(--font-gotham-book)]">
                            We are
                            <br />
                            going to...
                        </p>
                        <h1 className="absolute right-0 top-0 text-[11vw] font-extralight text-primary-pink font-[family-name:var(--font-marons-regular)]">
                            Boyolali!
                        </h1>
                        <p className="absolute right-[1vw] top-[11vw] text-[4vw] font-normal text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            bk 2026
                        </p>
                    </div>

                    <p className="text-[1.5vw] mt-[6vw] text-end font-normal">
                        Balik Kampoeng 2026 will head to Boyolali, a vibrant
                        community known for its rich culture and warm-hearted
                        residents. Volunteers will engage in projects that
                        support local education and environmental
                        sustainability, creating meaningful impact while
                        learning from the community.
                    </p>
                </div>
            </div>
            {/* Make a difference */}

            <div className="flex flex-col items-center w-full h-[30vw] py-16 px-32">
                <h1 className="text-[5vw] font-light text-primary-brown font-[family-name:var(--font-marons-regular)]">
                    Make a difference
                </h1>
                <p className="text-[1.5vw] text-center font-light text-primary-brown mt-6">
                    Your support enables us to empower communities, enhance
                    education, and promote sustainability.
                    <br />
                    Partner with us or contribute today to create lasting impact
                    where it&apos;s needed most.
                </p>
                <div className="flex flex-row gap-[2vw]">
                    <Button
                        variant="outline"
                        className="text-[1.25vw] p-5 font-bold rounded-full mt-8"
                    >
                        DONATE
                    </Button>
                    <Button
                        variant="outline"
                        className="text-[1.25vw] p-5 font-bold rounded-full mt-8"
                    >
                        PARTNERSHIPS
                    </Button>
                </div>
            </div>
        </div>
    );
}
