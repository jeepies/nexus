import axios from 'axios';

// the order of this array matters. how silly I am for making it like this, instead of an object.
export const skills = ["Attack", "Defence", "Strength", "Constitution", "Ranged", "Prayer", "Magic", 
    "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking", "Crafting", "Smithing", "Mining", 
    "Herblore", "Agility", "Thieving", "Slayer", "Farming", "Runecrafting", "Hunter", "Construction", 
    "Summoning", "Dungeoneering", "Divination", "Invention", "Archaeology", "Necromancy"
];

const appsApi = axios.create({
    baseURL: "https://apps.runescape.com",
    timeout: 5000,
    validateStatus: (status) => status < 500,
})

const secureApi = axios.create({
    baseURL: "https://secure.runescape.com",
    timeout: 5000,
    validateStatus: (status) => status < 500,
})

export async function fetchRunemetrics(username: string, activityCount: number) {
    const result = await appsApi.get(`runemetrics/profile/profile`, {
        params: {
            user: username,
            activities: activityCount
        }
    });
    return result.data;
}

export async function fetchChatHeadPicture(username: string) {
    // i'm not sure why it cant decode the data from a redirect, will have to investigate (soon™️)
    const parentResult = await secureApi.get(`/m=avatar-rs/${username}/chat.png`, { maxRedirects: 0 });
    const childResult = await axios.get(parentResult.headers.location ?? "https://secure.runescape.com/m=avatar-rs/default_chat.png?", {
        responseType: "arraybuffer",
    })
    return Buffer.from(childResult.data, 'binary').toString('base64');
}