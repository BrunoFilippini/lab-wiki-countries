import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from './components/Navbar'
import { CountriesList } from './components/CountriesList'
import { CountriesDetails } from './components/CountriesDetails'


function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar />

      <div className="container">

        <div className="row">
        
          <CountriesList />
          
          <Routes>

            <Route path="/:alpha3Code" element={<CountriesDetails />} />

          </Routes>

        </div>

      </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
