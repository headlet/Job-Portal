import "./App.css";
import NavBar from "./layout/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./layout/footerBar";

import { db } from "./firebase.config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "jobs"));

        const jobsArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        jobsArray.sort((a, b) => b.createdAt - a.createdAt);

        setJobs(jobsArray);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <AppRoutes jobs={jobs} />
      </main>
      <Footer />
    </>
  );
}

export default App;
