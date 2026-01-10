import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natanim | SWE",
  description: "Building digital experiences that matter. Full-stack software engineer passionate about crafting beautiful, functional, and user-centered digital experiences.",
  keywords: ["software engineer", "full-stack", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Natanim Kemal" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Natanim Kemal | SWE",
    description: "Building digital experiences that matter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
