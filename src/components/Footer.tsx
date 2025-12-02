import Link from "next/link";
import { Instagram, Send, Mail } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-brown text-white">
            <div className="px-6 md:px-[6vw] py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-lg md:text-[2vw] font-medium">
                            Connect with us
                        </h3>
                        <div className="flex gap-4">
                            <Link
                                href="https://instagram.com/balik.kampoeng"
                                target="_blank"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Instagram
                                    size={24}
                                    className="md:w-[30px] md:h-[30px]"
                                />
                            </Link>
                            <Link
                                href="mailto:contact@balikkampoeng.org"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Mail
                                    size={24}
                                    className="md:w-[30px] md:h-[30px]"
                                />
                            </Link>
                            <Link
                                href="https://t.me/balikkampoeng_bk"
                                target="_blank"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Send
                                    size={24}
                                    className="md:w-[30px] md:h-[30px]"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation links */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-24 text-center md:text-left">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <Link
                                href="/events"
                                className="text-base md:text-xl font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                PAST EVENTS
                            </Link>
                            <Link
                                href="/partnerships"
                                className="text-base md:text-xl font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                PARTNERSHIPS
                            </Link>
                            <Link
                                href="/committee"
                                className="text-base md:text-xl font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                OUR COMMITTEEE
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <Link
                                href="/faq"
                                className="text-base md:text-xl font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                FAQ
                            </Link>
                            <Link
                                href="/donate"
                                className="text-base md:text-xl font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                SUPPORT US
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 md:mt-12 flex items-center justify-center md:justify-start gap-1">
                    <span className="text-sm md:text-[1.25vw]">©</span>
                    <span className="text-sm md:text-[1.25vw]">
                        {new Date().getFullYear()} Balik Kampoeng
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
