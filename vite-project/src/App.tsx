import{ BrowserRouter as Router,Route, Routes, Navigate } from"react-router-dom";
import { Landingpage } from "./components/Landingpage";
import { SignUp } from "./components/SignUp";
import { SignIn} from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App(){
  const [token,setToken] = useState<string | null>(localStorage.getItem('token'));
  const[signupMessage,setSignupMessage] = useState<string | null> (null);

  const handleLogin =(newToken:string)=>{
    setToken(newToken)
    localStorage.setItem('token', newToken)
  }

  const handleLogout = ()=>{
    setToken(null);
    localStorage.removeItem('token');
  }
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 
    </Router>
  )
}
 export default App