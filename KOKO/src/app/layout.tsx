import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koko - Premium Luxury Restaurant & Franchise",
  description: "Experience culinary excellence at Koko - a premium franchise specializing in authentic flavors, burgers, chicken, and non-veg delicacies. Join 12+ branches serving 12,000+ satisfied customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}