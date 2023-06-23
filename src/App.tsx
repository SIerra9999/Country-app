import './Styles/App.scss';
import Router from './Components/Router';
import CountriesDashboard from './Components/CountriesDashboard';
import CountryDetails from './Components/ CountryDetails';
import TopBar from './Components/TopBar';
import FilteringBar from './Components/FilteringBar';
import React from "react"
import { ThemeContextProvider,useTheme } from './Components/ThemeContext';

function App() {


  const {theme} = useTheme()

  return (
    <div className={`App App--${theme}`}>

      <TopBar/>
      <FilteringBar/>
      <Router path='/' Component={CountriesDashboard} ></Router>
      <Router path='/details' Component={CountryDetails} ></Router>


    </div>
  )
}

export default App;
