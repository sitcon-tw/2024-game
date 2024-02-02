import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

function Nav() {
  return <nav>nav</nav>;
}

function Footer() {
  return <footer>footer</footer>;
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex min-h-screen w-screen flex-col",
        )}
      >
        <Nav />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
