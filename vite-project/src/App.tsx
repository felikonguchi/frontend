import{ BrowserRouter as Router,Route, Routes, Navigate } from"react-router-dom";
import { Landingpage } from "./components/Landingpage";
import { SignUp } from "./components/SignUp";
import { SignIn} from "./components/SignIn";

function App(){

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes> 
    </Router>
  )
}
 export default App