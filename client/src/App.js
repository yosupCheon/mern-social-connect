import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar";
import Login from "./components/login"; 
import Create from "./components/create";
 const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Login />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 export default App;