import { API_URL } from "./const";

async function sha1(str: string) {
    const buffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-1", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const digest = hashArray
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    return digest;
}

export async function getPlayerPuzzle(playerToken: string) {
    return sha1(playerToken)
        .then((publicToken) =>
            fetch(`${API_URL}/event/puzzle?token=${publicToken}`)
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.message && data.message.startsWith("Invalid token")) {
                return data.message;
            } else {
                return data.puzzles.length as number;
            }
        });
}
