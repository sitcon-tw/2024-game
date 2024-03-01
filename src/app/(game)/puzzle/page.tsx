"use client";
import { Menu } from "@/components/Menu";
import { useState } from "react";
import Puzzle from "@/components/Puzzle";
export default function Page() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Menu
        texts={["拼圖1", "拼圖2", "拼圖3"]}
        active={active}
        setActive={setActive}
      />
      {active === 0 ? <Puzzle src="/meme/meme-1.jpg" done={[2, 4, 5, 7]} size="3x3" /> : (active === 1 ? <Puzzle src="/meme/meme-2.jpg" done={[3, 12, 9, 7]} size="4x4" /> : null)}
      {/* <Puzzle src="/meme/meme-1.jpg" done={[2, 4, 5, 7]} size="3x3" /> */}
      
    </div>
  );
}
