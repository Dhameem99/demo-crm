import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Dashboard from "./components/dashboard/dasboard"
import Login from "./components/login/login.jsx"
import Demo from "./demo.jsx";
import Signup from "./components/signup/signup.jsx"
import Servicereq from "./components/servicereq/servicereq.jsx"
function App() {
  return (
    <>
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route> 
      <Route path="/demo" element={<Demo />}></Route> 
      <Route path="/dashboard" element={<Dashboard />}></Route> 
      <Route path="/servicereq" element={<Servicereq />}></Route> 
      {/* <Route path="/profile" element={<Profile />}></Route>  */}
    </Routes>
  </BrowserRouter>
   
    
    </>
    
  );
}

export default App;