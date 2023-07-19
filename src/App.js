// import Solo from "./Components/Solo";
// import Login from "./NewComponents/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Singup from "./Admin/Singup";
import Login from "./Admin/Login";
import Dishbord from "./Admin/Dishbord";
import Headars from "./Admin/Headars";
import Apitoolkit from "./Admin/Apitoolkit";





// import './Solo.css';
function App() {
  return (
    <>
    <div>
     {/* <Solo/> */}
     {/* <Login/> */}
    <BrowserRouter>
    <Headars/>
     <Routes>
      <Route  path="/" element={<Singup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Dishbord" element={<Dishbord/>}/>
      <Route path="/Apitoolkit" element={<Apitoolkit/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
