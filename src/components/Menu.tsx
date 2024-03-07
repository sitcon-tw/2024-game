import { heading } from "@/varients/heading";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
type Props = {
  texts: [string, string, string];
  active: number;
  setActive: (index: number) => void;
};

export function Menu({ texts, active, setActive }: Props) {
  return (
    <div className="grid grid-cols-3">
      {texts.map((text, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={twMerge(
            "relative flex h-[100px] grow items-center justify-center transition-all",
            active === index && "text-sitcon-white",
          )}
        >
          <h4 className={twMerge(heading({ level: 4 }), "relative z-10")}>
            {text}
          </h4>
          {active === index && (
            <motion.div
              layoutId="bg"
              className="absolute inset-0 h-full w-full bg-sitcon-primary"
              style={{
                borderRadius:
                  ["0 16px 16px 0", "16px", "16px 0 0 16px"][index] ?? "16px",
                originY: "0px",
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
