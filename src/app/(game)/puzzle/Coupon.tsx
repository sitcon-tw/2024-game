import { useEffect, useState } from "react";
import { TicketItem, TicketRules } from "./Ticket";
import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";
import { twMerge } from "tailwind-merge";

export function Coupon({
  finishedN,
  token,
}: {
  finishedN: number;
  token: string;
}) {
  const [taken, setTaken] = useState(false);

  useEffect(() => {
    console.log("query if taken");
    getPlayerPuzzle(token)
      .then((player) => {
        console.log("taken");
        if (typeof player.coupon === "number") {
          setTaken(true);
        }
      })
      .catch(console.error);
  }, [token]);

  return (
    <div className="relative m-2">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">累計獎勵</div>
        <TicketRules />
      </div>
      <div className="relative my-2">
        <div
          className={twMerge(
            "grid gap-2 md:grid-cols-3",
            taken && "opacity-30 grayscale",
          )}
        >
          <TicketItem isDone={finishedN >= 9} num={1} taken={taken} />
          <TicketItem isDone={finishedN >= 25} num={2} taken={taken} />
          <TicketItem isDone={finishedN >= 41} num={3} taken={taken} />
        </div>
        {taken && <Taken />}
      </div>
    </div>
  );
}

function Taken() {
  return (
    <div className="absolute inset-0 z-10 m-auto flex w-full justify-center">
      <h1 className="rotate-[-15deg] border-4 border-dashed border-sitcon-color6 text-[25vw] text-sitcon-primary md:text-[5vw]">
        已兌換
      </h1>
    </div>
  );
}
