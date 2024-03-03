"use client";
import Scanner from "@/components/Scanner";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return <div className="flex h-screen w-screen flex-col items-center justify-center">
        <Scanner
            onResult={(result) => {
                window.location.replace(`/coupon/query?token=${result}`)
            }}
        />
    </div>
}
