"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { ToggleGroup } from "@/components/ui/toggle-group";
import MemberCard from "@/components/MemberCard";
import Image from "next/image";
import { attributes } from "./content.md";

interface Member {
    name: string;
    subtitle?: string;
    image: string;
}

interface Section {
    sectionTitle: string;
    members: Member[];
}

interface Department {
    label: string;
    title: string;
    groupPhoto?: string;
    gridClass: string;
    sections: Section[];
}

export default function CommitteePage() {
    const { headerDescription, departments } = attributes as {
        headerDescription: string;
        departments: Department[];
    };

    const [selectedDepartment, setSelectedDepartment] = useState(
        departments[0]?.label || "TOPS",
    );

    return (
        <>
            <Header title="Our Committee" description={headerDescription} />
            <div className="flex flex-col items-center py-8 md:py-12 px-4 sm:px-8 md:px-24 w-full">
                <ToggleGroup
                    items={departments.map((d) => d.label)}
                    value={selectedDepartment}
                    onChange={setSelectedDepartment}
                />

                {departments.map((department) => (
                    <div
                        key={department.label}
                        className={`w-full flex flex-col items-center ${
                            selectedDepartment === department.label
                                ? ""
                                : "hidden"
                        }`}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-primary-brown mt-8 md:mt-12 mb-6 md:mb-8 font-[family-name:var(--font-marons-regular)]">
                            {department.title}
                        </h2>

                        {/* Group Photo */}
                        <div className="relative max-w-3xl w-80 h-64 sm:w-96 sm:h-72 md:w-144 md:h-108 lg:w-180 lg:h-120 bg-gray-200 rounded-xl md:rounded-3xl overflow-hidden mb-12 md:mb-20">
                            {department.groupPhoto && (
                                <Image
                                    src={department.groupPhoto}
                                    alt={`${department.title} group photo`}
                                    fill
                                    className="object-cover"
                                    priority={
                                        department.label ===
                                        departments[0]?.label
                                    }
                                />
                            )}
                        </div>

                        {/* TOPS with sections */}
                        {department.label === "TOPS" && (
                            <div className="flex flex-col gap-8 w-full max-w-108 items-center">
                                {department.sections.map((section, idx) => (
                                    <div key={idx} className="w-full">
                                        {section.sectionTitle && (
                                            <h3 className="text-2xl md:text-3xl font-extralight text-primary-brown mt-4 mb-4 md:mb-6 text-center font-[family-name:var(--font-marons-regular)]">
                                                {section.sectionTitle}
                                            </h3>
                                        )}
                                        <div
                                            className={`flex flex-col ${
                                                section.members.length > 1
                                                    ? "sm:flex-row"
                                                    : ""
                                            } gap-8 w-full justify-center ${
                                                section.members.length > 1
                                                    ? "sm:justify-between"
                                                    : ""
                                            } items-center`}
                                        >
                                            {section.members.map((member) => (
                                                <div key={member.name}>
                                                    <MemberCard
                                                        name={member.name}
                                                        image={member.image}
                                                        subtitle={
                                                            member.subtitle
                                                        }
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Other Departments */}
                        {department.label !== "TOPS" && (
                            <div
                                className={`grid ${department.gridClass} gap-6 md:gap-16 justify-center`}
                            >
                                {department.sections[0]?.members.map(
                                    (member) => (
                                        <MemberCard
                                            key={member.name}
                                            name={member.name}
                                            subtitle={member.subtitle}
                                            image={member.image}
                                        />
                                    ),
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
