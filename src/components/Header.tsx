import React from "react";

interface HeaderProps {
    title: string;
    description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center w-full bg-primary-brown text-white pt-16 pb-12 gap-2">
            <h1 className="text-[6rem] font-extralight text-secondary-beige font-[family-name:var(--font-marons-regular)]">
                {title}
            </h1>
            <p className="text-sm text-center text-secondary-beige w-3/4 md:w-1/2 whitespace-pre-line">
                {description}
            </p>
        </div>
    );
};

export default Header;
