"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { ToggleGroup } from "@/components/ui/toggle-group";
import MemberCard from "@/components/MemberCard";
import Image from "next/image";

interface Member {
    name: string;
    subtitle?: string;
    image: string;
}

interface Department {
    label: string;
    title: string;
    groupPhoto?: string;
    members: Member[];
    gridCols: string;
}

const DEPARTMENTS: Department[] = [
    {
        label: "TOPS",
        title: "tops",
        groupPhoto: "/committee/tops-group.jpg",
        gridCols: "grid-cols-2",
        members: [
            { name: "Joanka Devi Kalynda", image: "/committee/joanka.jpg" },
            { name: "Muhammad Wisnu Darmawan", image: "/committee/wisnu.jpg" },
            { name: "Carlline Angelica", image: "/committee/caca.jpg" },
            { name: "Puti Kinanti", image: "/committee/kinan.jpg" },
            { name: "Maria Gracia Athalia", image: "/committee/maria.jpg" },
        ],
    },
    {
        label: "Business",
        title: "business directors",
        groupPhoto: "/committee/business-group.jpg",
        gridCols: "grid-cols-2",
        members: [
            { name: "Deandra Devi", image: "/committee/deandra.jpg" },
            { name: "Lynn Louise", image: "/committee/lynn.jpg" },
        ],
    },
    {
        label: "IT",
        title: "it directors",
        groupPhoto: "/committee/it-group.jpg",
        gridCols: "grid-cols-3",
        members: [
            { name: "Gillbert Susilo Wong", image: "/committee/gillbert.jpg" },
            { name: "Juan Frederick", image: "/committee/juan.jpg" },
            {
                name: "Juannisa Putri Sunarya",
                image: "/committee/juannisa.jpg",
            },
        ],
    },
    {
        label: "Project",
        title: "project directors",
        groupPhoto: "/committee/project-group.jpg",
        gridCols: "grid-cols-3",
        members: [
            { name: "Alexander Wibowo Pribadi", image: "/committee/alex.jpg" },
            {
                name: "Aurelia Priela Tanuwibowo",
                image: "/committee/aurel.jpg",
            },
            { name: "Evelyn Aurelia Wijaya", image: "/committee/evelyn.jpg" },
            { name: "Jadelyn Minneke Sutopo", image: "/committee/jade.jpg" },
            { name: "Laurentia Michelle Widjaja", image: "/committee/mw.jpg" },
            { name: "Leonrich Chandra", image: "/committee/leon.jpg" },
        ],
    },
    {
        label: "Publications",
        title: "pnp directors",
        groupPhoto: "/committee/pnp-group.jpg",
        gridCols: "grid-cols-2 xl:grid-cols-4",
        members: [
            { name: "Agatha Kristanavia", image: "/committee/via.jpg" },
            { name: "Kimora Yauw", image: "/committee/kimi.jpg" },
            { name: "Muhammad Rizki", image: "/committee/rizki.jpg" },
            { name: "Sharon Tjipto Santoso", image: "/committee/sharon.jpg" },
        ],
    },
];

export default function CommitteePage() {
    const [selectedDepartment, setSelectedDepartment] = useState("TOPS");

    const currentDepartment = DEPARTMENTS.find(
        (d) => d.label === selectedDepartment
    );

    return (
        <>
            <Header
                title="Our Committee"
                description="Behind every Balik Kampoeng project is a passionate team of students united by a shared purpose: to serve, learn, and grow with the community. Our committee brings together diverse individuals, each contributing unique skills and perspectives to create meaningful impact."
            />
            <div className="flex flex-col items-center py-12 px-8 w-full px-24">
                <ToggleGroup
                    items={DEPARTMENTS.map((d) => d.label)}
                    value={selectedDepartment}
                    onChange={setSelectedDepartment}
                />

                <h2 className="text-4xl md:text-5xl font-extralight text-primary-brown mt-12 mb-8 font-[family-name:var(--font-marons-regular)]">
                    {currentDepartment?.title}
                </h2>

                {/* Group Photo */}
                <div className="relative w-full max-w-3xl h-56 sm:h-72 md:h-96 bg-gray-200 rounded-3xl overflow-hidden mb-20">
                    {currentDepartment?.groupPhoto && (
                        <Image
                            src={currentDepartment.groupPhoto}
                            alt={`${currentDepartment.title} group photo`}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>

                {/* TOPS */}
                {currentDepartment?.label === "TOPS" && (
                    <div className="flex flex-col gap-8 w-108 items-center">
                        <h3 className="text-3xl font-extralight text-primary-brown mt-4 -mb-4 font-[family-name:var(--font-marons-regular)]">
                            president
                        </h3>
                        <div>
                            <MemberCard
                                key={currentDepartment.members[0].name}
                                name={currentDepartment.members[0].name}
                                image={currentDepartment.members[0].image}
                            />
                        </div>

                        <h3 className="text-3xl font-extralight text-primary-brown mt-4 -mb-4 font-[family-name:var(--font-marons-regular)]">
                            vice-president (external)
                        </h3>
                        <div className="flex flex-row w-full justify-between">
                            <div>
                                <MemberCard
                                    key={currentDepartment.members[1].name}
                                    name={currentDepartment.members[1].name}
                                    image={currentDepartment.members[1].image}
                                    subtitle="Business Development"
                                />
                            </div>
                            <div>
                                <MemberCard
                                    key={currentDepartment.members[2].name}
                                    name={currentDepartment.members[2].name}
                                    image={currentDepartment.members[2].image}
                                    subtitle="Community Development"
                                />
                            </div>
                        </div>

                        <h3 className="text-3xl font-extralight text-primary-brown mt-4 -mb-4 font-[family-name:var(--font-marons-regular)]">
                            vice-president (internal)
                        </h3>
                        <div className="flex flex-row w-full justify-between">
                            <div>
                                <MemberCard
                                    key={currentDepartment.members[3].name}
                                    name={currentDepartment.members[3].name}
                                    image={currentDepartment.members[3].image}
                                />
                            </div>
                            <div>
                                <MemberCard
                                    key={currentDepartment.members[4].name}
                                    name={currentDepartment.members[4].name}
                                    image={currentDepartment.members[4].image}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Other Departments */}
                {currentDepartment?.label !== "TOPS" && (
                    <div
                        className={`grid ${currentDepartment?.gridCols} gap-16 justify-center`}
                    >
                        {currentDepartment?.members.map((member) => (
                            <MemberCard
                                key={member.name}
                                name={member.name}
                                subtitle={member.subtitle}
                                image={member.image}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
