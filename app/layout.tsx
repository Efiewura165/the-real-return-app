import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { SiteShell } from "@/components/layout/site-shell";
import { buildMetadata } from "@/lib/seo";
import { brandConfig } from "@/config/brand";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased" style={{ fontFamily: brandConfig.typography.body }}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
