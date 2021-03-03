import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[countries,setCountries]=useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((response) =>response.json())
    .then(data =>setCountries(data))
   
  },[]);
  return (
    <div className="App">
      <header className="App-header">
       <h1>Country Loaded:{countries.length}</h1> 
       <ol>
       {
         countries.map((country) =><li>{country.name}</li>)
       }
       </ol>
        
      </header>
    </div>
  );
}

export default App;
