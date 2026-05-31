import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DuraCV | ATS-Optimized AI Resume Builder",
    template: "%s | DuraCV",
  },
  description: "Create ATS-Optimized Resumes in Minutes. Get more interviews with AI-powered resume generation.",
  keywords: ["Resume Builder", "CV Maker", "ATS Resume", "AI Resume Builder", "Job Search", "Career"],
  authors: [{ name: "DuraCV" }],
  creator: "DuraCV",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://resume-builder-one-rouge.vercel.app/",
    title: "DuraCV | ATS-Optimized AI Resume Builder",
    description: "Create ATS-Optimized Resumes in Minutes. Get more interviews with AI-powered resume generation.",
    siteName: "DuraCV",
    images: [
      {
        url: "/og-image.png", // We will use a default or you can add one later
        width: 1200,
        height: 630,
        alt: "DuraCV Resume Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DuraCV | ATS-Optimized AI Resume Builder",
    description: "Create ATS-Optimized Resumes in Minutes. Get more interviews with AI-powered resume generation.",
    images: ["/og-image.png"],
    creator: "@duracv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased dark`}
    >
      <body className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-indigo-500/30">
        {children}
      </body>
      <GoogleAnalytics gaId="G-ETSV36K6YN" />
    </html>
  );
}
