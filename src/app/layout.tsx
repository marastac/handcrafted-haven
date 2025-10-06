import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: { default: "Handcrafted Haven", template: "%s | Handcrafted Haven" },
  description:
    "Marketplace for artisans to showcase and sell handcrafted products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-gray-50 text-gray-800 antialiased`}
      >
        {/* Accessibility: skip link goes to #main defined in page.tsx */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-violet-700 text-white px-4 py-2 rounded-xl shadow"
        >
          Skip to content
        </a>

        {children}
      </body>
    </html>
  );
}
