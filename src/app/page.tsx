"use client";

import { Menu } from "@/components/Menu";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Menu
        texts={["議程", "攤位", "特殊活動"]}
        active={active}
        setActive={setActive}
      />
    </div>
  );
}
