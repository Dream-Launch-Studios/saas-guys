import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "VibeDocs - AI-Powered Documentation Assistant",
  description: "Streamline your project documentation with AI. Generate PRDs, technical specs, and more with our intelligent documentation assistant.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: ["AI documentation", "PRD generator", "technical documentation", "project planning", "AI assistant"],
  authors: [{ name: "VibeDocs Team" }],
  openGraph: {
    title: "VibeDocs - AI-Powered Documentation Assistant",
    description: "Streamline your project documentation with AI. Generate PRDs, technical specs, and more with our intelligent documentation assistant.",
    type: "website",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
