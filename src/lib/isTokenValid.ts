const API_URL =
    "https://script.google.com/macros/s/AKfycbxtjMoPMziiQHjsuOrg120fufYAGyTvbu0sFi4IxzbNA6jf1hqm1vIdcsOdOUlMMrgfrA/exec";

export async function isTokneValid(token: string) { 
    return fetch(`${API_URL}?token=${token}`)
    .then(res => res.json())
    .then(res => res.status === 'success')
}
