import './Styles/App.scss';
import Router from './Components/Router';
import CountriesDashboard from './Components/CountriesDashboard';
import CountryDetails from './Components/ CountryDetails';
import TopBar from './Components/TopBar';
import FilteringBar from './Components/FilteringBar';
import React from "react"
import {useTheme } from './Components/ThemeContext';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {


  const {theme} = useTheme()

  const router = createBrowserRouter([
    {
      path: "/",
      element : <CountriesDashboard/>
    },
    {
      path: "/details",
      element : <CountryDetails/>
    }
  ])

  return (
    <div className={`App App--${theme}`}>

      <TopBar/>
      <FilteringBar/>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App;
