"use client";

import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { text } from "@/varients/text";

import home from "@/img/home.svg";
import scanner from "@/img/scanner.svg";
import puzzle from "@/img/puzzle.svg";

function NavLink({
  href,
  img,
  title,
}: {
  href: string;
  img: any;
  title: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={twMerge(
        "flex h-16 flex-col items-center justify-between",
        pathname !== href && "opacity-60",
      )}
    >
      <Image src={img} width={40} height={40} alt="" />
      <p className={text({ level: 2, bold: true })}>{title}</p>
    </Link>
  );
}

const links = [
  { href: "/", img: home, title: "任務" },
  { href: "/scanner", img: scanner, title: "掃描器" },
  { href: "/puzzle", img: puzzle, title: "我的拼圖" },
] as const;

export function Footer() {
  return (
    <footer className="flex justify-center gap-[70px] bg-sitcon-primary py-5 text-sitcon-secondary">
      {links.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </footer>
  );
}
