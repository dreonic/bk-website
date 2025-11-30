import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

const gothamBook = localFont({
    src: "../../assets/fonts/gotham-book.woff2",
    variable: "--font-gotham-book",
    display: "swap",
});

const gothamMedium = localFont({
    src: "../../assets/fonts/gotham-medium.woff2",
    variable: "--font-gotham-medium",
    display: "swap",
});

const maronsRegular = localFont({
    src: "../../assets/fonts/marons-regular.woff2",
    variable: "--font-marons-regular",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Balik Kampoeng",
    description: "Indonesian Volunteering Community in NTU",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${gothamBook.variable} ${gothamMedium.variable} ${maronsRegular.variable} antialiased font-[family-name:var(--font-gotham-book)]`}
            >
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>
                {children}
            </body>
        </html>
    );
}
