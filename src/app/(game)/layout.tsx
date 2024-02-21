import Head from "next/head";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <body className="flex min-h-screen w-screen flex-col font-sans">
        <Nav />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
