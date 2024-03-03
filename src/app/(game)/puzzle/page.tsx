"use client";
import { Menu } from "@/components/Menu";
import { useState } from "react";
import Puzzle from "@/components/Puzzle";
import { useFinished } from "@/hooks/useFinished";
import { useLocalStorage } from "usehooks-ts";
import { activities, type ActivityType } from "@/data/activity";
import { Coupon } from "./Coupon";

function sum(a: number, b: ActivityType) {
  return a + b.piece;
}

export default function Page() {
  const [active, setActive] = useState(0);
  const [playerToken] = useLocalStorage("token", "");
  const finishedList = useFinished(playerToken);
  function isActivityFinished(activity: ActivityType) {
    return finishedList.includes(activity.name);
  }

  const data = activities.flat().map((item) => ({
    isFinished: isActivityFinished(item),
    ...item,
  }));
  const finishedN = data
    .filter((item) => isActivityFinished(item))
    .reduce(sum, 0);

  const puzzle1 = Array.from({ length: 9 })
    .map((_, i) => i + 1)
    .sort((a, b) => playerToken.charCodeAt(a) - playerToken.charCodeAt(b));
  const puzzle2 = Array.from({ length: 16 })
    .map((_, i) => i + 1)
    .sort((a, b) => playerToken.charCodeAt(a) - playerToken.charCodeAt(b));
  const puzzle3 = Array.from({ length: 16 })
    .map((_, i) => i + 1)
    .sort((a, b) => playerToken.charCodeAt(b) - playerToken.charCodeAt(a));
  const done1 = puzzle1.slice(0, finishedN);
  const done2 = puzzle2.slice(0, Math.max(finishedN - 9, 0));
  const done3 = puzzle3.slice(0, Math.max(finishedN - 9 - 16, 0));
  return (
    <div>
      <Menu
        texts={["拼圖 1", "拼圖 2", "拼圖 3"]}
        active={active}
        setActive={setActive}
      />
      {active === 0 ? (
        <Puzzle src="/meme/meme-1.jpg" done={done1} size="3x3" />
      ) : active === 1 ? (
        <Puzzle src="/meme/meme-2.jpg" done={done2} size="4x4" />
      ) : active === 2 ? (
        <Puzzle src="/meme/meme-3.jpg" done={done3} size="4x4" />
      ) : null}
      <Coupon finishedN={finishedN} token={playerToken} />
    </div>
  );
}
