import { API_URL } from "./const";

export async function getBoothName(token: string) {
  return fetch(`${API_URL}/event/puzzle/deliverer?token=${token}`)
    .then((res) => {
      return res.status === 200 ? res.json() : null;
    });
}
