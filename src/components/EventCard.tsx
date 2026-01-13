import Image from "next/image";

interface EventCardProps {
    imageUrl: string;
    eventType: string;
    eventName?: string;
    description?: string;
}

const EventCard: React.FC<EventCardProps> = ({
    eventType,
    eventName,
    description,
}) => {
    return (
        <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal lowercase tracking-wide font-[family-name:var(--font-marons-regular)]">
                {eventType}
            </h3>
            {eventName && (
                <h4 className="text-xl sm:text-2xl md:text-3xl italic font-[family-name:var(--font-marons-regular)] mb-2">
                    {eventName}
                </h4>
            )}
            {description && (
                <p className="text-md leading-relaxed font-[family-name:var(--font-gotham-book)]">
                    {description}
                </p>
            )}
        </div>
    );
};

export default EventCard;
