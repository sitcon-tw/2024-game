"use client";

import { activities } from "@/data/activity";
import { getPlayerPuzzle } from "@/lib/getPlayerPuzzle";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { StateIcon } from "./StateIcon";
import { formatDate } from "./formatDate";
import { API_URL } from "@/lib/const";
import { Loader } from "lucide-react";
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
  已兌換: "bg-purple-500 text-white",
  兌換成功: "bg-green-500 text-white",
  錯誤: "bg-red-500 text-white",
};

function finished(piece: number) {
  if (piece < 9) return 0;
  if (piece < 25) return 1;
  if (piece < 41) return 2;
  else return 3;
}

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
        "flex h-screen w-screen flex-col items-center justify-center p-4",
        style[state],
      )}
    >
      <div className="grow" />
      <StateIcon state={state} />
      {state !== "查詢中" && <h1 className="text-5xl font-bold">{state}</h1>}
      {state === "查詢中" && (
        <Loader
          size={72}
          className="animate-spin text-sitcon-primary"
          strokeWidth={2}
        />
      )}

      {coupon && (
        <>
          {coupon.taken && (
            <p className="mt-2 text-2xl opacity-75">
              {formatDate(coupon.taken)}
            </p>
          )}
          <div className="mt-4 w-[300px] max-w-full rounded-xl bg-black/5 p-3 text-center text-xl shadow-md">
            <p className="text-4xl font-bold">
              {finished(coupon.piece)}
              <span className="ml-2 text-xl">張兌換券</span>
            </p>
            <p className="mt-2 text-xl opacity-75">{coupon.name}</p>
          </div>
        </>
      )}
      <div className="grow" />
      {state !== "查詢中" && (
        <button
          className="rounded-lg bg-white px-12 py-4 text-2xl font-bold text-sitcon-primary shadow-md"
          onClick={clear}
        >
          返回
        </button>
      )}
    </div>
  );
}
