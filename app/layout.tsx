import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Sahyog Vikas Foundation | Growing change together",
    template: "%s | Sahyog Vikas Foundation",
  },
  description:
    "Sahyog Vikas Foundation works alongside communities to support education, wellbeing and sustainable livelihoods.",
  openGraph: {
    title: "Sahyog Vikas Foundation",
    description: "Small acts of solidarity. Lasting community-led change.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
