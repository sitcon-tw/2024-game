"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

async function getCoupon(token: string) {
    return fetch(`https://sitcon.opass.app/event/puzzle/coupon?token=${token}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.status !== "OK") {
                throw new Error("Invalid token");
            }
        });
}

const style = {
    查詢中: "",
    ok: "bg-green-500",
    錯誤: "bg-red-500 text-white",
};

export default function Page() {
    const router = useRouter();
    const token = useSearchParams().get("token");
    const [state, setState] = useState<"查詢中" | "ok" | "錯誤">("查詢中");

    useEffect(() => {
        if (!token) return;
        getCoupon(token)
            .then(() => setState("ok"))
            .catch(() => setState("錯誤"));
    }, [token]);

    return (
        <div
            className={twMerge(
                "flex h-screen w-screen flex-col items-center justify-center text-5xl font-bold",
                style[state],
            )}
        >
            <h1>{state}</h1>
            <p>token: {token}</p>
            <button
                className="rounded-lg bg-sitcon-primary px-8 py-6 text-white"
                onClick={() => router.push("/coupon")}
            >
                返回
            </button>
        </div>
    );
}
