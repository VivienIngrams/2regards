"use client";

import { useEffect, useState } from "react";

import "./globals.css";
import { Italiana, Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import { usePathname } from "next/navigation";

const italiana = Italiana({
  weight: "400",
  variable: "--font-italiana",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "300",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <body
        className={`${italiana.variable} ${roboto.variable} font-roboto bg-stone-200 h-screen`}
      >
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Header />
            <div className="pl-8 md:pl-12 pb-4 md:pb-6 pt-6 md:pt-6 h-[95%]">
              {children}
            </div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
