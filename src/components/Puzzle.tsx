import { twMerge } from "tailwind-merge";
export default function Puzzle({
  src,
  done,
  size,
}: {
  src: string;
  done: number[];
  size: "3x3" | "4x4";
}) {
  return (
    <div className="w-full p-2">
      <div
        className={twMerge(
          "grid aspect-square overflow-hidden rounded-xl border border-[#ffe8c4] shadow-sm",
          size === "3x3" ? "grid-cols-3" : "grid-cols-4",
        )}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
        }}
      >
        {Array.from({ length: size === "3x3" ? 9 : 16 }).map((_, i) => {
          const isDone = done.includes(i + 1);
          return (
            <div
              key={i}
              className={twMerge(
                "flex aspect-square select-none items-center justify-center bg-white font-mono text-6xl font-bold text-gray-300",
                isDone ? "opacity-0" : "",
              )}
            >
              ?
            </div>
          );
        })}
      </div>
    </div>
  );
}
