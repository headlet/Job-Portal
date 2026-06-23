import { useState } from "react";
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCloudUploadAlt, 
  FaPlus, 
  FaTrash, 
  FaLinkedin, 
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  
  // Sample state arrays for dynamic lists
  const [skills, setSkills] = useState(["React.js", "Tailwind CSS", "JavaScript", "Firebase"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8">
      {/* Main Premium Container matching Auth Cards */}
      <div className="w-full max-w-[1100px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden grid md:grid-cols-3">
        
        {/* ============= LEFT SIDEBAR: PROFILE SUMMARY & TABS ============= */}
        <div className="p-8 bg-black text-white flex flex-col justify-between relative md:col-span-1">
          <div className="relative z-10">
            {/* Avatar Upload Area */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative group w-28 h-28 bg-neutral-800 rounded-full border-2 border-[#309689] flex items-center justify-center overflow-hidden cursor-pointer transition-all">
                <FaUser className="text-4xl text-neutral-400 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-xs transition-opacity text-white font-medium">
                  <FaCloudUploadAlt className="text-xl text-[#309689] mb-1" />
                  Change
                </div>
              </div>
              <h2 className="mt-4 text-xl font-bold">Alex Morgan</h2>
              <p className="text-sm text-[#309689] font-medium">Frontend Developer</p>
              <p className="text-xs text-neutral-400 flex items-center gap-1 mt-1 justify-center">
                <FaMapMarkerAlt /> San Francisco, CA
              </p>
            </div>

            {/* Sidebar Tab Selectors */}
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("personal")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "personal"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaUser className="text-base" /> Personal Details
              </button>
              
              <button
                onClick={() => setActiveTab("experience")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "experience"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaBriefcase className="text-base" /> Experience & Education
              </button>

              <button
                onClick={() => setActiveTab("skills")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === "skills"
                    ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <FaGraduationCap className="text-base" /> Resume & Skills
              </button>
            </nav>
          </div>

          <div className="relative z-10 text-xs text-neutral-500 text-center mt-8 pt-4 border-t border-neutral-900">
            WWW.JobPortal.COM
          </div>

          {/* Abstract glowing shapes matching background theme */}
          <div className="absolute top-10 left-10 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500 rounded-full blur-2xl opacity-30"></div>
        </div>

        {/* ============= RIGHT SIDE: INTERACTIVE FORMS ============= */}
        <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-between min-h-[600px]">
          
          <div>
            {/* Context Heading */}
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">My Profile</h2>
              <p className="text-[#309689] font-medium text-sm">Keep your professional records up to date</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* TAB 1: PERSONAL DETAILS */}
              {activeTab === "personal" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Full Name</label>
                      <input type="text" defaultValue="Alex Morgan" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Professional Title</label>
                      <input type="text" defaultValue="Frontend Developer" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Email Address</label>
                      <input type="email" defaultValue="alex.morgan@example.com" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Phone Number</label>
                      <input type="tel" defaultValue="+1 (555) 019-2834" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">LinkedIn Profile</label>
                      <div className="relative flex items-center">
                        <FaLinkedin className="absolute left-0 text-gray-400 bottom-3" />
                        <input type="text" defaultValue="linkedin.com/in/alex-morgan" className="w-full pl-6 pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Portfolio Website</label>
                      <div className="relative flex items-center">
                        <FaGlobe className="absolute left-0 text-gray-400 bottom-3" />
                        <input type="text" defaultValue="alexmorgan.dev" className="w-full pl-6 pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">Bio / Summary</label>
                    <textarea rows="3" defaultValue="Passionate Frontend Developer with 3+ years of experience constructing scalable web interfaces using React, state architectures, and Tailwind CSS ecosystems." className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent resize-none" />
                  </div>
                </div>
              )}

              {/* TAB 2: EXPERIENCE & EDUCATION */}
              {activeTab === "experience" && (
                <div className="space-y-8 anonymity-fadeIn">
                  {/* Experience block wrapper */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-2">
                      <FaBriefcase className="text-[#309689]" /> Most Recent Experience
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">Company Name</label>
                        <input type="text" defaultValue="Pixel Perfect Solutions" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">Role Title</label>
                        <input type="text" defaultValue="Mid Frontend Engineer" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">Start Date</label>
                        <input type="text" defaultValue="Jan 2024" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">End Date</label>
                        <input type="text" defaultValue="Present" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Education block wrapper */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-2">
                      <FaGraduationCap className="text-[#309689]" /> Highest Education Level
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">Institution / University</label>
                        <input type="text" defaultValue="State Tech University" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">Degree Earned</label>
                        <input type="text" defaultValue="B.S. Computer Science" className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: RESUME & SKILLS */}
              {activeTab === "skills" && (
                <div className="space-y-8 animate-fadeIn">
                  {/* File Upload Section */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">Attached Resume (PDF)</label>
                    <div className="border-2 border-dashed border-gray-200 hover:border-[#309689] transition-colors rounded-2xl p-6 text-center cursor-pointer bg-neutral-50/50 flex flex-col items-center justify-center gap-2 group">
                      <FaCloudUploadAlt className="text-3xl text-gray-400 group-hover:text-[#309689] transition-colors" />
                      <span className="text-sm font-bold text-neutral-700">Upload New CV / Resume</span>
                      <span className="text-xs text-gray-400">PDF formats supported up to 5MB</span>
                    </div>
                  </div>

                  {/* Skills Tag Management */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">Core Skillsets</label>
                    
                    {/* Add Skill Form Input */}
                    <div className="flex gap-4 items-end">
                      <div className="flex-1 space-y-1">
                        <input 
                          type="text" 
                          placeholder="Ex: Node.js, GraphQL, Figma" 
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent" 
                        />
                      </div>
                      <button 
                        onClick={handleAddSkill}
                        className="bg-neutral-900 hover:bg-neutral-800 text-white p-2.5 rounded-xl transition-all"
                      >
                        <FaPlus className="text-sm" />
                      </button>
                    </div>

                    {/* Skill Tags Container */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="flex items-center gap-2 px-3.5 py-1.5 bg-[#309689]/5 border border-[#309689]/20 text-[#309689] rounded-xl text-xs font-bold group select-none"
                        >
                          {skill}
                          <button 
                            onClick={() => handleRemoveSkill(index)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <FaTrash className="text-[10px]" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </form>
          </div>

          {/* Persistent Form Submission Action Bar */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
            <button 
              type="button" 
              className="text-sm text-gray-400 hover:text-neutral-800 font-bold transition-colors"
            >
              Discard Changes
            </button>
            <button
              type="button"
              className="bg-[#309689] text-white py-3 px-8 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#309689]/20"
            >
              SAVE PROFILE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;