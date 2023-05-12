import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  setInterval(() => {
    document.title = "open now"
  }, 1000);
  setInterval(() => {
    document.title = "Textutil"
  }, 1500);
  const modes = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#031646"
      showalert("success", "dark mode is enabled")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showalert("success", "light mode is enabled")
    }
  }

  const showalert = (type, message) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert("")
    }, 3000)
  }
  return (
    // <div className="App">
    //   <Navbar alert={alert} mode={mode} modes={modes} />
    //   <Alert alert={alert} />
    //   <Textform mode={mode} showalert={showalert} title="Enter text belowe" />
    // </div>
    <Router>
      <div className='App'>
        <Navbar alert={alert} mode={mode} modes={modes} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/Textform" element={<Textform mode={mode} showalert={showalert} title="Enter text belowe" />}>
          </Route>
          <Route exact path='/About' element={<About mode={mode} />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
