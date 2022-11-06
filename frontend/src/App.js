import logo from './logo.svg';
import './App.css';
import { World } from './World';
import { NewWorld } from './NewWorld';
import { DiscordButton } from './DiscordButton';
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
    ], function (err, records) {
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
      <div className='flex'>
        <div style={{ width: "50%" }}>
          <div className='m-16'>
            <p className='text-6xl font-bold'>Location:</p>
            <p className='text-6xl font-thin'>{datapoint.name}</p>
          </div>
          <div className='m-16'>
            <p className='text-6xl font-bold'>Description:</p>
            <p className='text-6xl font-thin'>{datapoint.desc}</p>
          </div>
          <div className='m-16'>
            <p className='text-6xl font-bold'>Latitude:</p>
            <p className='text-6xl font-thin'>{datapoint.lat}</p>
          </div>
          <div className='m-16'>
            <p className='text-6xl font-bold'>Longitude:</p>
            <p className='text-6xl font-thin'>{datapoint.lng}</p>
          </div>

          <a href="https://discord.gg/bT5DU5nk"> <button className='outline-gray-400 outline-double rounded-xl mt-8 text-4xl p-16'>
            Join Our Discord
          </button> </a>
        </div>
        <NewWorld setDataPoint={setDatapoint} />

      </div>
      <header className="App-header">

        {/* Write an introduction of the purpose of this form */}
        <p className='mt-32'>
          <code>Sign up to receive notifications about rocket launches near you 🚀🚀</code>
        </p>

        <form className='flex flex-col p-32'>
          <label className='m-8 float-left'>
            Name
            <input className='float-right' type="text" onChange={handleNameChange} name="name" />
          </label>
          <label className='m-8 float-left'>
            Phone Number
            <input className='float-right' type="text" onChange={handleNumberChange} name="phone" />
          </label>
          <label className='m-8 float-left'>
            Postal Code
            <input className='float-right' type="text" onChange={handlePostalcodeChange} name="phone" />
          </label>
          <button className='outline-gray-400 outline-double rounded-xl mt-8' onClick={onFormSubmit}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
