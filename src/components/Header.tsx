import React from "react";

interface HeaderProps {
    title: string;
    description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center w-full bg-primary-brown text-white pt-16 md:pt-20 pb-8 md:pb-12 gap-5 px-6">
            <h1 className="text-4xl sm:text-[5rem] md:text-[6rem] font-extralight text-secondary-beige font-[family-name:var(--font-marons-regular)] text-center">
                {title}
            </h1>
            <p className="text-sm md:text-base text-center text-secondary-beige w-full md:w-3/4 lg:w-1/2 whitespace-pre-line">
                {description}
            </p>
        </div>
    );
};

export default Header;
