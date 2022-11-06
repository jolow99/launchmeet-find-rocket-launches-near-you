import logo from './logo.svg';
import './App.css';
import {World} from './World';
import {NewWorld} from './NewWorld';
import {DiscordButton} from './DiscordButton';
import discordLogo from "./discord-logo.png";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("World");
  const [number, setNumber] = useState(0);
  const [postalcode, setPostalcode] = useState(0);
  const [datapoint, setDatapoint] = useState({});

  var Airtable = require('airtable');
  Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'keyZpRe1ogEkf8nVw'
  });
  var base = Airtable.base('appFmVqJ14iFkUNbK');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleNumberChange(event) {
    setNumber(event.target.value);
  }

  function handlePostalcodeChange(event) {
    setPostalcode(event.target.value);
  }

  function onFormSubmit() {
    base('Table 1').create([
      {
        "fields": {
          "Name": name,
          "Phone Number": number,
          "Postal Code": postalcode
        }
      }
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
  }
    

  return (
    <div className="App">
              <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{display: "flex", width: "50%", flexDirection: "column"}}>
            <p>{datapoint.name}</p>
            <p>{datapoint.desc}</p>
            <p>{datapoint.lat}</p>
            <p>{datapoint.lng}</p>
            <a href="https://discord.gg/bT5DU5nk"> Join the Discord Here </a>
            </div>
          <NewWorld setDataPoint={setDatapoint}/>
        </div>
      <header className="App-header">

        <form className='flex flex-col p-64'>
          <label>
            Name:
            <input type="text" onChange={handleNameChange} name="name" />
          </label>
          <label>
            Phone Number:
            <input type="text" onChange={handleNumberChange} name="phone" />
          </label>
          <label>
            Postal Code:
            <input type="text" onChange={handlePostalcodeChange} name="phone" />
          </label>
          <button className='outline-gray-400 outline-double rounded-xl mt-8' onClick={onFormSubmit}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
