  
import React from 'react'
import { Input, FormControl, InputLabel, FormHelperText, Button } from '@material-ui/core';




export const Home = () => (
  <div>
   
    <FormControl>
  <InputLabel htmlFor="my-input">Enter a location</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Search by city name.</FormHelperText>
  
</FormControl>
<Button style={{margin: "2rem", background: "#007dc1"}}>Search</Button>
    </div>
)
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