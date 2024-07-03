
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  
  const [mode, setMode] = useState("light")
  const[alert, setAlert] =  useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }



  const toogleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert(" Dark mode had been enabled","success")
      document.title = "TestUtils - Dark"
      // setInterval(() => {
      //   document.title = "Install TextUtils"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install the app now"
      // }, 1500);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" Light mode had been enabled","success")
      document.title = "TestUtils - Light"
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" text = "About Us" mode={mode} toogleMode={toogleMode}/>
    {/* <TextForm heading = "LOGIN" mode = {mode} showAlert = {showAlert}/> */}
    <Alert alert = {alert}/>
    <div className="container">
    <Routes>
        <Route path="/" element={<TextForm heading = "TextNest" mode = {mode} showAlert = {showAlert}/>} />
        <Route path="/about" element={<About />} />
    </Routes> 
    {/* <Navbar title = "textUtils2" />  */}
    {/* <Navbar /> */}
     </div>
    </Router>
    </>
    
  );
}
 
export default App;
