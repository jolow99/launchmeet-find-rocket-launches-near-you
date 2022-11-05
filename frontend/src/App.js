import logo from './logo.svg';
import './App.css';
import {World} from './World';
import {DiscordButton} from './DiscordButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <DiscordButton />
        <World />
      </div>
    </div>
  );
}

export default App;
