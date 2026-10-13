import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.opashsoftware.com"),
  title: "Opash Software | Custom Software Development Company | AI & Web Solutions",
  description:
    "Empowering startups and enterprises with scalable Custom Software, Web Applications, Mobile Apps, SaaS Engineering, and AI/ML Solutions. 50+ developers, 75+ global projects delivered.",
  keywords: [
    "Custom Software Development",
    "Opash Software",
    "AI ML Solutions",
    "Web Development India",
    "Mobile App Development",
    "SaaS Development",
    "Hire Dedicated Developers",
    "Hiren Danecha",
    "Surat Software Company"
  ],
  icons: {
    icon: "/images/Only Logo.png",
    shortcut: "/images/Only Logo.png",
    apple: "/images/Only Logo.png",
  },
  openGraph: {
    title: "Opash Software | Top Global Partner for Custom Software & AI",
    description: "Empowering startups and enterprises with scalable Custom Software, Web, Mobile, and AI solutions.",
    url: "https://www.opashsoftware.com/",
    siteName: "Opash Software",
    images: [
      {
        url: "/images/Opash.png",
        width: 1200,
        height: 240,
        alt: "Opash Software Logo",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
