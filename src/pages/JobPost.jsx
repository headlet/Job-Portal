import React, { useState } from "react";
import { 
  FaBriefcase, 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaPlus, 
  FaTrash, 
  FaListUl, 
  FaCheckCircle,
  FaLayerGroup, // Fixed export name here (singular)
  FaEnvelope,
  FaRegClock
} from "react-icons/fa";

function JobPost() {
  const [activeTab, setActiveTab] = useState("basics");

  // ==========================================
  // JOB POSTING CORE FORM STATES
  // ==========================================
  const [jobDetails, setJobDetails] = useState({
    title: "",
    company: "Pixel Perfect Solutions", // Mock logged-in employer company
    category: "Commerce",
    jobType: "Full time",
    location: "",
    salaryRange: "",
    experienceLevel: "Mid Level",
    description: "",
    contactEmail: "recruiting@pixelperfect.io"
  });

  // Dynamic Array States for lists (matching Profile/CMS framework logic)
  const [responsibilities, setResponsibilities] = useState([
    "Build beautiful, responsive user interfaces using React and Tailwind CSS.",
    "Collaborate directly with product management and backend structural design teams."
  ]);
  const [newResponsibility, setNewResponsibility] = useState("");

  const [requirements, setRequirements] = useState([
    "3+ years of production experience working inside React ecosystems.",
    "Strong mastery of state architecture and declarative rendering frameworks."
  ]);
  const [newRequirement, setNewRequirement] = useState("");

  // ==========================================
  // ARRAY HOOK INTERACTION HANDLERS
  // ==========================================
  const handleAddResponsibility = (e) => {
    e.preventDefault();
    if (newResponsibility.trim() && !responsibilities.includes(newResponsibility.trim())) {
      setResponsibilities([...responsibilities, newResponsibility.trim()]);
      setNewResponsibility("");
    }
  };

  const handleRemoveResponsibility = (index) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  const handleAddRequirement = (e) => {
    e.preventDefault();
    if (newRequirement.trim() && !requirements.includes(newRequirement.trim())) {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement("");
    }
  };

  const handleRemoveRequirement = (index) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const handleSubmitPost = () => {
    if (!jobDetails.title || !jobDetails.location || !jobDetails.salaryRange) {
      alert("Please ensure core required elements (Title, Location, Salary Range) are filled out.");
      return;
    }
    
    const completeJobPayload = {
      ...jobDetails,
      responsibilities,
      requirements,
      postedAt: new Date().toISOString()
    };
    
    console.log("Publishing Job Document Transaction:", completeJobPayload);
    alert(`"${jobDetails.title}" has been transmitted successfully to live screening indices.`);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8">
      {/* Premium Master Layout Container Card matching your split-screen design architecture */}
      <div className="w-full max-w-[1150px] bg-white rounded-[2rem] shadow-[0_25px_50px_rgba(0,0,0,0.04)] overflow-hidden grid md:grid-cols-3">
        
        {/* ============= LEFT SIDEBAR: EMPLOYER BRAND & WORKFLOW ============= */}
        <div className="p-8 bg-black text-white flex flex-col justify-between relative md:col-span-1 border-r border-neutral-900">
          <div className="relative z-10">
            {/* Employer Positioning Profile Summary */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 bg-neutral-900 rounded-2xl border-2 border-[#309689] flex items-center justify-center shadow-lg">
                <FaBuilding className="text-3xl text-[#309689]" />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{jobDetails.company}</h3>
              <span className="text-[10px] font-black tracking-widest text-[#309689] uppercase mt-1 px-3 py-0.5 bg-[#309689]/10 rounded-full border border-[#309689]/20">
                Talent Acquisition
              </span>
              <p className="text-xs text-neutral-500 mt-2">Active Listings: 4 Live</p>
            </div>

            {/* Step Selection Routing Tabs */}
            <nav className="space-y-2">
              <button
                type="button"
                onClick={() => setActiveTab("basics")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "basics"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaLayerGroup className="text-base" /> Job Core Metadata
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("logistics")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "logistics"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaMapMarkerAlt className="text-base" /> Logistics & Settings
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("requirements")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "requirements"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaListUl className="text-base" /> Role Requirements
              </button>
            </nav>
          </div>

          <div className="relative z-10 text-[11px] text-neutral-500 text-center mt-8 pt-4 border-t border-neutral-900 tracking-wider">
            TALENT RECRUITING HUB
          </div>

          {/* Glowing Ambient Backdrop Shapes */}
          <div className="absolute top-12 left-6 w-14 h-14 bg-[#309689] rounded-full blur-2xl opacity-10"></div>
          <div className="absolute bottom-24 right-8 w-16 h-16 bg-blue-600 rounded-full blur-3xl opacity-15"></div>
        </div>

        {/* ============= RIGHT SIDE: JOB COMPOSER FORM WORKSPACE ============= */}
        <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-between min-h-[650px]">
          
          <div>
            {/* Header Track Summary */}
            <div className="mb-8 text-center md:text-left border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Deploy New Listing</h2>
              <p className="text-[#309689] font-medium text-sm">Post new positions to invite applications from qualified search candidates</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* TAB 1: CORE JOB METADATA */}
              {activeTab === "basics" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Job Placement Title *</label>
                      <input 
                        type="text" 
                        placeholder="Ex: Senior Frontend Engineer" 
                        value={jobDetails.title}
                        onChange={(e) => setJobDetails({ ...jobDetails, title: e.target.value })}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent font-medium" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Corporate Industry Category</label>
                      <select 
                        value={jobDetails.category}
                        onChange={(e) => setJobDetails({ ...jobDetails, category: e.target.value })}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-700 bg-transparent focus:outline-none focus:border-[#309689] transition-all text-sm font-medium"
                      >
                        <option value="Commerce">Commerce</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Metal Production">Metal Production</option>
                        <option value="Construction">Construction</option>
                        <option value="Hotels & Tourism">Hotels & Tourism</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Operational Contract Type</label>
                      <select 
                        value={jobDetails.jobType}
                        onChange={(e) => setJobDetails({ ...jobDetails, jobType: e.target.value })}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-700 bg-transparent focus:outline-none focus:border-[#309689] transition-all text-sm font-medium"
                      >
                        <option value="Full time">Full time</option>
                        <option value="Part time">Part time</option>
                        <option value="Contract">Contract</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Experience Seniority Tier</label>
                      <select 
                        value={jobDetails.experienceLevel}
                        onChange={(e) => setJobDetails({ ...jobDetails, experienceLevel: e.target.value })}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-700 bg-transparent focus:outline-none focus:border-[#309689] transition-all text-sm font-medium"
                      >
                        <option value="Entry Level">Entry Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior Level">Senior Level</option>
                        <option value="Director / Executive">Director / Executive</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Role Brief Summary / Overview</label>
                    <textarea 
                      rows="3" 
                      placeholder="Provide a comprehensive operational preview outlining team infrastructure and target parameters..." 
                      value={jobDetails.description}
                      onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })}
                      className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent resize-none text-sm leading-relaxed" 
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: COMPENSATION & LOGISTICS */}
              {activeTab === "logistics" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Target Location Coordinates *</label>
                      <div className="relative flex items-center">
                        <FaMapMarkerAlt className="absolute left-0 text-gray-400 bottom-3" />
                        <input 
                          type="text" 
                          placeholder="Ex: San Francisco, CA or Remote, USA" 
                          value={jobDetails.location}
                          onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })}
                          className="w-full pl-6 pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent font-medium" 
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Compensation / Salary Range *</label>
                      <div className="relative flex items-center">
                        <FaMoneyBillWave className="absolute left-0 text-gray-400 bottom-3" />
                        <input 
                          type="text" 
                          placeholder="Ex: $120,000 - $145,000" 
                          value={jobDetails.salaryRange}
                          onChange={(e) => setJobDetails({ ...jobDetails, salaryRange: e.target.value })}
                          className="w-full pl-6 pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent font-medium" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Inbound Routing Application Email</label>
                      <div className="relative flex items-center">
                        <FaEnvelope className="absolute left-0 text-gray-400 bottom-3" />
                        <input 
                          type="email" 
                          value={jobDetails.contactEmail}
                          onChange={(e) => setJobDetails({ ...jobDetails, contactEmail: e.target.value })}
                          className="w-full pl-6 pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent font-medium" 
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Application Review Period</label>
                      <div className="relative flex items-center">
                        <FaRegClock className="absolute left-0 text-gray-400 bottom-3" />
                        <input 
                          type="text" 
                          defaultValue="2 Weeks" 
                          disabled
                          className="w-full pl-6 pb-2 border-b-2 border-gray-100 text-neutral-400 bg-transparent cursor-not-allowed" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: DYNAMIC RESPONSIBILITIES & CANDIDATE REQUIREMENTS */}
              {activeTab === "requirements" && (
                <div className="space-y-6 max-h-[420px] overflow-y-auto pr-2">
                  
                  {/* Dynamic Core Tasks Block */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">Core Operational Responsibilities</label>
                    <div className="flex gap-3 items-end">
                      <input 
                        type="text" 
                        placeholder="Add position task item description..." 
                        value={newResponsibility}
                        onChange={(e) => setNewResponsibility(e.target.value)}
                        className="flex-1 pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent text-sm" 
                      />
                      <button 
                        type="button" 
                        onClick={handleAddResponsibility}
                        className="bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-xl transition-all"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      {responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start justify-between gap-3 p-3 bg-neutral-50 rounded-xl border border-gray-200/60 text-xs text-neutral-700">
                          <p className="leading-relaxed font-medium">✔️ {resp}</p>
                          <button type="button" onClick={() => handleRemoveResponsibility(idx)} className="text-gray-400 hover:text-red-500 transition-colors pt-0.5">
                            <FaTrash className="text-[10px]" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Experience Skill Prerequisites Block */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">Candidate Profile Prerequisites & Requirements</label>
                    <div className="flex gap-3 items-end">
                      <input 
                        type="text" 
                        placeholder="Add required expertise, degree, or skillset framework..." 
                        value={newRequirement}
                        onChange={(e) => setNewRequirement(e.target.value)}
                        className="flex-1 pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent text-sm" 
                      />
                      <button 
                        type="button" 
                        onClick={handleAddRequirement}
                        className="bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-xl transition-all"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      {requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start justify-between gap-3 p-3 bg-neutral-50 rounded-xl border border-gray-200/60 text-xs text-neutral-700">
                          <p className="leading-relaxed font-medium">📌 {req}</p>
                          <button type="button" onClick={() => handleRemoveRequirement(idx)} className="text-gray-400 hover:text-red-500 transition-colors pt-0.5">
                            <FaTrash className="text-[10px]" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </form>
          </div>

          {/* Persistent Action Submission Strip */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
            <button 
              type="button" 
              onClick={() => { if(window.confirm("Discard changes to this layout draft?")) window.location.reload(); }}
              className="text-sm text-gray-400 hover:text-neutral-800 font-bold transition-colors"
            >
              Clear Composition
            </button>
            <button
              type="button"
              onClick={handleSubmitPost}
              className="bg-[#309689] text-white py-3.5 px-8 rounded-xl font-bold text-xs tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#309689]/20 flex items-center gap-2"
            >
              <FaCheckCircle /> DEPLOY LIVE LISTING
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default JobPost;