import 'dotenv/config';
import { DiscordRequest } from "./utils.js";

export async function makeDiscordThread(content) {
    const res = await DiscordRequest(`channels/${process.env.DISCORD_CHANNEL_ID}/messages`, {
        method: "POST",
        body: {
            "content": "A rocket is launching at ???????",
            "tts": false,
        },
    });
    const message = await res.json();
    DiscordRequest(`channels/${process.env.DISCORD_CHANNEL_ID}/messages/${message.id}/threads`, {
        method: "POST",
        body: {
            name: "Rocket launch at ?????",
        },
    });
}