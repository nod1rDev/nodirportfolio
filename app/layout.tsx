// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nodir.dev - Frontend Developer",
  description:
    "Modern frontend developer specializing in React, Next.js, and cutting-edge web technologies.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Nodir" }],
  creator: "Nodir",
  icons: {
    icon: "/logo.jpg", // public papkada bo'lishi kerak
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "nodir.dev - Frontend Developer",
    description:
      "Modern frontend developer portfolio showcasing innovative web solutions",
    type: "website",

    siteName: "nodir.dev",
    images: [
      {
        url: "/og-image.png", // public/ ichida saqlang
        width: 1200,
        height: 630,
        alt: "nodir.dev Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nodir.dev - Frontend Developer",
    description:
      "Modern frontend developer portfolio showcasing innovative web solutions",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
    >
      <body className="font-sans antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
