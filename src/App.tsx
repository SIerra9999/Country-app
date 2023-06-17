import './Styles/App.scss';
import Router from './Components/Router';
import CountriesDashboard from './Components/CountriesDashboard';
import CountryDetails from './Components/ CountryDetails';
import TopBar from './Components/TopBar';

function App() {

  return (
    <div className="App">
      <TopBar/>
      <Router path='/' Component={CountriesDashboard} ></Router>
      <Router path='/details' Component={CountryDetails} ></Router>
    </div>
  )
}

export default App;
