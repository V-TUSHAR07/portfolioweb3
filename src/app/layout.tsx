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
  title: "V TUSHAR // Django Developer | Python Dev | Web3 Builder",
  description:
    "Full-stack web developer building clean, impactful applications — from Django & React.js platforms to decentralized Web3 apps on Solana. B.E. CSE Student at AMC Engineering College, Bengaluru.",
  keywords: [
    "Django Developer",
    "Python Developer",
    "Web3 Builder",
    "Solana",
    "React.js",
    "FastAPI",
    "Rust",
    "Anchor Framework",
    "Full Stack Developer",
    "Bengaluru",
  ],
  authors: [{ name: "V Tushar", url: "https://github.com/V-TUSHAR07" }],
  openGraph: {
    title: "V TUSHAR // Django Developer | Python Dev | Web3 Builder",
    description:
      "Full-stack web developer. Django & React.js platforms. Decentralized Web3 apps on Solana. Hackathon winner.",
    url: "https://portfolioweb3-oflh.vercel.app",
    siteName: "V.TUSHAR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V TUSHAR // Django Developer | Python Dev | Web3 Builder",
    description: "Full-stack web developer. Django, React.js, Solana, FastAPI. Hackathon winner.",
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
