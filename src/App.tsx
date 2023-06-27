import './Styles/App.scss';
import CountriesDashboard from './Components/CountriesDashboard';
import CountryDetails from './Components/ CountryDetails';
import TopBar from './Components/TopBar';
import FilteringBar from './Components/FilteringBar';
import {useTheme } from './Components/ThemeContext';
import {createHashRouter, RouterProvider} from "react-router-dom"

function App() {


  const {theme} = useTheme()

  const router = createHashRouter([
    {
      path: "/",
      element : <CountriesDashboard/>
    },
    {
      path: "details/:countryName",
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
