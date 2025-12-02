"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileSidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleSidebar}
                className="p-2 text-primary-brown hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Open menu"
            >
                <Menu size={24} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Close Button */}
                    <div className="flex justify-end p-4">
                        <button
                            onClick={closeSidebar}
                            className="p-2 text-primary-brown hover:bg-gray-100 rounded-md transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col px-6 py-4 gap-6">
                        <Link
                            href="/events"
                            onClick={closeSidebar}
                            className="text-lg font-medium text-primary-brown hover:text-primary-brown/80 transition-colors"
                        >
                            PAST EVENTS
                        </Link>
                        <Link
                            href="/partnerships"
                            onClick={closeSidebar}
                            className="text-lg font-medium text-primary-brown hover:text-primary-brown/80 transition-colors"
                        >
                            PARTNERSHIPS
                        </Link>
                        <Link
                            href="/committee"
                            onClick={closeSidebar}
                            className="text-lg font-medium text-primary-brown hover:text-primary-brown/80 transition-colors"
                        >
                            OUR COMMITTEE
                        </Link>
                        <Link
                            href="/faq"
                            onClick={closeSidebar}
                            className="text-lg font-medium text-primary-brown hover:text-primary-brown/80 transition-colors"
                        >
                            FAQ
                        </Link>
                    </nav>

                    {/* Donate Button */}
                    <div className="px-6 mt-auto mb-8">
                        <Link href="/donate" onClick={closeSidebar}>
                            <Button
                                variant="highlighted"
                                className="w-full font-medium rounded-full"
                            >
                                DONATE
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;
