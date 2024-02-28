import { heading } from "@/varients/heading";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  close: () => void;
};

export function Window({ title, content, isOpen, close }: Props) {
  return (
    <>
      <div
        className={twMerge(
          "fixed left-0 top-0 z-10 h-screen w-screen flex-col items-center justify-center gap-4 bg-sitcon-black/50",
          isOpen ? "flex" : "hidden",
        )}
        onClick={close}
      >
        <div
          className="flex h-[60%] w-[calc(100%-64px)] flex-col items-center gap-4 bg-sitcon-white py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={heading({ level: 2 })}>{title}</h2>
          <div className="overflow-scroll">{content}</div>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full bg-[#BDBDBD]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 2.20131e-06L7 5.59L1.41 2.46532e-07L-2.46532e-07 1.41L5.59 7L-2.20131e-06 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
