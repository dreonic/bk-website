"use client";

import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import Image from "next/image";
import { attributes } from "./content.md";

interface Event {
    imageUrl: string;
    eventType: string;
    eventName: string;
    description: string;
}

interface YearEvents {
    year: number;
    yearEvents: Event[];
}

export default function EventsPage() {
    const { headerDescription, events } = attributes as {
        headerDescription: string;
        events: YearEvents[];
    };

    return (
        <>
            <Header title="Past Events" description={headerDescription} />

            <div className="flex flex-col items-center py-8 px-4 sm:px-8 text-primary-brown">
                {events.map((yearData, yearIndex) => (
                    <div
                        key={yearData.year}
                        className="w-full max-w-4xl mb-8 md:mb-12"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-normal text-center mb-6 md:mb-8 font-[family-name:var(--font-marons-regular)]">
                            {yearData.year}
                        </h2>

                        <div className="relative">
                            {/* Middle Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary-brown h-full hidden md:block" />

                            <div className="space-y-8 md:space-y-12">
                                {yearData.yearEvents.map(
                                    (event, eventIndex) => (
                                        <div
                                            key={`${yearData.year}-${eventIndex}`}
                                            className="relative flex items-start justify-between"
                                        >
                                            {/* Diamond */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-brown rotate-45 hidden md:block z-10" />

                                            {/* Left Image */}
                                            <div className="hidden md:block w-[45%] pr-4">
                                                <div className="relative w-full h-40">
                                                    <Image
                                                        src={event.imageUrl}
                                                        alt={`${event.eventType}: ${event.eventName}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Right text */}
                                            <div className="w-full md:w-[45%] md:pl-4">
                                                {/* Mobile image */}
                                                <div className="md:hidden relative w-full h-32 sm:h-40 mb-4 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={event.imageUrl}
                                                        alt={`${event.eventType}: ${event.eventName}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <EventCard
                                                    imageUrl={event.imageUrl}
                                                    eventType={event.eventType}
                                                    eventName={event.eventName}
                                                    description={
                                                        event.description
                                                    }
                                                />
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-brown rotate-45 hidden md:block z-10" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
