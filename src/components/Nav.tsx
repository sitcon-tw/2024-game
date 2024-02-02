"use client";

import Image from "next/image";
import book from "@/img/book.svg";
import { heading } from "@/varients/heading";
import { useState } from "react";

// TODO: window

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-sitcon-color8 px-8 py-6">
      <h1 className="bg-gradient-to-r from-[#385AACCC] via-[#946E34BF] via-60% to-[#462002] bg-clip-text text-3xl font-bold text-transparent">
        SITCON 2024
      </h1>
      <div
        className="flex items-center gap-1"
        onClick={() => setOpen((o) => !o)}
      >
        <Image src={book} width={20} height={22} alt="" />
        <h3 className={heading({ level: 3 })}>規則</h3>
      </div>
    </nav>
  );
}
