"use client";
import { Menu } from "@/components/Menu";
import { useState } from "react";

export default function Page() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Menu
        texts={["拼圖1", "拼圖2", "拼圖3"]}
        active={active}
        setActive={setActive}
      />
    </div>
  );
}
