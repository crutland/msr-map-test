const apiRoot = "/api";
const metrosUrl = `${apiRoot}/properties/metros`;
const metroPropertiesUrl = metro => `${metrosUrl}/${metro}`;

export async function getMetros() {
    const response = await fetch(metrosUrl);
    return await response.json();
}

export async function getMetroProperties(metroName) {
    const response = await fetch(metroPropertiesUrl(metroName));
    return await response.json();
}