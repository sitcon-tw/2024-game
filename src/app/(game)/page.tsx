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
        "flex items-center justify-between gap-4 break-all rounded-2xl border border-sitcon-secondary px-4 py-2 shadow-[1px_3px_6px_0px_#0000001A]",
        finished ? "bg-sitcon-secondary" : "",
      )}
      onClick={() => setOpen(activity)}
    >
      <p className={text({ level: 1 })}>{activity.name}</p>
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M22.7539 37.4255L12.5 27.1692L15.9172 23.752L22.7539 30.5863L36.4226 16.9153L39.8422 20.3348L22.7539 37.4255Z"
          fill={finished ? "#462002" : "#F8F3E8"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.416656 27C0.416656 12.3187 12.3187 0.416666 27 0.416666C41.6812 0.416666 53.5833 12.3187 53.5833 27C53.5833 41.6812 41.6812 53.5833 27 53.5833C12.3187 53.5833 0.416656 41.6812 0.416656 27ZM27 48.75C24.1437 48.75 21.3155 48.1874 18.6766 47.0944C16.0378 46.0013 13.6401 44.3992 11.6204 42.3796C9.60074 40.3599 7.99865 37.9622 6.90561 35.3234C5.81257 32.6845 5.24999 29.8562 5.24999 27C5.24999 24.1437 5.81257 21.3155 6.90561 18.6766C7.99865 16.0378 9.60074 13.6401 11.6204 11.6204C13.6401 9.60075 16.0378 7.99866 18.6766 6.90562C21.3155 5.81258 24.1437 5.25 27 5.25C32.7684 5.25 38.3006 7.54151 42.3796 11.6204C46.4585 15.6993 48.75 21.2315 48.75 27C48.75 32.7685 46.4585 38.3006 42.3796 42.3796C38.3006 46.4585 32.7684 48.75 27 48.75Z"
          fill={finished ? "#462002" : "#F8F3E8"}
        />
      </svg>
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

  const totalN = data.filter((item) => item.isFinished || !item.hide).length;
  const finishedN = data.filter((item, index) =>
    isActivityFinished(item, index),
  ).length;

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

        <div className="grid gap-4 md:grid-cols-2">
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
