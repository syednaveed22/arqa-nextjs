import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arqa - Modern Portfolio & Business Theme",
  description: "A beautiful, modern portfolio and business website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-body text-secondary bg-body-bg antialiased">
        <div id="pxl-wrapper" className="pxl-wrapper">
          <Header />
          <main id="pxl-main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
