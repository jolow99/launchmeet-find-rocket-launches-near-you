import { makeDiscordThread } from "./discord/message"
import "./DiscordButton.css"

export const DiscordButton = () => {
    return <button className="discord-button" onClick={onButtonClick}>Test Discord</button>
}

function onButtonClick() {
    makeDiscordThread("Hello, world!");
}
