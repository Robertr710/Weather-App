  
import React, {useState} from 'react';
import { Input, FormControl, InputLabel, FormHelperText, Button } from '@material-ui/core';






export const Home = () => {
  const [address, setAddress]= useState("");
  const [weather, setWeather]= useState("");
  const [imageIcon, setImageIcon]= useState("");
  const changeAddress = (e) => {
    setAddress(e.target.value)
  }
  const Get = async () =>{
    const geoKey = process.env.REACT_APP_GEOKEY;
    console.log(geoKey, "This is the geocode key.");
    const encodedAddress = encodeURIComponent(address);
    
    const response = await fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodedAddress + ".json?access_token="+ geoKey).then(res => res.json()).then(data => data);
     console.log(response, "This is the response.");

     
     const latitude = response.features[0].center[1];
     const longitude= response.features[0].center[0];
     const location= response.features[0].place_name;
     console.log(latitude,longitude,location);
     

     const weatherResponse = await fetch("https://climacheck-cors.herokuapp.com/https://api.darksky.net/forecast/" + process.env.REACT_APP_DARK_SKY + "/" + latitude +','+ longitude).then(res => res.json()).then(data => data);
     console.log(weatherResponse);
     const rainProbability = weatherResponse.currently.precipProbability;
     const icon = weatherResponse.currently.icon;
     setImageIcon(icon);
     const degreesCurrent = weatherResponse.currently.temperature;
     const dailySummary = weatherResponse.daily.data[0].summary;
     const todaysWeather = 'Now viewing weather for ' + location + '. ' + dailySummary + ' It is currently ' + degreesCurrent +' degrees out. The temperature high is '+ weatherResponse.daily.data[0].temperatureHigh + '. The temperature low for today is ' + weatherResponse.daily.data[0].temperatureLow+ '. There is a ' + rainProbability + '% chance of rain';
     setWeather(todaysWeather);

     

     
  }
 
  
  // lattitude: body.features[0].center[1],
// longitude: body.features[0].center[0],
// location: body.features[0].place_name
  return(<div>
   
    <FormControl onSubmit={Get}>
  <InputLabel htmlFor="my-input">Enter a location</InputLabel>
  <Input onChange={changeAddress} id="my-input" aria-describedby="my-helper-text" />

  <FormHelperText id="my-helper-text">Search by city name.</FormHelperText>
 
</FormControl>
<Button onClick={Get} style={{margin: "2rem", background: "#007dc1"}}>Search</Button>
{weather !== '' && <p> 
  <div>
  <img
            alt=""
            src={`${process.env.PUBLIC_URL}/Images/${imageIcon}.png`}
          ></img> </div>{weather} </p>}
    </div>);


}
/*function Weather() {
    return(
  <div className="app">
  <main>
  <div className="search-box">
    <input 
    type ="text" 
    className="search-bar"
    placeholder="Search.."/>
  
  </div>
  </main>
  </div>
  
    )
  }*/