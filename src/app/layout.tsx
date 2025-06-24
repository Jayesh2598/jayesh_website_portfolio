import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { firstName, lastName, description } from "@/siteConfig";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedLayout from "@/components/AnimatedLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${firstName} ${lastName} - Portfolio`,
  description: description,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <AnimatedLayout>
          <Navigation />
          {children}
          <Footer />
        </AnimatedLayout>
      </body>
    </html>
  );
} 