import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TUSHAR // Web3 Developer",
  description:
    "Smart contract engineer and full-stack architect. Building decentralized protocols, DeFi systems, and high-performance web applications on-chain.",
  keywords: [
    "Web3 Developer",
    "Smart Contract Engineer",
    "Solidity",
    "DeFi Protocol Builder",
    "Full Stack Architect",
    "ZK Proofs",
    "Blockchain",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Tushar", url: "https://github.com/V-TUSHAR07" }],
  openGraph: {
    title: "TUSHAR // Web3 Developer",
    description:
      "Smart contract engineer. DeFi protocol builder. Full-stack architect. Building decentralized futures.",
    url: "https://portfolioweb3-oflh.vercel.app",
    siteName: "TUSHAR.PROTOCOL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TUSHAR // Web3 Developer",
    description: "Smart contract engineer. DeFi protocol builder. Full-stack architect.",
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
      className={`${spaceGrotesk.variable} ${firaCode.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
