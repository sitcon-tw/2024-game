import { heading } from "@/varients/heading";
import { twMerge } from "tailwind-merge";

type Props = {
  texts: [string, string, string];
  active: number;
  setActive: (index: number) => void;
};

const corner = ["rounded-r-2xl", "rounded-2xl", "rounded-l-2xl"];

export function Menu({ texts, active, setActive }: Props) {
  return (
    <div className="grid grid-cols-3">
      {texts.map((text, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={twMerge(
            "flex h-[100px] grow items-center justify-center transition-all",
            active === index && "bg-sitcon-primary text-sitcon-white",
            corner[index],
          )}
        >
          <h4 className={heading({ level: 4 })}>{text}</h4>
        </button>
      ))}
    </div>
  );
}
