import type { Metadata } from "next";
import { Sora as h, Inter as b } from "next/font/google";
import VideoPlayer from '@/components/VideoPlayer';
import "./globals.css";
import Head from "next/head";
import Nav from "@/components/Nav";
import { LanguageProvider } from '../contexts/LanguageContext';

const headingFont = h({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
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
      <body className={`${headingFont.variable} ${bodyFont.variable} font-content dark text-foreground`}>
        <LanguageProvider>
          <Nav />
          <main className="w-full min-h-dvh flex flex-col justify-center items-center bg-red">
            {/* Video */}
            <section className={`pointer-events-none fixed z-0 top-0`}>
              <VideoPlayer />
            </section>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
