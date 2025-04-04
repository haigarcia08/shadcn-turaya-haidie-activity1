import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";
import {SiteHeader} from "@/components/site-header";
import React from "react";
import {SiteFooter} from "@/components/site-footer";
import GoogleAnalyticsInit from "@/lib/ga";

const inter = DM_Sans({
    subsets: ["latin"],
    weight: ['300', '400', '500']
});

export const metadata: Metadata = {
    title: "Shadcn UI Examples",
    description: "Shadcn UI examples for your project. Get the code and add it to your project.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            suppressHydrationWarning
            className={`${inter.className} antialiased`}
        >
        <SiteHeader/>
        {children}
        <SiteFooter/>
        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
        </body>
        </html>
    );
}
