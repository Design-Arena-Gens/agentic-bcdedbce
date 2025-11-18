import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Solar System Portfolio | Explore the Universe",
  description: "An immersive 3D solar system portfolio experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
