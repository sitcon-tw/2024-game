"use client";

import { type ActivityType } from "@/data/activity";
import { heading } from "@/varients/heading";
import { text } from "@/varients/text";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function useDetail() {
  const [open, setOpen] = useState(false);
  const [activity, setActivity] = useState<ActivityType | null>(null);

  return [
    function Detail() {
      return (
        <>
          <div
            className={twMerge(
              "fixed left-0 top-0 z-20 h-screen w-screen flex-col justify-end bg-sitcon-black/50",
              open ? "flex" : "hidden",
            )}
            onClick={() => setOpen(false)}
          >
            <div
              className={twMerge(
                "absolute left-0 min-h-[40%] w-screen rounded-t-3xl bg-sitcon-white p-10",
                open ? "bottom-0" : "bottom-[100vh]",
              )}
            >
              <div className="mb-10 flex w-full justify-center">
                <div className="w-10 border-2 border-[#BDBDBD]" />
              </div>
              <h4 className={twMerge(heading({ level: 4 }), "m-2")}>
                {activity?.name}
              </h4>
              {Array.isArray(activity?.description) &&
                activity.description.map((desc, index) => (
                  <p key={index} className={text({ level: 1 })}>
                    {desc}
                  </p>
                ))}
              {activity?.link && (
                <Link
                  href={activity.link}
                  target="_blank"
                  className="underline underline-offset-1"
                >
                  {activity.link}
                </Link>
              )}
            </div>
          </div>
        </>
      );
    },
    (activity: ActivityType) => {
      setOpen(true);
      setActivity(activity);
    },
  ] as const;
}
