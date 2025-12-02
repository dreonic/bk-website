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
            <div className="relative bg-gray-200 rounded-2xl overflow-hidden w-45 h-60">
                {image && (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
            <div className="text-center">
                <p className="text-xs text-primary-brown font-semibold font-[family-name:var(--font-gotham-medium)]">
                    {name}
                </p>
                {subtitle && (
                    <p className="text-xs text-primary-brown/70 font-[family-name:var(--font-gotham-book)]">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default MemberCard;
