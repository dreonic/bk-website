import Image from "next/image";
import React from "react";

interface MemberCardProps {
    name: string;
    subtitle?: string;
    image: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, subtitle, image }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden w-32 h-44 sm:w-36 sm:h-48 md:w-48 md:h-64 lg:w-56 lg:h-72">
                {image && (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        priority={true}
                    />
                )}
            </div>
            <div className="text-center">
                <p className="text-[10px] sm:text-xs text-primary-brown font-semibold font-[family-name:var(--font-gotham-medium)]">
                    {name}
                </p>
                {subtitle && (
                    <p className="text-[10px] sm:text-xs text-primary-brown/70 font-[family-name:var(--font-gotham-book)]">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default MemberCard;
