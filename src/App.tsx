import './Styles/App.scss';
import Router from './Components/Router';
import CountriesDashboard from './Components/CountriesDashboard';
import CountryDetails from './Components/ CountryDetails';
import TopBar from './Components/TopBar';
import FilteringBar from './Components/FilteringBar';
import React from "react"
import { ThemeContext } from './Components/ThemeContext';

function App() {
  
  const currentTheme = React.useContext(ThemeContext)
  console.log("from app lvl", currentTheme);

  return (
    <div className="App">
      <TopBar/>
      <FilteringBar/>
      <Router path='/' Component={CountriesDashboard} ></Router>
      <Router path='/details' Component={CountryDetails} ></Router>
    </div>
  )
}

export default App;
