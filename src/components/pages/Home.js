  
import React, {useState} from 'react';
import { Input, FormControl, InputLabel, FormHelperText, Button } from '@material-ui/core';




export const Home = () => {
  const [address, setAddress]= useState("");
  const changeAddress = (e) => {
    setAddress(e.target.value)
  }
  const Get = async () =>{
    const geoKey = process.env.REACT_APP_GEOKEY;
    console.log(geoKey, "This is the geocode key.");
    const encodedAddress = encodeURIComponent(address);
    
    const response = await fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodedAddress + ".json?access_token="+ geoKey).then(res => res.json()).then(data => console.log(data));
    // console.log(response, "This is the response.");
  }
  return(<div>
   
    <FormControl onSubmit={Get}>
  <InputLabel htmlFor="my-input">Enter a location</InputLabel>
  <Input onChange={changeAddress} id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Search by city name.</FormHelperText>
 
</FormControl>
<Button onClick={Get} style={{margin: "2rem", background: "#007dc1"}}>Search</Button>
    </div>)
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