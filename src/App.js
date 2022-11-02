import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import SignUp from "./components/SignUp/signup";
import './App.css';
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [username,setUsername]=useState()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.displayName)
      }
      else{
        setUsername("")
      }
      console.log(user)})
  },[]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={username} />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
