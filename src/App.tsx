import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  React.useEffect(()=>{
    async function fetchCountries (){
      let request = await fetch("https://restcountries.com/v3.1/name/algeria")
      let response = await request.json()
      console.log(response[0]);
    }

    fetchCountries()
  },[]) 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
