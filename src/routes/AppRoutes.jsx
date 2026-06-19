import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Jobs from "../pages/Jobs";
// import Login from "../pages/Auth/logIn";
// import Signup from "../pages/Auth/signUp";
// import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
    </Routes>
  );
}

export default AppRoutes;
