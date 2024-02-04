"use client";

import { isTokneValid } from "@/lib/isTokenValid";
import { useState } from "react";

export default function Test() {
    const [token, setToken] = useState("");
    const [res, setRes] = useState<any>(null);
    return <>
        <input value={token} onChange={(e) => setToken(e.target.value)} />
        <button onClick={() => isTokneValid(token).then(setRes)}>Check</button>
        <pre>{JSON.stringify(res, null, 2)}</pre>

    </>
}
