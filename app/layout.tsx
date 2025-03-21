import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import MouseProvider from "./MouseProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Abhishek | Portfolio",
  description: "Portfolio of Abhishek P V",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <body
        className={`min-h-screen relative ${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <MouseProvider>
          {children}
          <Analytics />
        </MouseProvider>
      </body>
    </html>
  );
}
