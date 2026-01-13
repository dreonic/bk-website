"use client";

import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import Image from "next/image";
import { attributes } from "./content.md";

interface Event {
    imageUrl: string;
    eventType: string;
    eventName?: string;
    description?: string;
}

interface YearEvents {
    year: string;
    alternateImages?: boolean;
    yearEvents: Event[];
}

// Renders event card with image
const EventItem = ({
    event,
    side,
}: {
    event: Event;
    side: "left" | "right";
}) => (
    <div className={`relative ${side === "left" ? "pr-6" : "pl-6"}`}>
        {/* Diamond marker aligned to center line */}
        <div
            className={`absolute w-3 h-3 bg-primary-brown rotate-45 z-10 hidden md:block ${
                side === "left"
                    ? "right-0 translate-x-1/2"
                    : "left-0 -translate-x-1/2"
            }`}
        />
        <div className="relative w-full h-32 sm:h-40 md:h-48 mb-3 rounded-lg md:rounded-none overflow-hidden">
            <Image
                src={event.imageUrl}
                alt={`${event.eventType}: ${event.eventName ?? ""}`}
                fill
                className="object-cover"
            />
        </div>
        <EventCard
            imageUrl={event.imageUrl}
            eventType={event.eventType}
            eventName={event.eventName}
            description={event.description}
        />
    </div>
);

export default function EventsPage() {
    const { headerDescription, events } = attributes as {
        headerDescription: string;
        events: YearEvents[];
    };

    return (
        <>
            <Header title="Past Events" description={headerDescription} />

            <div className="flex flex-col items-center py-8 px-4 sm:px-8 text-primary-brown">
                {events.map((yearData) => {
                    // Split events into left and right columns for alternating layout
                    const leftEvents = yearData.alternateImages
                        ? yearData.yearEvents.filter((_, i) => i % 2 === 0)
                        : [];
                    const rightEvents = yearData.alternateImages
                        ? yearData.yearEvents.filter((_, i) => i % 2 === 1)
                        : [];

                    return (
                        <div
                            key={yearData.year}
                            className="w-full max-w-5xl mb-8 md:mb-12"
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-normal text-center mb-6 md:mb-8 font-[family-name:var(--font-marons-regular)]">
                                {yearData.year}
                            </h2>

                            <div className="relative">
                                {/* Middle Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary-brown h-full hidden md:block" />

                                {yearData.alternateImages ? (
                                    <>
                                        {/* Mobile: single column, events in original order */}
                                        <div className="md:hidden space-y-8">
                                            {yearData.yearEvents.map(
                                                (event, idx) => (
                                                    <EventItem
                                                        key={idx}
                                                        event={event}
                                                        side="left"
                                                    />
                                                )
                                            )}
                                        </div>
                                        {/* Desktop: two overlapping columns for staggered layout */}
                                        <div className="hidden md:block relative pb-40">
                                            {/* Left column - spans full width, content on left half */}
                                            <div className="space-y-16">
                                                {leftEvents.map(
                                                    (event, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="w-1/2"
                                                        >
                                                            <EventItem
                                                                event={event}
                                                                side="left"
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>

                                            {/* Right column - absolute positioned, offset down, spans full width, content on right half */}
                                            <div className="absolute top-32 right-0 w-full space-y-16">
                                                {rightEvents.map(
                                                    (event, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="w-1/2 ml-auto"
                                                        >
                                                            <EventItem
                                                                event={event}
                                                                side="right"
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
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
                                                        <div className="relative w-full h-56">
                                                            <Image
                                                                src={
                                                                    event.imageUrl
                                                                }
                                                                alt={`${
                                                                    event.eventType
                                                                }: ${
                                                                    event.eventName ??
                                                                    ""
                                                                }`}
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
                                                                src={
                                                                    event.imageUrl
                                                                }
                                                                alt={`${
                                                                    event.eventType
                                                                }: ${
                                                                    event.eventName ??
                                                                    ""
                                                                }`}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <EventCard
                                                            imageUrl={
                                                                event.imageUrl
                                                            }
                                                            eventType={
                                                                event.eventType
                                                            }
                                                            eventName={
                                                                event.eventName
                                                            }
                                                            description={
                                                                event.description
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}

                                {/* Bottom diamond */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-brown rotate-45 hidden md:block z-10" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
