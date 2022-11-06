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
    apiKey: process.env.REACT_APP_AIRTABLE_KEY
  });
  var base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE);

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
      <NewWorld setDataPoint={setDatapoint} />
        <div className=''>
          <div className='m-4'>
            <p className=' font-bold'>Location:</p>
            <p className=' font-thin'>{datapoint.name}</p>
          </div>
          <div className='m-4'>
            <p className=' font-bold'>Description:</p>
            <p className=' font-thin'>{datapoint.desc}</p>
          </div>
          <div className='m-4'>
            <p className=' font-bold'>Latitude:</p>
            <p className=' font-thin'>{datapoint.lat}</p>
          </div>
          <div className='m-4'>
            <p className=' font-bold'>Longitude:</p>
            <p className=' font-thin'>{datapoint.lng}</p>
          </div>

          <a href="https://discord.gg/bT5DU5nk"> <button className='outline-gray-400 outline-double rounded-xl mt-8 p-2'>
            Join Our Discord
          </button> </a>
        </div>
        

      </div>
      <header className="App-header">

        {/* Write an introduction of the purpose of this form */}
        <p className=''>
          <code>Sign up to receive notifications about rocket launches near you 🚀🚀</code>
        </p>

        <form className='flex flex-col p-8'>
          <label className='m-2 float-left'>
            <span className="text-sm mx-4">Name</span>
            <input className='float-right w-48' type="text" onChange={handleNameChange} name="name" />
          </label>
          <label className='m-2 float-left'>
          <span className="text-sm mx-4">Phone Number</span>
            <input className='float-right w-48' type="text" onChange={handleNumberChange} name="phone" />
          </label>
          <label className='m-2 float-left'>
          <span className="text-sm mx-4">Postal Code</span>
            <input className='float-right w-48' type="text" onChange={handlePostalcodeChange} name="phone" />
          </label>
          <button className='outline-gray-400 outline-double rounded-xl mt-8' onClick={onFormSubmit}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
