import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import Image from "next/image";

interface Event {
    imageUrl: string;
    eventType: string;
    eventName: string;
    description: string;
}

interface YearEvents {
    year: number;
    events: Event[];
}

const headerDescription = `Each year, Balik Kampoeng brings together Indonesian students from NTU to return home and make a difference in local communities across Indonesia. Through our past events, we've carried out initiatives that focus on education, environment and community empowerment, aimed at uplifting those in need.

These moments remind us of the impact we can create when we work with heart, purpose, and unity. Take a look at some of our past projects and the stories behind them!`;

const eventsData: YearEvents[] = [
    {
        year: 2025,
        events: [
            {
                imageUrl: "/events/2025-willing-hearts.jpg",
                eventType: "Beloem Balik Kampoeng",
                eventName: "Willing Hearts",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                imageUrl: "/events/2025-surf-the-waves.jpg",
                eventType: "BK 2025",
                eventName: "Surf the Waves",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
        ],
    },
    {
        year: 2024,
        events: [
            {
                imageUrl: "/events/2024-beach-clean-up.jpg",
                eventType: "Beloem Balik Kampoeng",
                eventName: "Beach Clean Up",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                imageUrl: "/events/2024-through-the-jungle.jpg",
                eventType: "BK 2024",
                eventName: "Through the Jungle",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
        ],
    },
    {
        year: 2023,
        events: [
            {
                imageUrl: "/events/2023-beyond-the-shore.jpg",
                eventType: "BK 2023",
                eventName: "Beyond the Shore",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
        ],
    },
];

export default function EventsPage() {
    return (
        <>
            <Header title="Past Events" description={headerDescription} />

            <div className="flex flex-col items-center py-8 px-4 sm:px-8 text-primary-brown">
                {eventsData.map((yearData, yearIndex) => (
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
                                {yearData.events.map((event, eventIndex) => (
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
                                                description={event.description}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-brown rotate-45 hidden md:block z-10" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
