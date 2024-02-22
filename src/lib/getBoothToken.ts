import { MAPPING_URL } from "./const";

export async function getBoothToken(code: string) {
  return fetch(`${MAPPING_URL}?code=${code}`)
    .then((res) => {
      return res.status === 200 ? res.text() : null;
    });
}
