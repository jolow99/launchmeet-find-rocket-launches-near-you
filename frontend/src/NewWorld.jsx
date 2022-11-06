import React, { useState, useEffect, useRef } from "react";
import { getRocketLaunches } from "./services/rocketlaunches";
import getGeocoding from "./services/geocoding";

// import indexBy from "index-array-by";
// import { csvParseRows } from "d3-dsv";



import Globe from "react-globe.gl";

export const NewWorld = ({setDataPoint}) => {
  const [rocketLaunches, setRocketLaunches] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  // utilise useeffect to call getRocketLaunches and store the data in rocketLaunches
  useEffect(() => {
    getRocketLaunches().then(async (data) => {
      setRocketLaunches(data);
      // get the name from data and call getGeocoding then store it into a list of objects 

      // for each object in data
      let coords = [];
      for (let i = 0; i < data.result.length; i++) {
        // get the name of the rocket launch
        let name = data.result[i].pad.location.name;
        // call getGeocoding with the name
        let latlong = await getGeocoding(name);

        // append launch description and raw location name to latlong
        latlong.name = name
        latlong.desc = data.result[i].launch_description

        console.log("LATLONG")
        console.log(latlong)
        coords.push(latlong);
      }
      setCoordinates(coords);
    });
  }, []);
  console.log("ROCKET LAUNCHES")
  console.log(rocketLaunches)
  console.log("COORDINATES")
  console.log(coordinates)

  // create tooltip popup

  const setToolTip = (d) => {
    setDataPoint(d)

  }

  const getToolTip = (d) => {
    return `
    <p>Location: ${d.name}</p>
    <p>Description: ${d.desc}</p>
    <p>Latitude: ${d.lat}</p>
    <p>Longitude: ${d.lng}</p>
    <button onClick="alert('hi')">Click me</button>
`
 
  } 

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      pointsData={coordinates}
      pointLabel={getToolTip}
      onPointClick={setToolTip}
      // labelLabel = {getToolTip}

    // // globeImageUrl=""
    // showAtmosphere={false}
    // arcsData={routes}
    // arcLabel={d => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`}
    // arcStartLat={d => +d.srcAirport.lat}
    // arcStartLng={d => +d.srcAirport.lng}
    // arcEndLat={d => +d.dstAirport.lat}
    // arcEndLng={d => +d.dstAirport.lng}
    // arcDashLength={0.5}
    // arcDashGap={1}
    // arcDashInitialGap={() => Math.random()}
    // arcDashAnimateTime={4000}
    // // arcColor={d => [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`]}
    // arcsTransitionDuration={0}
    // arcStroke={null}
    // arcColor={() => "#88602333"}
    // pointsData={airports}
    // pointColor={() => "orange"}
    // pointAltitude={0}
    // pointRadius={0.02}
    // pointsMerge={true}
    />
  );
};
