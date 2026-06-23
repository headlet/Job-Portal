import React, { useState } from "react";
import { 
  FaSlidersH, 
  FaImage, 
  FaHome, 
  FaInfoCircle, 
  FaCheck, 
  FaTrash, 
  FaCloudUploadAlt, 
  FaBriefcase, 
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaPlus,
  FaTimes,
  FaLink,
  FaShieldAlt,
  FaGlobe
} from "react-icons/fa";

function Setting() {
  const [activeTab, setActiveTab] = useState("branding");
  
  // 1. Branding Configuration Document State
  const [branding, setBranding] = useState({
    siteName: "JobPortal Enterprise",
    supportEmail: "support@jobportal.io",
    footerCopyright: "© 2026 JobPortal Inc. All structural rights reserved.",
    navLinks: ["Find Jobs", "Browse Companies", "Salary Guide", "About Us"]
  });
  const [newNavLink, setNewNavLink] = useState("");

  // 2. Home Hero Configuration Document State
  const [hero, setHero] = useState({
    mainTitle: "Find Your Dream Job Today",
    subTitle: "Thousands of verified job openings across top engineering and enterprise groups globally.",
    searchPlaceholder: "Job title, keywords, or corporate division...",
    trendingTags: ["React", "DevOps", "Tailwind", "Python", "Product Manager"]
  });
  const [newTag, setNewTag] = useState("");

  // 3. About Page Configuration Document State
  const [about, setAbout] = useState({
    heading: "You Will Grow, You Will Succeed. We Promise That",
    storyText: "Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultrices. Diam convallis morbi erat sit platea. Elementum ut in ut donec et id suspendisse.",
    stats: [
      { id: 1, label: "Live Active Jobs", value: "14K+" },
      { id: 2, label: "Verified Corporations", value: "8K+" },
      { id: 3, label: "Monthly Placements", value: "2.5K+" },
    ]
  });

  // 4. Detailed Forensic Job Anti-Fraud Database Queue State
  const [pendingJobs, setPendingJobs] = useState([
    { 
      id: "JOB-9082", 
      title: "Remote Crypto Ledger Clerk", 
      company: "Bin-Moon Liquidations LLC", 
      location: "Austin, TX (Remote)", 
      reports: 14, 
      type: "High-Risk Fraud Flag",
      salary: "$85,000 - $110,000",
      description: "Requires applicant to process initial transfers through personal bank account coordinates.",
      postedBy: "unverified_user_99a@proton.me"
    },
    { 
      id: "JOB-4412", 
      title: "Senior Full-Stack Engineer", 
      company: "Apex Global Software", 
      location: "San Francisco, CA", 
      reports: 1, 
      type: "Suspicious External Link",
      salary: "$160,000 - $195,000",
      description: "Redirecting users to a data collection form outside the ecosystem gateway protocol.",
      postedBy: "hr@apex-global-recruiting.com"
    },
    { 
      id: "JOB-7731", 
      title: "Data Input Assistant", 
      company: "Vanguard Virtual Group", 
      location: "Chicago, IL", 
      reports: 0, 
      type: "Standard Verification Audit",
      salary: "$25 - $30 / hr",
      description: "Entry level operational queue assistance updating digital client indexing folders.",
      postedBy: "recruiting@vanguardvirtual.org"
    }
  ]);

  // ==========================================
  // HANDLERS FOR MULTI-VALUE FIELD ARRAYS
  // ==========================================
  
  const handleAddNavLink = () => {
    if (newNavLink.trim() && !branding.navLinks.includes(newNavLink.trim())) {
      setBranding({ ...branding, navLinks: [...branding.navLinks, newNavLink.trim()] });
      setNewNavLink("");
    }
  };

  const handleRemoveNavLink = (index) => {
    const updated = branding.navLinks.filter((_, i) => i !== index);
    setBranding({ ...branding, navLinks: updated });
  };

  const handleAddTag = () => {
    if (newTag.trim() && !hero.trendingTags.includes(newTag.trim())) {
      setHero({ ...hero, trendingTags: [...hero.trendingTags, newTag.trim()] });
      setNewTag("");
    }
  };

  const handleRemoveTag = (index) => {
    const updated = hero.trendingTags.filter((_, i) => i !== index);
    setHero({ ...hero, trendingTags: updated });
  };

  const handleStatChange = (id, field, value) => {
    const updatedStats = about.stats.map(stat => 
      stat.id === id ? { ...stat, [field]: value } : stat
    );
    setAbout({ ...about, stats: updatedStats });
  };

  const handleApproveJob = (id) => {
    setPendingJobs(pendingJobs.filter(job => job.id !== id));
    alert(`Listing ${id} successfully whitelisted and added to live production filters.`);
  };

  const handleDeleteJob = (id) => {
    setPendingJobs(pendingJobs.filter(job => job.id !== id));
    alert(`Listing ${id} purged from global indices. Associated entity flagged for ban.`);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8 w-full">
      <div className="w-full bg-white rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.06)] overflow-hidden grid md:grid-cols-4">
        
        {/* ============= LEFT SIDEBAR: ADMIN INTERFACE NAVIGATION ============= */}
        <div className="p-8 bg-black text-white flex flex-col justify-between relative md:col-span-1 border-r border-neutral-900">
          <div className="relative z-10">
            {/* Control Panel Status Identity Header */}
            <div className="flex flex-col items-center text-center mb-8 pb-6 border-b border-neutral-900">
              <div className="w-16 h-16 bg-[#309689]/10 rounded-2xl flex items-center justify-center border border-[#309689] mb-4 shadow-inner">
                <FaSlidersH className="text-2xl text-[#309689]" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">Console Workspace</h2>
              <p className="text-xs text-red-400 font-bold tracking-widest uppercase mt-1.5 px-3 py-0.5 bg-red-500/10 rounded-full border border-red-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Root Controller
              </p>
            </div>

            {/* Complete Interactive Navigation Hooks */}
            <nav className="space-y-2">
              <button
                type="button"
                onClick={() => setActiveTab("branding")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "branding"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaImage className="text-base" /> Global Branding Assets
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("homepage")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "homepage"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaHome className="text-base" /> Landing Hero Section
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "about"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaInfoCircle className="text-base" /> About Metrics & Values
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("moderation")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                  activeTab === "moderation"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaBriefcase className="text-base" /> Listing Integrity Engine
                {pendingJobs.length > 0 && (
                  <span className="absolute right-3 top-3.5 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                    {pendingJobs.length}
                  </span>
                )}
              </button>
            </nav>
          </div>

          <div className="relative z-10 text-[11px] text-neutral-500 text-center mt-8 pt-4 border-t border-neutral-900 tracking-wider">
            FIREBASE SECURE TRANSACTION PROTOCOL
          </div>

          {/* Aesthetic Background Decors */}
          <div className="absolute top-1/4 left-10 w-16 h-16 bg-[#309689] rounded-full blur-2xl opacity-15"></div>
          <div className="absolute bottom-1/4 right-5 w-20 h-20 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* ============= RIGHT SIDE: DETAILED SCHEMATIC WORKSPACE ============= */}
        <div className="p-8 md:p-12 md:col-span-3 flex flex-col justify-between min-h-[750px]">
          
          <div>
            {/* Active Header Tracker Description */}
            <div className="mb-8 text-center md:text-left border-b border-gray-100 pb-5">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">System Content Transformer</h2>
              <p className="text-[#309689] font-medium text-sm">Convert hardcoded application instances into dynamic state models</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* ========================================================= */}
              {/* TAB 1: FULL DETAILED BRANDING AND STRUCTURE DOCUMENT PANEL */}
              {/* ========================================================= */}
              {activeTab === "branding" && (
                <div className="space-y-6 max-h-[480px] overflow-y-auto pr-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Application Brand Title</label>
                      <input 
                        type="text" 
                        value={branding.siteName} 
                        onChange={(e) => setBranding({ ...branding, siteName: e.target.value })}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent font-medium" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Core Routing Support Endpoint</label>
                      <input 
                        type="email" 
                        value={branding.supportEmail} 
                        onChange={(e) => setBranding({ ...branding, supportEmail: e.target.value })}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent font-medium" 
                      />
                    </div>
                  </div>

                  {/* Header Component Array Mapping Editor */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">Dynamic Navigation Menu Strings</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Add new navigation option label..." 
                        value={newNavLink}
                        onChange={(e) => setNewNavLink(e.target.value)}
                        className="flex-1 pb-1 border-b-2 border-gray-200 focus:outline-none focus:border-[#309689] text-sm text-neutral-800"
                      />
                      <button 
                        type="button"
                        onClick={handleAddNavLink}
                        className="p-2 bg-[#309689] text-white text-xs font-bold rounded-lg px-3 flex items-center gap-1"
                      >
                        <FaPlus className="text-[10px]" /> Add Element
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {branding.navLinks.map((link, idx) => (
                        <span key={idx} className="flex items-center gap-2 text-xs font-semibold bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-xl border border-neutral-200">
                          <FaLink className="text-[10px] text-gray-400" /> {link}
                          <button type="button" onClick={() => handleRemoveNavLink(idx)} className="text-red-500 hover:text-red-700 font-bold">
                            <FaTimes />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Footer Corporate Copyright Output Statement</label>
                    <input 
                      type="text" 
                      value={branding.footerCopyright} 
                      onChange={(e) => setBranding({ ...branding, footerCopyright: e.target.value })}
                      className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent text-sm" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">Dynamic Navigation Brand Logo Upload Layer</label>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                      <div className="sm:col-span-1 flex items-center justify-center p-3 bg-neutral-900 rounded-xl h-16 border border-neutral-800">
                        <span className="text-[#309689] text-xs font-black tracking-wider flex items-center gap-1">
                          <span className="w-2.5 h-2.5 bg-white rounded-full inline-block"></span>
                          {branding.siteName.split(' ')[0]}
                        </span>
                      </div>
                      <div className="sm:col-span-3 border-2 border-dashed border-gray-200 hover:border-[#309689] transition-colors rounded-xl p-4 text-center cursor-pointer bg-neutral-50/50 flex flex-col items-center justify-center">
                        <FaCloudUploadAlt className="text-xl text-gray-400" />
                        <span className="text-xs font-bold text-neutral-700 mt-1">Replace vector header graphic asset</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: LANDING HERO MAIN CONFIGURATOR SCHEMATIC */}
              {/* ========================================================= */}
              {activeTab === "homepage" && (
                <div className="space-y-6 max-h-[480px] overflow-y-auto pr-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Hero Title Copy</label>
                    <input 
                      type="text" 
                      value={hero.mainTitle} 
                      onChange={(e) => setHero({ ...hero, mainTitle: e.target.value })}
                      className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent font-medium" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Hero Content Summary Text</label>
                    <textarea 
                      rows="2" 
                      value={hero.subTitle}
                      onChange={(e) => setHero({ ...hero, subTitle: e.target.value })}
                      className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent resize-none text-sm leading-relaxed" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Search Form Input Empty Placeholder String</label>
                    <input 
                      type="text" 
                      value={hero.searchPlaceholder} 
                      onChange={(e) => setHero({ ...hero, searchPlaceholder: e.target.value })}
                      className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent text-sm italic" 
                    />
                  </div>

                  {/* Trending Search Array Tag Generator */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">Trending Categories Quick Filter Anchors</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Add hot searching skill context..." 
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        className="flex-1 pb-1 border-b-2 border-gray-200 focus:outline-none focus:border-[#309689] text-sm text-neutral-800"
                      />
                      <button 
                        type="button"
                        onClick={handleAddTag}
                        className="p-2 bg-[#309689] text-white text-xs font-bold rounded-lg px-3 flex items-center gap-1"
                      >
                        <FaPlus className="text-[10px]" /> Append
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {hero.trendingTags.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1.5 text-xs font-medium bg-neutral-50 text-neutral-600 px-2.5 py-1 rounded-lg border border-gray-200/60">
                          #{tag}
                          <button type="button" onClick={() => handleRemoveTag(idx)} className="text-red-400 hover:text-red-600 text-[10px]">
                            <FaTimes />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: ABOUT CORE COMPONENT & PLACEMENT STATISTICS METRICS */}
              {/* ========================================================= */}
              {activeTab === "about" && (
                <div className="space-y-6 max-h-[480px] overflow-y-auto pr-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Core Philosophy Statement Title</label>
                    <input 
                      type="text" 
                      value={about.heading} 
                      onChange={(e) => setAbout({ ...about, heading: e.target.value })}
                      className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent font-medium" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Detailed Summary Block Narrative</label>
                    <textarea 
                      rows="3" 
                      value={about.storyText}
                      onChange={(e) => setAbout({ ...about, storyText: e.target.value })}
                      className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 focus:outline-none focus:border-[#309689] transition-all bg-transparent resize-none text-sm leading-relaxed" 
                    />
                  </div>

                  {/* Operational Metrics Dynamic Structural Value Grid Mapping */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">Dynamic Growth Statistics Counter Metric Row</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {about.stats.map((stat) => (
                        <div key={stat.id} className="p-4 border border-gray-200/80 rounded-xl bg-neutral-50/50 space-y-2">
                          <div>
                            <label className="text-[10px] font-black tracking-wider uppercase text-gray-400">Target Value</label>
                            <input 
                              type="text"
                              value={stat.value}
                              onChange={(e) => handleStatChange(stat.id, "value", e.target.value)}
                              className="w-full text-sm font-bold text-neutral-900 border-b border-gray-200 bg-transparent focus:outline-none focus:border-[#309689]"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-black tracking-wider uppercase text-gray-400">Label Identifier</label>
                            <input 
                              type="text"
                              value={stat.label}
                              onChange={(e) => handleStatChange(stat.id, "label", e.target.value)}
                              className="w-full text-xs text-neutral-600 border-b border-gray-200 bg-transparent focus:outline-none focus:border-[#309689]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 4: JOB VALIDATION MATRIX AND ANTI-FRAUD THREAT MONITOR */}
              {/* ========================================================= */}
              {activeTab === "moderation" && (
                <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-2">
                    <h4 className="text-xs font-bold text-gray-400 tracking-wide uppercase">
                      Operational Verification Pipeline Log
                    </h4>
                    <span className="text-[10px] bg-red-500/10 text-red-600 font-extrabold px-2.5 py-1 rounded-md flex items-center gap-1 border border-red-500/20 self-start sm:self-auto">
                      <FaShieldAlt /> MALICIOUS VECTOR PROTECTION ACTIVE
                    </span>
                  </div>

                  {pendingJobs.length === 0 ? (
                    <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl bg-neutral-50/50">
                      <p className="text-sm text-gray-400 font-medium">All database rows verified safe. Security metrics normal.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {pendingJobs.map((job) => (
                        <div key={job.id} className="p-4 border border-gray-200 rounded-xl bg-white flex flex-col space-y-3 transition-all hover:border-neutral-300 shadow-sm">
                          
                          {/* Metadata Row */}
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-[10px] font-mono bg-neutral-900 text-white px-2 py-0.5 rounded font-bold">{job.id}</span>
                                <h5 className="text-sm font-bold text-neutral-900">{job.title}</h5>
                                <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${
                                  job.reports > 5 ? "bg-red-100 text-red-700 border border-red-200" : "bg-amber-100 text-amber-700 border border-amber-200"
                                }`}>
                                  {job.reports} System Reports
                                </span>
                              </div>
                              <p className="text-xs text-neutral-600 font-medium mt-1 flex items-center gap-2">
                                <span className="underline decoration-neutral-300">{job.company}</span> • <FaMapMarkerAlt className="text-[10px] text-neutral-400" /> {job.location} • <span className="text-emerald-600 font-semibold">{job.salary}</span>
                              </p>
                            </div>
                            <span className="text-[10px] bg-neutral-100 text-neutral-700 font-mono px-2 py-1 rounded border border-gray-200 self-start sm:self-auto">
                              Issuer: {job.postedBy}
                            </span>
                          </div>

                          {/* Content Risk Breakdown Summary Container */}
                          <div className="p-3 bg-neutral-50 rounded-lg text-xs border border-neutral-100 space-y-1">
                            <span className="text-[10px] text-red-500 font-black tracking-wider uppercase block">Anomalous Risk Logged: {job.type}</span>
                            <p className="text-neutral-600 italic">"{job.description}"</p>
                          </div>

                          {/* Direct Administrative Clearance Controls */}
                          <div className="flex items-center justify-end gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => handleApproveJob(job.id)}
                              className="bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1 transition-all"
                            >
                              <FaCheck className="text-[10px]" /> Clear Listing Safe
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteJob(job.id)}
                              className="bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1 transition-all"
                            >
                              <FaTrash className="text-[10px]" /> Purge Fraud Element
                            </button>
                          </div>

                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </form>
          </div>

          {/* Persistent Transaction Global Sync Action Strip */}
          <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
              <FaGlobe className="text-neutral-300" /> Changes modify layout properties across production instances globally.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button 
                type="button" 
                onClick={() => { if(window.confirm("Discard modification queue changes?")) window.location.reload(); }}
                className="text-xs text-gray-400 hover:text-neutral-800 font-bold transition-colors py-2"
              >
                Reset Component Configuration
              </button>
              <button
                type="button"
                onClick={() => alert("Transactional payload dispatched successfully into Firebase cloud clusters. Changes are live.")}
                className="bg-[#309689] text-white py-3 px-6 rounded-xl font-bold text-xs tracking-wide shadow-md shadow-[#309689]/10 transition-all hover:bg-[#277d72] hover:shadow-lg"
              >
                COMMIT DYNAMIC MANIFEST TO BACKEND
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Setting;