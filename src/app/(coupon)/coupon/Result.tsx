"use client";

import { activities } from "@/data/activity";
import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { StateIcon } from "./StateIcon";
import { formatDate } from "./formatDate";
import { API_URL } from "@/lib/const";

export type Coupon = {
    name: string;
    taken: Date | null;
    piece: number;
};

const pieceMap = Object.fromEntries(
    activities
        .reduce((acc, cur) => acc.concat(cur), [])
        .map((item) => [item.name, item.piece]),
);
export async function getCoupon(token: string): Promise<Coupon> {
    return getPlayerPuzzle(token).then((player) => {
        const piece = player.deliverers
            .map((item) => pieceMap[item.deliverer])
            .reduce((acc, cur) => acc + cur, 0);
        if (typeof player.coupon === "number") {
            return {
                taken: new Date(player.coupon * 1000),
                name: player.user_id,
                piece: piece,
            };
        }
        return fetch(`${API_URL}/event/puzzle/coupon?token=${token}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status !== "OK") throw new Error("Invalid token");
                else
                    return {
                        taken: null,
                        name: player.user_id,
                        piece: piece,
                    };
            });
    });
}

const style = {
    查詢中: "",
    已兌換: "bg-orange-500",
    兌換成功: "bg-green-500",
    錯誤: "bg-red-500 text-white",
};

export function Result({ token, clear }: { token: string; clear: () => void }) {
    const [state, setState] = useState<"查詢中" | "已兌換" | "兌換成功" | "錯誤">(
        "查詢中",
    );
    const [coupon, setCoupon] = useState<Coupon | null>(null);

    useEffect(() => {
        if (!token) return;
        getCoupon(token)
            .then((coupon) => {
                setCoupon(coupon);
                if (coupon.taken) setState("已兌換");
                else setState("兌換成功");
            })
            .catch(() => setState("錯誤"));
    }, [token]);

    return (
        <div
            className={twMerge(
                "flex h-screen w-screen flex-col items-center justify-center text-5xl font-bold",
                style[state],
            )}
        >
            <StateIcon state={state} />
            <h1>{state}</h1>
            {coupon && (
                <>
                    <p>name: {coupon.name}</p>
                    <p className="text-xl">token: {token}</p>
                    {coupon.taken && <p>{formatDate(coupon.taken)}</p>}
                    <p>{Math.floor(coupon.piece / 9)} 塊拼圖</p>
                </>
            )}
            <button
                className="rounded-lg bg-sitcon-primary px-8 py-6 text-white"
                onClick={clear}
            >
                返回
            </button>
        </div>
    );
}
