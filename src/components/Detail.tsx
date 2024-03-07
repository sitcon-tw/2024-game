"use client";

import { type ActivityType } from "@/data/activity";
import { text } from "@/varients/text";
import Link from "next/link";
import { useState } from "react";
import { Puzzle } from "lucide-react";
import Dialog from "./Dialog";

export function useDetail() {
  const [open, setOpen] = useState(false);
  const [activity, setActivity] = useState<ActivityType | null>(null);

  return [
    function Detail() {
      return (
        <Dialog open={open} setOpen={setOpen}>
          <div className="flex flex-col gap-4 break-all p-6">
            <h2 className="mx-auto flex w-full items-center justify-between rounded bg-[#B1884C] px-4 py-2 text-center text-xl tabular-nums text-white">
              <div>{activity?.piece} 塊拼圖</div>{" "}
              <div className="flex">
                {Array.from({ length: activity?.piece ?? 0 }).map(
                  (_, index) => (
                    <Puzzle
                      key={index}
                      size={20}
                      strokeWidth={2}
                      className="shrink-0"
                    />
                  ),
                )}
              </div>
            </h2>
            <h1 className="text-2xl font-bold text-[#B1884C]">
              {activity?.name}
            </h1>
            {Array.isArray(activity?.description) &&
              activity.description.map((desc, index) => (
                <p key={index} className={text({ level: 1 })}>
                  {desc.replace(" ", "\u00a0")}
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
        </Dialog>
      );
    },
    (activity: ActivityType) => {
      setOpen(true);
      setActivity(activity);
    },
  ] as const;
}
