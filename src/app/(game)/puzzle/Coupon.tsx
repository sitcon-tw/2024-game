import { useEffect, useState } from "react";
import { TicketItem, TicketRules } from "./Ticket";
import { heading } from "@/varients/heading";
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
            <div className="my-2 grid gap-2 md:grid-cols-3">
                {taken ? (
                    <h1 className={heading({ level: 1, align: "center" })}>已兌換</h1>
                ) : (
                    <>
                        <TicketItem isDone={finishedN >= 9} num={1} />
                        <TicketItem isDone={finishedN >= 25} num={2} />
                        <TicketItem isDone={finishedN >= 41} num={3} />
                    </>
                )}
            </div>
        </div>
    );
}
