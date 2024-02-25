"use client";

import { useDetail } from "@/components/Detail";
import { Menu } from "@/components/Menu";
import NonTokenModalContent from "@/components/NonTokenModalContent";
import { activities, type ActivityType } from "@/data/activity";
import { heading } from "@/varients/heading";
import { text } from "@/varients/text";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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
        "flex flex-col items-center gap-4 break-all rounded-2xl px-2 py-4 text-center shadow-[1px_3px_6px_0px_#0000001A]",
        finished ? "bg-sitcon-secondary" : "border border-sitcon-secondary",
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

export default function Home() {
  const [active, setActive] = useState(0);
  const finished = [[1, 2, 5], [1, 2], [4]][active]; // TODO: useFinished('session')
  const [filter, setFilter] = useState<Filter>("all");
  const [Detail, setOpen] = useDetail();
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // This maybe need to be modified
  function isActivityFinished(activity: ActivityType, index: number) {
    return finished.includes(index);
  }

  const data = activities[active].map((item, index) => ({
    isFinished: isActivityFinished(item, index),
    ...item,
  }));

  const totalN = data.filter((item) => item.isFinished || !item.hide).length;
  const finishedN =
    data.filter((item, index) => isActivityFinished(item, index)).length;

  return (
    <div>
      <Menu
        texts={["攤位", "年會活動", "Bonus"]}
        active={active}
        setActive={setActive}
      />
      {token ? <p>playerToken: {token}</p> : <NonTokenModalContent />}

      <div className="mx-8 my-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h5 className={heading({ level: 5 })}>如何完成任務?</h5>
          <p className={text({ level: 3 })}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
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

        <div className="grid grid-cols-3 gap-5">
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
