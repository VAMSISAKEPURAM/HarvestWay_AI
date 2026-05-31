import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HarvestWayAI — Intelligence For Every Acre",
  description:
    "HarvestWayAI is an AI-powered platform providing farmers with intelligent insights and predictions.",
  authors: [{ name: "HarvestWayAI" }],
  openGraph: {
    title: "HarvestWayAI — Intelligence For Every Acre",
    description:
      "HarvestWayAI is an AI-powered platform providing farmers with intelligent insights and predictions.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HarvestWayAI",
    title: "HarvestWayAI — Intelligence For Every Acre",
    description:
      "HarvestWayAI is an AI-powered platform providing farmers with intelligent insights and predictions.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
