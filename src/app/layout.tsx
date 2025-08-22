import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap'
});

const fontInter= Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap'
});


export const metadata: Metadata = {
  title: "Hannu Salo | Music Producer & Mixing Engineer",
  description: "Professional music production, mixing and mastering services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" data-theme="night" className={`${fontMontserrat.variable} ${fontInter.variable}`}>
      <LanguageProvider>
        <body className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
