import { useState } from "react";
import { FaSearch, FaBriefcase, FaBuilding } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log({ search, location, category });
  };

  return (
    <section className="w-full flex flex-col items-center justify-center bg-black  text-white">
      
      {/* 1. HERO MAIN WRAPPER CONTAINER */}
      <div className="w-full bg-[#0c0d0e] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black px-6 py-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Abstract design decorative background glow circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-800/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto z-10 flex flex-col items-center w-full">
          {/* Main Hero Header */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Find Your Dream Job Today!
          </h1>
          
          {/* Subtitle Description text */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-medium max-w-2xl mb-12">
            Connecting Talent with Opportunity. Your Gateway to Career Success
          </p>

          {/* 2. RESPONSIVE COMPACT SEARCH FLOATING BAR */}
          <form 
            onSubmit={handleSearchSubmit}
            className="w-full max-w-4xl bg-white text-black rounded-2xl md:rounded-full p-2 md:pl-6 flex flex-col md:flex-row items-center gap-3 md:gap-0 shadow-2xl mb-16 border border-neutral-800/10"
          >
            {/* Main Text Input Element */}
            <div className="w-full md:flex-1 py-2">
              <input 
                type="text" 
                placeholder="Job Title or Company" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 text-sm font-medium text-neutral-700 bg-transparent placeholder-neutral-400 outline-none border-none"
              />
            </div>

            {/* Select Location Dropdown */}
            <div className="w-full md:w-48 py-2 border-t md:border-t-0 md:border-l border-neutral-200">
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 text-sm font-medium text-neutral-500 bg-transparent outline-none cursor-pointer border-none"
              >
                <option value="" disabled hidden>Select Location</option>
                <option value="ktm">Kathmandu</option>
                <option value="lkt">Lalitpur</option>
                <option value="bkt">Bhaktapur</option>
              </select>
            </div>

            {/* Select Category Dropdown */}
            <div className="w-full md:w-52 py-2 border-t md:border-t-0 md:border-l border-neutral-200 md:mr-2">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 text-sm font-medium text-neutral-500 bg-transparent outline-none cursor-pointer border-none"
              >
                <option value="" disabled hidden>Select Category</option>
                <option value="it">IT / Software</option>
                <option value="design">UI/UX Design</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
                <option value="hr">Human Resources</option>
                <option value="sales">Sales</option>
                <option value="engineering">Engineering</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>

            {/* Submission Interactive Button */}
            <button 
              type="submit" 
              className="w-full md:w-auto bg-[#309689] hover:bg-teal-700 text-white font-medium text-sm px-6 py-3.5 rounded-xl md:rounded-full flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <FaSearch className="text-xs" />
              <span>Search Job</span>
            </button>
          </form>

          {/* 3. METRICS / STATS SECTION */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-14 md:gap-20 w-full">
            
            {/* Stat Element 1: Jobs Counter */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#309689]/20 border border-[#309689]/40 flex items-center justify-center text-[#309689] text-xl">
                <FaBriefcase /> {/* Replaced FaTools with a professional Briefcase icon */}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white leading-none">25,850</h4>
                <p className="text-xs text-neutral-400 mt-1.5">Jobs</p>
              </div>
            </div>

            {/* Stat Element 2: Candidates Counter */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#309689]/20 border border-[#309689]/40 flex items-center justify-center text-[#309689] text-xl">
                <FaUsers />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white leading-none">10,250</h4>
                <p className="text-xs text-neutral-400 mt-1.5">Candidates</p>
              </div>
            </div>

            {/* Stat Element 3: Companies Counter */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#309689]/20 border border-[#309689]/40 flex items-center justify-center text-[#309689] text-xl">
                <FaBuilding />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white leading-none">18,400</h4>
                <p className="text-xs text-neutral-400 mt-1.5">Companies</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;