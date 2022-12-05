import "./App.css"
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm"
import Alert from "./Components/Alert"
import About from "./Components/About"
import React, { useState } from "react"

 import {
   BrowserRouter as Router,
   Routes,
  Route
  
 } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
      document.title = "Textutilis-Dark Mode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutilis-Light Mode"
    }
  }
  return (
    <>
       <Router>
        <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
           <Routes>
             <Route path="/about" element={<About />} />
             <Route
               path="/"
               element=
              <TextForm
                  showAlert={showAlert}
                  heading="Enter your text here"
                  mode={mode}
                />
              
            />
         </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
