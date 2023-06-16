import './Styles/App.scss';
import Router from './Components/Router';
import CountriesDashboard from './Components/CountriesDashboard';
import CountryDetails from './Components/ CountryDetails';

function App() {

  return (
    <div className="App">

      <Router path='/' Component={CountriesDashboard} ></Router>
      <Router path='/details' Component={CountryDetails} ></Router>
    </div>
  )
}

export default App;
