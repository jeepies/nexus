import axios from 'axios';

const api = axios.create({
    baseURL: "https://apps.runescape.com",
    timeout: 5000,
    validateStatus: (status) => status < 500,
})

export async function fetchRunemetrics(username: string, activityCount: number) {
    const result = await api.get(`runemetrics/profile/profile`, {
        params: {
            user: username,
            activities: activityCount
        }
    });
    return result.data;
}