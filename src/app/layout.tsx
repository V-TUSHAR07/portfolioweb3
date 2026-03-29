import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tushar — Full Stack & Web3 Developer",
  description:
    "I craft high-performance web applications and decentralized protocols. From Solidity smart contracts to React frontends, I build products that are fast, secure, and user-first.",
  keywords: [
    "Full Stack Developer",
    "Web3 Developer",
    "Solidity",
    "React",
    "Next.js",
    "DeFi",
    "Smart Contracts",
    "Blockchain",
  ],
  authors: [{ name: "Tushar", url: "https://github.com/V-TUSHAR07" }],
  openGraph: {
    title: "Tushar — Full Stack & Web3 Developer",
    description:
      "Building decentralized futures. Smart contracts, DeFi protocols, and full-stack web applications.",
    url: "https://portfolioweb3-oflh.vercel.app",
    siteName: "Tushar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar — Full Stack & Web3 Developer",
    description: "Building decentralized futures. Smart contracts, DeFi protocols, and full-stack web applications.",
  },
  metadataBase: new URL("https://portfolioweb3-oflh.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
