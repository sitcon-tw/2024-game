import { API_URL } from "./const";

const puzzleTaken = "Already take from this deliverer";
const invalidToken = "invalid token";
const invalidUser = "invalid receiver token";

export async function sendPuzzle2Player(
    playerToken: string,
    boothToken: string,
) {
    const body = new FormData();
    body.append("receiver", playerToken);

    return fetch(`${API_URL}/event/puzzle/deliver?token=${boothToken}`, {
        method: "POST",
        body: body,
    })
        .then((res) => res.json())
        .then((data) => {
            if (!data.message) return true;
            else if (data.message === puzzleTaken) return true;
            else if (data.message === invalidToken) return false;
            else if (data.message === invalidUser) throw new Error(invalidUser);
            else throw new Error("Unknown error", data);
        });
}
