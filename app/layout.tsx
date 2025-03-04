import type { Metadata } from "next";
import { Space_Grotesk, Syne, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Ornap - Run, Collect, Survive",
  description:
    "A thrilling 2D adventure game where you run from lava, collect powerups, open chests and finish levels",
  keywords: ["game", "2D game", "adventure", "lava", "powerups", "platformer"],
  authors: [{ name: "Ornap Team" }],
  openGraph: {
    title: "Ornap - Run, Collect, Survive",
    description:
      "A thrilling 2D adventure game where you run from lava, collect powerups, open chests and finish levels",
    url: "https://ornap.game",
    siteName: "Ornap",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ornap Game",
      },
    ],
    locale: "en_US",
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
        className={`${spaceGrotesk.variable} ${syne.variable} ${atkinson.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
