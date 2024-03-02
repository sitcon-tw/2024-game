"use client";

import { useDetail } from "@/components/Detail";
import { Menu } from "@/components/Menu";
import { activities, type ActivityType } from "@/data/activity";
import { useFinished } from "@/hooks/useFinished";
import { heading } from "@/varients/heading";
import { text } from "@/varients/text";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useLocalStorage } from "usehooks-ts";
import { CheckCircle2 } from "lucide-react";

function Activity({
  activity,
  finished,
  setOpen,
}: {
  activity: ActivityType;
  finished: boolean;
  setOpen: (activity: ActivityType) => void;
}) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-start gap-4 break-all rounded-xl border border-sitcon-secondary p-2 text-left shadow-sm",
        finished ? "bg-sitcon-secondary" : "border-opacity-50",
      )}
      onClick={() => setOpen(activity)}
    >
      <CheckCircle2
        size={48}
        strokeWidth={2}
        className={twMerge(
          "shrink-0",
          finished ? "text-[#462002]" : "text-[#F8F3E8]",
        )}
      />
      <p className={text({ level: 1 })}>{activity.name}</p>
    </div>
  );
}

type Filter = "all" | "finished" | "unfinished";

const menus = [
  {
    name: "攤位",
    description: [
      <p key="booth-1">
        驚喜總藏身於次次交流之中，去聽聽看、玩玩看各種不同的攤位都在做些什麼吧！依照各攤位的指示完成其要求條件，並出示您的
        QR code 碼給攤位端掃描，即可獲得該攤位的拼圖獎勵。
      </p>,
      <p key="booth-2">
        註：您可以在 OPass 系統左上角的選單中找到自己的 QR code 碼。
      </p>,
    ],
  },
  {
    name: "年會活動",
    description: [
      <p key="event-1">
        邁開您的腳步，來一一踩點{" "}
        <Link
          href="https://sitcon.org/2024/events/"
          className="text-blue-500 underline hover:underline-offset-2"
        >
          SITCON 2024 各大年會活動
        </Link>{" "}
        吧！請您在走訪各項有趣活動的過程中，找到藏身於活動地點各個角落的 QR code
        碼，並依照活動說明中的提示完成任務，即可獲得其對應之拼圖獎勵。（請尊重每位與會者的活動體驗，不得逕行翻拍）
      </p>,
    ],
  },
  {
    name: "Bonus",
    description: [
      <p key="bonus-1">
        除了攤位及年會活動，我們也準備了 Bonus 特別活動，助您加滿血量！！
      </p>,
      <p key="bonus-2">
        今天，請和我們一起探險、一起玩耍、一起收穫更多驚喜 ☆ﾐ(o*･ω･)ﾉ
      </p>,
      <p key="bonus-3">
        依照各別活動說明中的提示完成任務，即可獲得其對應之拼圖獎勵。
      </p>,
    ],
  },
];

function sum(a: number, b: ActivityType) {
  return a + b.piece;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState<Filter>("all");
  const [Detail, setOpen] = useDetail();
  const finishedList = useFinished(useLocalStorage("token", "")[0]);

  // This maybe need to be modified
  function isActivityFinished(activity: ActivityType, index: number) {
    const finished = finishedList.includes(activity.name);
    // console.log(activity.name, finished);
    return finished;
  }

  const data = activities[active].map((item, index) => ({
    isFinished: isActivityFinished(item, index),
    ...item,
  }));

  const totalN = data
    .filter((item) => item.isFinished || !item.hide)
    .reduce(sum, 0);
  const finishedN = data
    .filter((item, index) => isActivityFinished(item, index))
    .reduce(sum, 0);

  return (
    <div>
      <Menu
        texts={menus.map((menu) => menu.name) as [string, string, string]}
        active={active}
        setActive={setActive}
      />

      <div className="mx-2 my-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h5 className={heading({ level: 5 })}>如何完成任務?</h5>
          <div className={text({ level: 3 })}>{menus[active].description}</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-3 grow rounded-full border-2 border-sitcon-black">
            <div
              className="h-full rounded-full bg-sitcon-primary"
              style={{ width: `${(finishedN / totalN) * 100}%` }}
            />
          </div>
          <p>
            {finishedN} / {totalN}
          </p>
        </div>

        <div className="flex justify-end">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as Filter)}
            className="h-10 w-24 rounded-md border-2 border-sitcon-secondary bg-sitcon-white px-3 py-[6px]"
          >
            <option value="all">ALL</option>
            <option value="finished">已完成</option>
            <option value="unfinished">未完成</option>
          </select>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {data
            .filter((item) => {
              if (filter === "all") return true;
              else return (filter === "finished") === item.isFinished;
            })
            .filter((item) => {
              return item.isFinished || !item.hide;
            })
            .map((activity) => (
              <Activity
                key={activity.name}
                activity={activity}
                finished={activity.isFinished}
                setOpen={setOpen}
              />
            ))}
        </div>
      </div>
      <Detail />
    </div>
  );
}
