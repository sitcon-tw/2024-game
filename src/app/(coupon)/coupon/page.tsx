"use client";
import Scanner from "@/components/Scanner";
import { useState } from "react";
import { Result } from "./Result";

export default function Page() {
    const [result, setResult] = useState<string | null>(null);

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            {result === null ? (
                <Scanner
                    onResult={(result) => {
                        setResult(result);
                    }}
                />
            ) : (
                <Result token={result} clear={() => setResult(null)} />
            )}
        </div>
    );
}
