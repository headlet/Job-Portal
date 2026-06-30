import { useState } from "react";
import { FaBuilding, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import { db } from "../firebase.config";

const INITIAL_JOB_STATE = {
  title: "",
  company: "Pixel Perfect Solutions",
  category: "",
  jobType: "",
  location: "",
  salaryRange: "",
  experienceLevel: "Mid Level",
  description: "",
  contactEmail: "recruiting@pixelperfect.io",
};

import { collection, addDoc } from "firebase/firestore";

function JobPost() {
  const [jobDetails, setJobDetails] = useState(INITIAL_JOB_STATE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (jobDetails) {
        await addDoc(collection(db, "jobs"), jobDetails);
      }

      console.log("jobDetails success");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setJobDetails(INITIAL_JOB_STATE);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1150px] bg-white rounded-[2rem] shadow-[0_25px_50px_rgba(0,0,0,0.04)] overflow-hidden grid md:grid-cols-3">
        {/* LEFT PANEL */}
        <div className="p-8 bg-black text-white flex flex-col justify-between relative md:col-span-1 border-r border-neutral-900 min-h-[400px]">
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 bg-neutral-900 rounded-2xl border-2 border-[#309689] flex items-center justify-center shadow-lg">
                <FaBuilding className="text-3xl text-[#309689]" />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight">
                {jobDetails.company}
              </h3>
              <span className="text-[10px] font-black tracking-widest text-[#309689] uppercase mt-1 px-3 py-0.5 bg-[#309689]/10 rounded-full border border-[#309689]/20">
                Talent Acquisition
              </span>
              <p className="text-xs text-neutral-500 mt-2">
                Active Listings: 4 Live
              </p>
            </div>

            <nav className="space-y-2">
              <button
                type="button"
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
              >
                <FaLayerGroup className="text-base" /> Job Core Metadata
              </button>
            </nav>
          </div>

          <div className="relative z-10 text-[11px] text-neutral-500 text-center mt-8 pt-4 border-t border-neutral-900 tracking-wider">
            TALENT RECRUITING HUB
          </div>

          <div className="absolute top-12 left-6 w-14 h-14 bg-[#309689] rounded-full blur-2xl opacity-10" />
          <div className="absolute bottom-24 right-8 w-16 h-16 bg-blue-600 rounded-full blur-3xl opacity-15" />
        </div>

        {/* RIGHT PANEL */}
        <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="mb-8 text-center md:text-left border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Deploy New Listing
              </h2>
              <p className="text-[#309689] font-medium text-sm">
                Post new positions to invite applications from qualified
                candidates
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TITLE (Spans 2 cols) */}
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Job Placement Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="e.g. Senior Full Stack Engineer"
                    value={jobDetails.title}
                    onChange={handleChange}
                    className="w-full pb-2 border-b-2 border-gray-200 focus:border-[#309689] outline-none transition-colors font-medium text-gray-800"
                  />
                </div>

                {/* CATEGORY */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Category
                  </label>
                  <select
                    name="category"
                    value={jobDetails.category}
                    onChange={handleChange}
                    className="w-full pb-2 border-b-2 border-gray-200 focus:border-[#309689] outline-none bg-white text-gray-700"
                  >
                    <option value="">Select Category</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Construction">Construction</option>
                  </select>
                </div>

                {/* JOB TYPE */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Job Type
                  </label>
                  <select
                    name="jobType"
                    value={jobDetails.jobType}
                    onChange={handleChange}
                    className="w-full pb-2 border-b-2 border-gray-200 focus:border-[#309689] outline-none bg-white text-gray-700"
                  >
                    <option value="">Select Type</option>
                    <option value="Full time">Full time</option>
                    <option value="Part time">Part time</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                {/* EXPERIENCE LEVEL */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    value={jobDetails.experienceLevel}
                    onChange={handleChange}
                    className="w-full pb-2 border-b-2 border-gray-200 focus:border-[#309689] outline-none bg-white text-gray-700"
                  >
                    <option value="Junior Level">Junior Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                    <option value="Lead / Director">Lead / Director</option>
                  </select>
                </div>

                {/* LOCATION */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Austin, TX or Hybrid"
                    value={jobDetails.location}
                    onChange={handleChange}
                    className="w-full pb-2 border-b-2 border-gray-200 focus:border-[#309689] outline-none transition-colors text-gray-800"
                  />
                </div>

                {/* SALARY */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    name="salaryRange"
                    placeholder="e.g. $110,000 - $135,000"
                    value={jobDetails.salaryRange}
                    onChange={handleChange}
                    className="w-full pb-2 border-b-2 border-gray-200 focus:border-[#309689] outline-none transition-colors text-gray-800"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Inbound Routing Email *
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    required
                    value={jobDetails.contactEmail}
                    onChange={handleChange}
                    className="w-full pb-2 border-b-2 border-gray-200 focus:border-[#309689] outline-none transition-colors text-gray-800"
                  />
                </div>

                {/* DESCRIPTION (Spans 2 cols) */}
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Role Overview
                  </label>
                  <textarea
                    rows="3"
                    name="description"
                    placeholder="Briefly describe the day-to-day objectives..."
                    value={jobDetails.description}
                    onChange={handleChange}
                    className="w-full pb-2 border-b-2 border-gray-200 focus:border-[#309689] outline-none transition-colors resize-y text-gray-800"
                  />
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm text-gray-400 hover:text-gray-600 font-bold px-4 py-2 transition-colors"
                >
                  Reset Form
                </button>

                <button
                  type="submit"
                  className="bg-[#309689] hover:bg-[#267d72] text-white py-3.5 px-8 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#309689]/20 transition-all active:scale-[0.99]"
                >
                  <FaCheckCircle className="text-sm" /> DEPLOY LIVE LISTING
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
