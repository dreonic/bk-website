import LandingPage from "@/components/LandingPage";

import Image from "next/image";
import StatisticsItem from "@/components/StatisticsItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { attributes } from "./content.md";

interface Programme {
    title: string;
    image: string;
    description: string;
}

interface Statistic {
    number: number;
    label: string;
    showPlus: boolean;
}

// Title component

const Title = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <h1
        className={`text-5xl md:text-7xl lg:text-8xl mb-6 font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)] ${className}`}
    >
        {children}
    </h1>
);

export default function Home() {
    const {
        landingDescription,
        landingLeftImages,
        landingRightImages,
        whyWeExistTitle,
        whyWeExistDescription,
        ourProgrammeTitle,
        programmes,
        ourImpactTitle,
        statistics,
        boyolaliImage,
        makeADifferenceTitle,
        makeADifferenceDescription,
    } = attributes as {
        landingDescription: string;
        landingLeftImages: string[];
        landingRightImages: string[];
        whyWeExistTitle: string;
        whyWeExistDescription: string;
        ourProgrammeTitle: string;
        programmes: Programme[];
        ourImpactTitle: string;
        statistics: Statistic[];
        boyolaliImage: string;
        makeADifferenceTitle: string;
        makeADifferenceDescription: string;
    };

    return (
        <div>
            <LandingPage
                description={landingDescription}
                leftImages={[...landingLeftImages, ...landingLeftImages]}
                rightImages={[...landingRightImages, ...landingRightImages]}
            />

            {/* Why We Exist */}
            <div className="flex flex-col items-center w-full py-12 md:py-30 px-4 md:px-32 bg-white">
                <Title>{whyWeExistTitle}</Title>
                <p className="text-base md:text-xl text-center text-primary-brown max-w-4xl leading-relaxed font-[family-name:var(--font-gotham-book)]">
                    {whyWeExistDescription}
                </p>
            </div>

            {/* Our Programme */}
            <div className="flex flex-col items-center w-full py-12 lg:h-[90vh] md:py-15 bg-secondary-beige">
                <Title>{ourProgrammeTitle}</Title>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center px-8 gap-8 md:gap-16 lg:gap-24 w-full">
                    {programmes.map((programme, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-full max-w-[14rem] items-center gap-4"
                        >
                            <h1 className="flex text-5xl/8 lg:text-6xl/10 font-medium text-primary-brown text-center md:h-24 items-end md:items-center font-[family-name:var(--font-marons-regular)]">
                                {programme.title}
                            </h1>
                            <Image
                                src={programme.image}
                                alt={programme.title}
                                width={320}
                                height={320}
                            />
                            <p className="text-sm md:text-md font-[family-name:var(--font-gotham-book)] text-center text-primary-brown">
                                {programme.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Statistics */}
            <div className="flex flex-col items-center justify-center w-full bg-primary-brown py-12 md:py-20 lg:h-[90vh]">
                <Title className="text-secondary-beige">{ourImpactTitle}</Title>
                <div className="grid grid-cols-2 md:grid-cols-3 w-full px-4 md:px-32 justify-items-center gap-8 md:gap-16 mt-2">
                    {statistics.map((stat, index) => (
                        <StatisticsItem
                            key={index}
                            number={stat.number}
                            label={stat.label}
                            showPlus={stat.showPlus}
                        />
                    ))}
                </div>
            </div>

            {/* Boyolali */}
            <div className="flex flex-col md:flex-row items-center w-full h-144 justify-center bg-secondary-beige">
                <div className="relative w-full md:w-1/3 h-72 md:h-full">
                    <Image
                        src={boyolaliImage}
                        alt="Impact Boyolali"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative flex flex-col items-center md:items-end w-full md:w-2/3 px-6 md:px-16 py-8 md:py-12">
                    <div className="w-full flex justify-end">
                        <Image
                            src="/textboyolali.svg"
                            alt="Boyolali"
                            width={900}
                            height={220}
                            priority
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="text-sm md:text-xl mt-8 md:mt-[3rem] text-center md:text-end font-normal">
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
            <div className="flex flex-col items-center w-full py-12 md:py-24 justify-center px-6 md:px-32">
                <Title>{makeADifferenceTitle}</Title>
                <p className="text-sm md:text-xl text-center font-light text-primary-brown my-6 md:my-8">
                    {makeADifferenceDescription
                        .split(". ")
                        .map((sentence, idx, arr) => (
                            <span key={idx}>
                                {sentence}
                                {idx < arr.length - 1 && "."}
                                {idx === 0 && (
                                    <>
                                        <br className="hidden md:block" />
                                        <span className="md:hidden"> </span>
                                    </>
                                )}
                            </span>
                        ))}
                </p>
                <div className="flex flex-col items-center md:flex-row gap-4 md:gap-8 w-full sm:w-auto">
                    <Link href="/donate">
                        <Button
                            variant="outline"
                            className="text-base md:text-xl p-4 md:p-6 font-bold rounded-full mt-6 md:mt-8 hover:shadow-lg"
                        >
                            DONATE
                        </Button>
                    </Link>
                    <Link href="/partnerships">
                        <Button
                            variant="outline"
                            className="text-base md:text-xl p-4 md:p-6 font-bold rounded-full md:mt-8 hover:shadow-lg"
                        >
                            PARTNERSHIPS
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
