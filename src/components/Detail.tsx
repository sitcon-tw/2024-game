"use client";

import { type ActivityType } from "@/data/activity";
import { heading } from "@/varients/heading";
import { text } from "@/varients/text";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Dialog from "./Dialog";

export function useDetail() {
  const [open, setOpen] = useState(false);
  const [activity, setActivity] = useState<ActivityType | null>(null);

  return [
    function Detail() {
      return (
        <Dialog open={open} setOpen={setOpen}>
          <div className="flex flex-col gap-4 break-all p-6">
            <h1 className="font-bold text-[#B1884C] text-2xl">
              {activity?.name}
            </h1>
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
        </Dialog>
      );
    },
    (activity: ActivityType) => {
      setOpen(true);
      setActivity(activity);
    },
  ] as const;
}
