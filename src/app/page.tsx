import LandingPage from "@/components/LandingPage";

import Image from "next/image";
import StatisticsItem from "@/components/StatisticsItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <LandingPage />

            {/* Our Programme */}
            <div className="flex flex-col items-center w-full py-12 md:h-144 md:pt-15 gap-6 md:gap-8 px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)]">
                    Our Programme
                </h1>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 lg:gap-24 mt-4 md:mt-10 w-full">
                    <div className="flex flex-col w-full max-w-[14rem] items-center gap-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            Beloem BK
                        </h1>
                        <Image
                            src="/landing/our-programme-1.jpg"
                            alt="Our Programme"
                            width={144}
                            height={144}
                        />
                        <p className="text-xs md:text-sm font-medium text-center">
                            BeloemBK is an initiative to foster meaningful
                            community involvement by offering participants an
                            opportunity to experience volunteering firsthand.
                        </p>
                    </div>
                    <div className="flex flex-col w-full max-w-[14rem] items-center gap-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            Education
                        </h1>
                        <Image
                            src="/landing/our-programme-2.jpg"
                            alt="Our Programme"
                            width={144}
                            height={144}
                        />
                        <p className="text-xs md:text-sm font-medium text-center">
                            Our Education arm aims to enhance learning
                            opportunities for the community, providing
                            programmes and activities that support skill
                            development and lifelong learning.
                        </p>
                    </div>
                    <div className="flex flex-col w-full max-w-[14rem] items-center gap-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            Environment
                        </h1>
                        <Image
                            src="/landing/our-programme-3.jpg"
                            alt="Environment"
                            width={144}
                            height={144}
                        />
                        <p className="text-xs md:text-sm font-medium text-center">
                            Our Environment arm focuses on improving the local
                            environment through sustainable projects and
                            initiatives that benefit both the community and the
                            natural surroundings.
                        </p>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 w-full px-4 md:px-32 justify-items-center bg-primary-brown py-12 md:py-24 gap-8 md:gap-16">
                <StatisticsItem number={6} label="Cities" />
                <StatisticsItem number={14} label="NGOs" />
                <StatisticsItem number={300} label="Volunteers" showPlus />
                <StatisticsItem number={200} label="People Reached" showPlus />
                <StatisticsItem number={20} label="Environmental Projects" />
                <StatisticsItem number={13} label="Villages Visited" />
            </div>

            {/* Impact */}

            <div className="flex flex-col items-center w-full py-12 md:h-144 md:pt-15 gap-8">
                <h1 className="text-3xl md:text-[4rem] font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)]">
                    Impact
                </h1>
            </div>

            {/* Boyolali */}
            <div className="flex flex-col md:flex-row items-center w-full min-h-[80vh] md:h-144 bg-secondary-beige">
                <div className="relative w-full md:w-1/3 h-64 md:h-full">
                    <Image
                        src="/landing/boyolali2.jpg"
                        alt="Impact Boyolali"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative flex flex-col items-center md:items-end w-full md:w-2/3 px-6 md:px-[8vw] py-8 md:py-[8vw]">
                    <div
                        className="relative w-full text-center md:text-right"
                        style={{ minHeight: "12vw" }}
                    >
                        <p className="md:absolute md:left-16 md:top-4 text-sm md:text-xl font-bold font-[family-name:var(--font-gotham-book)] mb-2 md:mb-0">
                            We are
                            <br />
                            going to...
                        </p>
                        <h1 className="md:absolute md:right-0 md:top-0 text-5xl md:text-[10.5rem] font-extralight text-primary-pink font-[family-name:var(--font-marons-regular)]">
                            Boyolali!
                        </h1>
                        <p className="md:absolute md:right-6 md:top-[8rem] text-2xl md:text-[4vw] font-normal text-primary-brown font-[family-name:var(--font-marons-regular)]">
                            bk 2026
                        </p>
                    </div>

                    <p className="text-sm md:text-[1.5vw] mt-8 md:mt-[3rem] text-center md:text-end font-normal">
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
            <div className="flex flex-col items-center w-full h-full py-12 md:my-20 px-6 md:px-32">
                <h1 className="text-3xl md:text-[4rem] font-light text-primary-brown -mt-4 font-[family-name:var(--font-marons-regular)] text-center">
                    Make a difference
                </h1>
                <p className="text-base md:text-xl text-center font-light text-primary-brown mt-4 md:mt-6">
                    Your support enables us to empower communities, enhance
                    education, and promote sustainability.
                    <br className="hidden md:block" />
                    <span className="md:hidden"> </span>
                    Partner with us or contribute today to create lasting impact
                    where it&apos;s needed most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full sm:w-auto">
                    <Link href="/donate">
                        <Button
                            variant="outline"
                            className="text-base md:text-xl p-4 md:p-5 font-bold rounded-full mt-6 md:mt-8 hover:shadow-lg"
                        >
                            DONATE
                        </Button>
                    </Link>
                    <Link href="/partnerships">
                        <Button
                            variant="outline"
                            className="text-base md:text-xl p-4 md:p-5 font-bold rounded-full sm:mt-6 md:mt-8 hover:shadow-lg"
                        >
                            PARTNERSHIPS
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
