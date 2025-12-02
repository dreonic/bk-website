import Image from "next/image";

interface EventCardProps {
    imageUrl: string;
    eventType: string;
    eventName: string;
    description: string;
}

const EventCard: React.FC<EventCardProps> = ({
    eventType,
    eventName,
    description,
}) => {
    return (
        <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal lowercase tracking-wide font-[family-name:var(--font-marons-regular)]">
                {eventType}:
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl italic font-[family-name:var(--font-marons-regular)] mb-2">
                {eventName}
            </h4>
            <p className="text-xs leading-relaxed font-[family-name:var(--font-gotham-book)]">
                {description}
            </p>
        </div>
    );
};

export default EventCard;
