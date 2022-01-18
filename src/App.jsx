import { useState, useEffect } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Header from './Components/Header';
import Main from './Components/Main';


function App() {

  const URL = 'https://ed-spacestagram-shopify-backen.herokuapp.com/';

  const [nasaInfo, setNasaInfo] = useState(null);

  const getInfo = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setNasaInfo(data);
    console.log(data)
  }
  useEffect(() => getInfo(), []);

  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={
          <Main
            nasaInfo={nasaInfo}
          />
        } />
      </Routes>
    </div>
  )
}

export default App
