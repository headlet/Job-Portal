import { useState } from "react";
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaRegClock, 
  FaRegBookmark,
  FaBriefcase,
  FaMoneyBillWave,
  FaInstagram,
  FaApple
} from "react-icons/fa";
import { SiTesla, SiMcdonalds } from "react-icons/si";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  // Mock Data for the Job Feed
  const jobListings = [
    {
      id: 1,
      posted: "10 min ago",
      title: "Forward Security Director",
      company: "Daugh, Schuppe and Schulist Co",
      category: "Hotels & Tourism",
      type: "Full time",
      salary: "$40000-$42000",
      location: "New York, USA",
      logoBg: "bg-red-500",
    },
    {
      id: 2,
      posted: "12 min ago",
      title: "Regional Creative Facilitator",
      company: "Wiza - Becker Co",
      category: "Media",
      type: "Part time",
      salary: "$28000-$32000",
      location: "Los Angeles, USA",
      logoBg: "bg-orange-500",
    },
    {
      id: 3,
      posted: "15 min ago",
      title: "Internal Integration Planner",
      company: "Hauck, Quigley and Rool Inc",
      category: "Construction",
      type: "Full time",
      salary: "$48000-$50000",
      location: "Texas, USA",
      logoBg: "bg-blue-500",
    },
    {
      id: 4,
      posted: "24 min ago",
      title: "District Intranet Director",
      company: "VonRueden - Weber Co",
      category: "Commerce",
      type: "Full time",
      salary: "$42000-$48000",
      location: "Florida, USA",
      logoBg: "bg-purple-500",
    },
    {
      id: 5,
      posted: "26 min ago",
      title: "Corporate Tactics Facilitator",
      company: "Cormier, Turner and Flackey Inc",
      category: "Commerce",
      type: "Full time",
      salary: "$80000-$90000",
      location: "Boston, USA",
      logoBg: "bg-teal-500",
    }
  ];

  // Mock Data for Top Companies
  const topCompanies = [
    { name: "Instagram", icon: <FaInstagram className="text-3xl" />, desc: "Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat.", jobs: "4 open jobs" },
    { name: "Tesla", icon: <SiTesla className="text-3xl" />, desc: "At pellentesque amet odio cras imperdiet nisl. Ac magna aliquet massa.", jobs: "14 open jobs" },
    { name: "McDonald's", icon: <SiMcdonalds className="text-3xl text-yellow-500" />, desc: "Odio aliquet tellus tellus maecenas. Faucibus in viverra venenatis phasellus.", jobs: "12 open jobs" },
    { name: "Apple", icon: <FaApple className="text-3xl" />, desc: "Et odio sem tellus ultrices posuere consequat. Tristique nascetur sapien.", jobs: "11 open jobs" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f4f7f6] text-neutral-800 font-sans">
      
      {/* 1. DARK PAGE HEADER */}
      <div className="w-full bg-black text-white py-20 px-6 flex flex-col items-center justify-center border-t border-neutral-800">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Jobs</h1>
      </div>

      {/* 2. MAIN CONTENT AREA (Sidebar + Job List) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* ================= LEFT SIDEBAR FILTERS ================= */}
        <aside className="w-full lg:w-1/4 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
            
            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-neutral-800 mb-2">Search by Job Title</label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm" />
                <input 
                  type="text" 
                  placeholder="Job title or company"
                  value={search} 
                  className="w-full bg-[#f8faf9] border border-neutral-200 rounded-lg py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:border-[#309689]"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-neutral-800 mb-2">Location</label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm" />
                <select className="w-full bg-[#f8faf9] border border-neutral-200 rounded-lg py-2.5 pl-9 pr-3 text-sm appearance-none focus:outline-none focus:border-[#309689]">
                  <option value="">Choose city</option>
                  <option value="ny">New York</option>
                  <option value="la">Los Angeles</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-neutral-800 mb-3">Category</label>
              <div className="flex flex-col gap-2.5 text-sm text-neutral-600">
                {[
                  { name: "Commerce", count: 13 },
                  { name: "Telecommunications", count: 13 },
                  { name: "Hotels & Tourism", count: 12 },
                  { name: "Education", count: 13 },
                  { name: "Financial Services", count: 13 }
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center justify-between cursor-pointer group">
                    <span className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-neutral-300 text-[#309689] focus:ring-[#309689]" />
                      <span className="group-hover:text-[#309689]">{item.name}</span>
                    </span>
                    <span className="bg-[#f4f7f6] px-2 py-0.5 rounded text-xs text-neutral-500">{item.count}</span>
                  </label>
                ))}
              </div>
              <button className="w-full mt-4 bg-[#309689]/10 text-[#309689] font-semibold text-sm py-2 rounded-lg hover:bg-[#309689]/20 transition-colors">
                Show More
              </button>
            </div>

            <hr className="border-neutral-100 my-6" />

            {/* Job Type */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-neutral-800 mb-3">Job Type</label>
              <div className="flex flex-col gap-2.5 text-sm text-neutral-600">
                {["Full Time", "Part Time", "Freelance", "Seasonal", "Fixed-Price"].map((type, idx) => (
                  <label key={idx} className="flex items-center justify-between cursor-pointer group">
                    <span className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-neutral-300 text-[#309689] focus:ring-[#309689]" />
                      <span className="group-hover:text-[#309689]">{type}</span>
                    </span>
                    <span className="bg-[#f4f7f6] px-2 py-0.5 rounded text-xs text-neutral-500">13</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-bold text-neutral-800 mb-3">Tags</label>
              <div className="flex flex-wrap gap-2">
                {["engineering", "design", "ui/ux", "marketing", "management", "swift", "construction"].map((tag, idx) => (
                  <span key={idx} className="bg-[#309689]/10 text-[#309689] text-[11px] font-medium px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#309689] hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Hiring Banner Ad */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden h-64 flex flex-col items-center justify-center">
             <div className="absolute inset-0 bg-black/20" />
             <div className="relative z-10">
               <h3 className="text-xl font-bold mb-1">WE ARE HIRING</h3>
               <p className="text-sm text-neutral-300">Apply Today!</p>
             </div>
          </div>
        </aside>

        {/* ================= RIGHT JOB LISTINGS ================= */}
        <main className="w-full lg:w-3/4 flex flex-col">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 text-sm">
            <p className="text-neutral-500 mb-4 sm:mb-0">Showing 6-6 of 10 results</p>
            <div className="flex items-center gap-2">
              <span className="text-neutral-500">Sort by:</span>
              <select className="bg-white border border-neutral-200 rounded-lg py-1.5 px-3 text-neutral-700 outline-none">
                <option>Latest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          {/* Job Feed */}
          <div className="flex flex-col gap-4">
            {jobListings.map((job) => (
              <div key={job.id} className="bg-white border border-neutral-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative group">
                
                {/* Bookmark Icon */}
                <button className="absolute top-6 right-6 text-neutral-400 hover:text-[#309689]">
                  <FaRegBookmark />
                </button>

                {/* Top Badge */}
                <span className="inline-block bg-[#309689]/10 text-[#309689] text-[10px] font-bold px-2.5 py-1 rounded mb-4">
                  {job.posted}
                </span>

                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Abstract Logo */}
                  <div className={`w-12 h-12 ${job.logoBg} rounded-full flex items-center justify-center text-white shrink-0 shadow-inner`}>
                    <FaBriefcase className="text-lg" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-neutral-800 group-hover:text-[#309689] transition-colors mb-1">{job.title}</h3>
                    <p className="text-sm text-neutral-500 mb-4">{job.company}</p>

                    {/* Meta Info Row */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-500 font-medium">
                      <span className="flex items-center gap-1.5"><FaBriefcase className="text-[#309689]" /> {job.category}</span>
                      <span className="flex items-center gap-1.5"><FaRegClock className="text-[#309689]" /> {job.type}</span>
                      <span className="flex items-center gap-1.5"><FaMoneyBillWave className="text-[#309689]" /> {job.salary}</span>
                      <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-[#309689]" /> {job.location}</span>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="flex items-end sm:items-center mt-4 sm:mt-0 shrink-0">
                    <button className="bg-[#309689] hover:bg-teal-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors">
                      Job Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#309689] text-white text-sm font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50">2</button>
            <button className="h-8 px-3 flex items-center justify-center rounded-lg bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50">Next &rsaquo;</button>
          </div>
        </main>
      </div>

      {/* 3. TOP COMPANY SECTION */}
      <div className="w-full bg-white py-20 px-6 mt-10 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-3">Top Company</h2>
          <p className="text-sm text-neutral-500 mb-12 max-w-2xl mx-auto">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCompanies.map((company, idx) => (
              <div key={idx} className="bg-white border border-neutral-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-5 border border-neutral-100">
                  {company.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-3">{company.name}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  {company.desc}
                </p>
                <span className="bg-[#309689]/10 text-[#309689] text-xs font-semibold px-4 py-2 rounded-full mt-auto">
                  {company.jobs}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Jobs;