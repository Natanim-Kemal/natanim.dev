import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natanim | Full-Stack Developer",
  description: "Building digital experiences that matter. Full-stack developer passionate about crafting beautiful, functional, and user-centered digital experiences.",
  keywords: ["developer", "full-stack", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Natanim Abesha" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Natanim Abesha | Full-Stack Developer",
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
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
