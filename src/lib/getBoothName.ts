import { MAPPING_URL } from "./const";

export async function getBoothName(token: string) {
  return fetch(`${MAPPING_URL}?token=${token}`)
    .then((res) => {
      return res.status === 200 ? res.text() : null;
    });
}
