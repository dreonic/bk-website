import Link from "next/link";
import { Instagram, Send, Mail } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-brown text-white">
            <div className="px-[6vw] py-12">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[2vw] font-medium">
                            Connect with us
                        </h3>
                        <div className="flex gap-4">
                            <Link
                                href="https://instagram.com/balik.kampoeng"
                                target="_blank"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Instagram size={24} />
                            </Link>
                            <Link
                                href="mailto:contact@balikkampoeng.org"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Mail size={24} />
                            </Link>
                            <Link
                                href="https://t.me/balikkampoeng_bk"
                                target="_blank"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Send size={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation links */}
                    <div className="flex gap-24">
                        <div className="flex flex-col gap-4 w-[14vw]">
                            <Link
                                href="/past-events"
                                className="text-[1.25vw] font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                PAST EVENTS
                            </Link>
                            <Link
                                href="/partnerships"
                                className="text-[1.25vw] font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                PARTNERSHIPS
                            </Link>
                            <Link
                                href="/committee"
                                className="text-[1.25vw] font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                OUR COMMITTEEE
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 w-[14vw]">
                            <Link
                                href="/faq"
                                className="text-[1.25vw] font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                FAQ
                            </Link>
                            <Link
                                href="/support"
                                className="text-[1.25vw] font-medium tracking-wider hover:opacity-80 transition-opacity"
                            >
                                SUPPORT US
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 flex items-center gap-1">
                    <span className="text-[1.25vw]">©</span>
                    <span className="text-[1.25vw]">
                        {new Date().getFullYear()} Balik Kampoeng
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
