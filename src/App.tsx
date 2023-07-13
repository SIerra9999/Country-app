import './Styles/App.scss';
import Dashboard from './Components/Dashboard';
import CountryPage from './Components/ CountryPage';
import TopBar from './Components/TopBar';
import {useTheme } from './Components/ThemeContext';
import {createHashRouter, RouterProvider} from "react-router-dom"
import {CountryContextProvider} from "./Components/CountriesContext"

function App() {


  const {theme} = useTheme()

  const router = createHashRouter([
    {
      path: "/",
      element : <><CountryContextProvider><Dashboard/></CountryContextProvider></>
    },
    {
      path: "details/:countryName",
      element : <CountryPage/>
    }
  ])

  return (
    <div className={`App App--${theme}`}>

      <TopBar/>

      <RouterProvider router={router}/>

    </div>
  )
}

export default App;
