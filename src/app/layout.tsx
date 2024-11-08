import { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "app/components/Shared/Header";
import { Footer } from "app/components/Shared/Footer";
import "../sass/globals.sass";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Silkroad 🥴",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
