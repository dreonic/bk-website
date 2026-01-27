import React from "react";

interface HeaderProps {
    title: string;
    description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center w-full bg-primary-brown text-white pt-20 pb-10 gap-6 px-6">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extralight text-secondary-beige font-[family-name:var(--font-marons-regular)] text-center">
                {title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-center text-secondary-beige w-full md:w-3/4 lg:w-1/2 whitespace-pre-line">
                {description}
            </p>
        </div>
    );
};

export default Header;
