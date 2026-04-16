import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "BusHive — Real-time Bus Tracking",
    description: "Never miss your bus again. BusHive brings live GPS tracking, smart schedules, and door-to-door trip planning to your pocket.",
    keywords: ["bus tracking", "real-time tracking", "public transportation", "bus schedules", "journey planning", "transit app"],
    openGraph: {
        title: "BusHive — Real-time Bus Tracking",
        description: "Never miss your bus again. BusHive brings live GPS tracking, smart schedules, and door-to-door trip planning to your pocket.",
        type: "website",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
