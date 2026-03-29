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
  title: "V Tushar — Web Developer & Blockchain Builder",
  description:
    "Full-stack web developer specializing in Django, React.js, and Web3 on Solana. B.E. CSE student at AMC Engineering College, Bengaluru. Building clean, impactful applications.",
  keywords: [
    "Django Developer",
    "Python Developer",
    "Web3 Developer",
    "Solana",
    "React.js",
    "FastAPI",
    "Rust",
    "Anchor Framework",
    "Full Stack Developer",
    "Bengaluru",
    "Blockchain Developer",
  ],
  authors: [{ name: "V Tushar", url: "https://github.com/V-TUSHAR07" }],
  openGraph: {
    title: "V Tushar — Web Developer & Blockchain Builder",
    description:
      "Full-stack web developer. Django & React.js platforms. Decentralized Web3 apps on Solana. Hackathon winner.",
    url: "https://portfolioweb3-oflh.vercel.app",
    siteName: "V. Tushar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V Tushar — Web Developer & Blockchain Builder",
    description:
      "Full-stack web developer. Django, React.js, Solana, FastAPI. Hackathon winner.",
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
