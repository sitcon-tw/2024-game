"use client";

import { Puzzle, ScanLine, ListTodo } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { text } from "@/varients/text";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={twMerge(
        "flex h-16 flex-col items-center justify-between",
        text({ level: 2, bold: true }),
        pathname !== href && "opacity-60",
      )}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="grid grid-cols-3 bg-sitcon-primary py-2 text-sitcon-secondary">
      <NavLink href="/">
        <ListTodo size={36} strokeWidth={1.75} />
        任務
      </NavLink>
      <NavLink href="/scanner">
        <ScanLine size={36} strokeWidth={1.75} />
        掃描器
      </NavLink>
      <NavLink href="/puzzle">
        <Puzzle size={36} strokeWidth={1.75} />
        我的拼圖
      </NavLink>
    </footer>
  );
}
