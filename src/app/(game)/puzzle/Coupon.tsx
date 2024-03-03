import { useEffect, useState } from "react";
import { TicketItem, TicketRules } from "./Ticket";
import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";

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
      <div className="relative my-2 grid gap-2 md:grid-cols-3">
        <TicketItem isDone={finishedN >= 9} num={1} taken={taken} />
        <TicketItem isDone={finishedN >= 25} num={2} taken={taken} />
        <TicketItem isDone={finishedN >= 41} num={3} taken={taken} />
        {taken && <Taken />}
      </div>
    </div>
  );
}

function Taken() {
  return (
    <div className="absolute z-10 flex w-full justify-center">
      <h1 className="rotate-[-15deg] border-4 border-dashed border-black text-[25vw] md:text-[5vw]">
        已兌換
      </h1>
    </div>
  );
}
