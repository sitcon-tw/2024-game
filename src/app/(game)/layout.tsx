"use client";
import Head from "next/head";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useReadLocalStorage } from "usehooks-ts";

import "../globals.css";
import NonTokenModalContent from "@/components/NonTokenModalContent";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);
  const token: string | null = useReadLocalStorage("token");
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="zh-TW">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+TC:wght@400;700&family=Rubik:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div className="mx-auto flex h-[100svh] w-screen max-w-[768px] flex-col font-sans text-gray-950">
          <Nav />
          {!token && isClient && <NonTokenModalContent />}
          <div className="grow overflow-y-scroll">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
