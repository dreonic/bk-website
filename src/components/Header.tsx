import React from "react";

interface HeaderProps {
    title: string;
    description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center w-full bg-primary-brown text-white pt-[5vw] pb-[4vw]">
            <h1 className="text-[7vw] font-extralight text-secondary-beige font-[family-name:var(--font-marons-regular)]">
                {title}
            </h1>
            <p className="text-[1.125vw] text-center text-secondary-beige w-3/4 md:w-1/2 font-[family-name:var(--font-gotham-book)]">
                {description}
            </p>
        </div>
    );
};

export default Header;
