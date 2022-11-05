import 'dotenv/config';
import { DiscordRequest } from "./utils.js";

export async function makeDiscordThread(content) {
    console.log("post");
    const x = await DiscordRequest(`channels/${process.env.DISCORD_CHANNEL_ID}/messages`, {
        method: "POST",
        body: {
            "content": "Hello, World!",
            "tts": false,
            // "embeds": [{
            //     "title": "Hello, Embed!",
            //     "description": "This is an embedded message."
            // }],
        },
    });
    console.log(x);
    return x;
}