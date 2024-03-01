import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";
import { useEffect, useState } from "react";

type finished = string[];

export function useFinished(token: string) {
    const [finished, setFinished] = useState<finished>([]);

    useEffect(() => {
        getPlayerPuzzle(token).then((data) => {
            setFinished(data.deliverers.map((d: any) => d.deliverer));
        });
    }, [token]);

    return finished;
}
