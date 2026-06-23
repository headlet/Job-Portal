import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Jobs from "../pages/Jobs";
import Login from "../Auth/LogIn";
import Signup from "../auth/Signup";
import JobDetails from "../pages/JobDetails";
import Profile from "../pages/Profile";
import Setting from "../admin/Setting";
import PostJob from "../pages/JobPost";

function AppRoutes({ jobs }) {
  return (
    <Routes>
      <Route path="/" element={<Home jobs={jobs} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/jobs" element={<Jobs jobs={jobs} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobDetails" element={<JobDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/post_job" element={<PostJob />} />
    </Routes>
  );
}

export default AppRoutes;
