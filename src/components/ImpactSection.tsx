"use client";

import Image from "next/image";
import {useMemo, useState} from "react";
import {cn} from "@/lib/utils";

interface Impact {
    id: string;
    name: string;
    location: string;
    description: string;
    mapOffset: { top: number, left: number };
}

const impacts: Impact[] = [
    {
        id: "BK2025",
        name: "BK2025: Surf the Waves",
        location: "Buleleng, Bali Utara",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mapOffset: {top: 50, left: 33},
    },
    {
        id: "BK2024",
        name: "BK2024: Through the Jungle",
        location: "Bukit Lawang, North Sumatra",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mapOffset: {top: 11, left: 6},
    },
    {
        id: "BK2023",
        name: "BK2023: Beyond the Shore",
        location: "Tanjung Uma & Pulau Belakang Padang, Batam",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mapOffset: {top: 19, left: 17},
    },
];

const ImpactSection: React.FC = () => {
    const [selectedID, setSelectedID] = useState(impacts[0].id);

    const selectedImpact: Impact = useMemo(() => {
        return impacts.find(impact => impact.id === selectedID)!;
    }, [selectedID]);

    return (
        <div className="flex flex-col items-center w-full py-12 md:pt-15 gap-8">
            <h1 className="text-3xl md:text-[4rem] font-extralight text-primary-brown font-[family-name:var(--font-marons-regular)]">
                Impact
            </h1>
            <div className="flex flex-col md:flex-row-reverse items-center w-full py-8 px-12">
                <div className="relative basis-1/2">
                    <Image
                        src="/landing/id-map.png"
                        alt="a map of Indonesia"
                        className="object-cover aspect-video w-full"
                        width={624} height={468}
                    />
                    {impacts.map(({id, mapOffset}) => (
                        <div
                            key={id}
                            className="absolute size-1 flex-col items-center justify-center"
                            style={{
                                top: `${mapOffset.top}%`,
                                left: `${mapOffset.left}%`,
                            }}
                        >
                            <button
                                className="group hover:cursor-pointer flex flex-col items-center justify-center"
                                onClick={() => setSelectedID(id)}
                            >
                                <p className={cn("text-[2vw] md:text-[1.175vw] group-hover:underline underline-offset-2", id === selectedID ? "font-bold" : "font-light")}>{id}</p>
                                <Image
                                    src="/location.svg"
                                    alt="location marker"
                                    className="w-[4vw] md:w-[2.175vw]"
                                    width={70}
                                    height={100}
                                />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="basis-1/2 text-primary-brown">
                    <h2 className="text-base sm:text-lg md:text-2xl font-semibold font-[family-name:var(--font-gotham-medium)]">
                        {selectedImpact.name}
                    </h2>
                    <p className="mb-4">{selectedImpact.location}</p>
                    <p>{selectedImpact.description}</p>
                </div>
            </div>
        </div>
    );
}
ImpactSection.displayName = "ImpactSection";

export default ImpactSection;
