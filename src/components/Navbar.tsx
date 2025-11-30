import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center px-5 py-1.5 bg-white border-b border-gray-300">
            <div className="w-36 mx-4">
                <Link href="/">
                    <Image
                        src="/bk-logo.png"
                        alt="Balik Kampoeng Logo"
                        width={100}
                        height={100}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Link>
            </div>
            <ul className="flex list-none m-0 p-0 text-black">
                <li>
                    <Button
                        variant="ghost"
                        className="text-sm font-medium mx-0"
                    >
                        PAST EVENTS
                    </Button>
                </li>
                <li className="ml-5">
                    <Button variant="ghost" className="text-sm font-medium">
                        PARTNERSHIPS
                    </Button>
                </li>
                <li className="ml-5">
                    <Button variant="ghost" className="text-sm font-medium">
                        COMMITTEE
                    </Button>
                </li>
                <li className="ml-5">
                    <Button variant="ghost" className="text-sm font-medium">
                        FAQ
                    </Button>
                </li>
                <li className="ml-5">
                    <Button
                        variant="highlighted"
                        className="text-sm font-medium rounded-full"
                    >
                        DONATE
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
