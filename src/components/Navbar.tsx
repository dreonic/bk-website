import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import MobileSidebar from "./MobileSidebar";

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center px-4 md:px-5 py-1.5 bg-white border-b border-gray-300">
            <div className="w-24 md:w-36 mx-2 md:mx-4">
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

            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-row items-center text-sm list-none m-0 p-0 gap-8 text-black">
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

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <MobileSidebar />
            </div>
        </nav>
    );
};

export default Navbar;
