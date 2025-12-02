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
            <ul className="flex flex-row items-center text-sm list-none m-0 p-0 gap-8 text-black">
                <li className="hover:scale-103 transition-transform">
                    <Link href="/events">PAST EVENTS</Link>
                </li>
                <li className="hover:scale-103 transition-transform">
                    <Link href="/partnerships">PARTNERSHIPS</Link>
                </li>
                <li className="hover:scale-103 transition-transform">
                    <Link href="/committee">OUR COMMITTEE</Link>
                </li>
                <li className="hover:scale-103 transition-transform">
                    <Link href="/faq">FAQ</Link>
                </li>
                <li>
                    <Link href="/donate">
                        <Button
                            variant="highlighted"
                            className="font-medium rounded-full hover:scale-103 transition-transform"
                        >
                            DONATE
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
