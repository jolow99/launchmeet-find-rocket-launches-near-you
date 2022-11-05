// import 'dotenv/config';
import config from "./bad-global-config.js";
import { DiscordRequest } from "./utils";

export async function makeDiscordThread(content) {
    return await DiscordRequest(`channels/${config.DISCORD_CHANNEL_ID}/messages`, {
        method: "POST",
        mode: "no-cors",  // FIXME, only needed because we're calling this in the frontend, which we shouldn't be
        body: {
            "content": "Hello, World!",
            "tts": false,
            "embeds": [{
                "title": "Hello, Embed!",
                "description": "This is an embedded message."
            }],
        },
    });
}