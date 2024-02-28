import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";
import { useEffect, useState } from "react";

type finished = string[];

export function useFinished(token: string) {
    const [finished, setFinished] = useState<finished>([]);

    useEffect(() => {
        getPlayerPuzzle(token).then((data) => {
            if (data == "Invalid token, please try again after checkin.") {
                return;
            }
            setFinished(data.deliverers.map((d: any) => d.deliverer));
        });
    }, [token]);

    return finished;
}
