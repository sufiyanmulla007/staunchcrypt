// import Solo from "./Components/Solo";
// import Login from "./NewComponents/Login";
import { Route, Routes } from "react-router-dom";
import Singup from "./Admin/Singup";
import Login from "./Admin/Login";

// import './Solo.css';
function App() {
  return (
    <>
    <div>
     {/* <Solo/> */}
     {/* <Login/> */}
     <Routes>
      <Route  path="/" element={<Singup/>}/>
      <Route path="/Login" element={<Login/>}/>
     </Routes>
     
    </div>
    </>
  );
}

export default App;
