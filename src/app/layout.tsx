import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

import { Footer } from "@/components/mock-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURA - your AI Social Media Growth Manager.",
  description:
    " AURA is your always-on social growth manager — powered by a real phone — who engages for you and grows your account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="mx-auto max-w-[1408px] px-5 md:px-4">{children}</div>
        </body>
      </html>
      <Footer />
    </>
  );
}
