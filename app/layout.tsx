import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achmad Zaki Ramadani - Full Stack Developer Portfolio",
  description: "Portfolio website of a Full Stack Developer showcasing projects, skills, and experience. Open for freelance projects and collaboration.",
  keywords: ["developer", "portfolio", "full stack", "web developer", "next.js"],
  authors: [{ name: "Achmad Zaki Ramadani" }],
  openGraph: {
    title: "Achmad Zaki Ramadani - Full Stack Developer Portfolio",
    description: "Full Stack Developer portfolio with projects and skills",
    url: "https://achmadzaki.vercel.app",
    siteName: "Achmad Zaki Ramadani",
    locale: "id_ID",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <meta name="google-site-verification" content="emZqHluxGZgqYkxQKx0yjsEO0feq0GTYSGP2n7BqUrY" />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
