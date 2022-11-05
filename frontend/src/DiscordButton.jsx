import "./DiscordButton.css"

export const DiscordButton = () => {
    return <button className="discord-button" onClick={onButtonClick}>Test Discord</button>
}

function onButtonClick() {
    fetch(`http://localhost:3002`, {mode: 'no-cors'});
}
