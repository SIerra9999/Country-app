import './Styles/App.scss';
import Router from './Components/Router';
import CountriesDashboard from './Components/CountriesDashboard';
import CountryDetails from './Components/ CountryDetails';
import TopBar from './Components/TopBar';
import FilteringBar from './Components/FilteringBar';
import React from "react"
import { ThemeContextProvider } from './Components/ThemeContext';

function App() {
  return (
 
    <div className="App">
      <ThemeContextProvider >
      <TopBar/>
      <FilteringBar/>
      <Router path='/' Component={CountriesDashboard} ></Router>
      <Router path='/details' Component={CountryDetails} ></Router>
      </ThemeContextProvider>

    </div>
  )
}

export default App;
