import type { Metadata } from "next";
import { Sora as h, Inter as b } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const headingFont = h({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
  variable: '--font-heading',
});
const bodyFont = b({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-content',
});

export const metadata: Metadata = {
  title: "JUMPCUT RABBIT",
  description: "Trix are for kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jump Cut Rabbit</title>
      </Head>
      <body className={`${headingFont.variable} ${bodyFont.variable} font-content dark text-foreground`}>{children}</body>
    </html>
  );
}
