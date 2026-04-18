import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IronCore Gym | Elite Performance Center",
  description:
    "Forge your elite body at IronCore Gym. Science-backed programs, elite trainers, and unyielding standards. Train like an athlete, build unstoppable strength.",
  keywords: ["gym", "elite fitness", "weightlifting", "performance center", "strength training", "ironcore"],
  openGraph: {
    title: "IronCore Gym | Elite Performance Center",
    description: "Forge your elite body at IronCore Gym. Train like an athlete, build unstoppable strength.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IronCore Gym | Elite Performance Center",
    description: "Forge your elite body at IronCore Gym. Train like an athlete, build unstoppable strength.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="antialiased bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  );
}
