import { useRef, useState } from "react";
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
  FaRegClock,
  FaMoneyBillWave,
  FaCamera,
} from "react-icons/fa";
import { useAuth } from "./component/AuthContext";
import { Navigate } from "react-router-dom";



function Profile({ jobs }) {
  const [activeTab, setActiveTab] = useState("personal");
  const {
    userDetails,
    loading,
    handleLogout,
    setUserDetails,
    updateUserProfile,
  } = useAuth();

  const [newSkill, setNewSkill] = useState("");
  const currentSkills = Array.isArray(userDetails?.skill)
    ? userDetails.skill
    : userDetails?.skill
      ? [userDetails.skill]
      : [];

  const handleAddSkill = (e) => {
    e.preventDefault();
    const trimmed = newSkill.trim();

    if (trimmed && !currentSkills.includes(trimmed)) {
      const updatedSkills = [...currentSkills, trimmed];
      handleUserDetails({
        target: {
          name: "skill",
          value: updatedSkills,
        },
      });

      setNewSkill("");
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    const updatedSkills = currentSkills.filter(
      (_, index) => index !== indexToRemove,
    );

    handleUserDetails({
      target: {
        name: "skill",
        value: updatedSkills,
      },
    });
  };

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
     
        handleUserDetails({
          target: {
            name: "profileImage",
            value: reader.result, 
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUserDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("This is the current typed data:", userDetails);

    try {
      await updateUserProfile(userDetails);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        <p className="text-gray-500 font-medium text-lg">Loading profile...</p>
      </div>
    );
  }

  if (!userDetails) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1100px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden grid md:grid-cols-3">
        <div className="p-8 bg-black text-white flex flex-col justify-between relative md:col-span-1">
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="flex flex-col items-center text-center mb-8">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />

                <div
                  onClick={() => fileInputRef.current.click()}
                  className="relative group w-28 h-28 bg-neutral-800 rounded-full border-2 border-[#309689] flex items-center justify-center overflow-hidden cursor-pointer transition-all"
                >
                  {userDetails?.profileImage ? (
                    <img
                      src={userDetails.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover transition-opacity group-hover:opacity-40"
                    />
                  ) : (
                    <FaUser className="text-4xl text-neutral-400 group-hover:opacity-30 transition-opacity" />
                  )}

                  {/* Hover overlay indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <FaCamera className="text-white text-xl" />
                  </div>
                </div>
              </div>
              <h2 className="mt-4 text-xl font-bold">
                {userDetails?.fullName}
              </h2>
              <p className="text-sm text-[#309689] font-medium">
                {userDetails?.email}{" "}
              </p>
              <p className="text-xs text-neutral-400 flex items-center gap-1 mt-1 justify-center">
                <FaMapMarkerAlt /> {userDetails?.role}
              </p>
            </div>

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

              {userDetails?.role === "employer" && (
                <button
                  onClick={() => setActiveTab("Jobs")}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === "Jobs"
                      ? "bg-[#309689] text-white shadow-lg shadow-[#309689]/20"
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  <FaBriefcase className="text-base" /> Jobs
                </button>
              )}
            </nav>
          </div>

          <button
            className="bg-[#309689] w-fit p-2 text-center rounded-2xl hover:bg-white hover:text-black"
            onClick={handleLogout}
          >
            LogOut
          </button>
          <div className="absolute top-10 left-10 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500 rounded-full blur-2xl opacity-30"></div>
        </div>

        <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-between min-h-[600px]">
          {activeTab === "personal" && (
            <div>
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  My Profile
                </h2>
                <p className="text-[#309689] font-medium text-sm">
                  Keep your professional records up to date
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* TAB 1: PERSONAL DETAILS */}

                <div className="space-y-6 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={userDetails.fullName}
                        onChange={handleUserDetails}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">
                        Professional Title
                      </label>
                      <input
                        type="text"
                        name="professionalTitle"
                        onChange={handleUserDetails}
                        value={userDetails?.professionalTitle ?? "Frontend Dev"}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={userDetails?.email ?? "alex.morgan@example.com"}
                        onChange={handleUserDetails}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone_no"
                        value={userDetails?.phone_no ?? "+977-98612"}
                        onChange={handleUserDetails}
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">
                        LinkedIn Profile
                      </label>
                      <div className="relative flex items-center">
                        <FaLinkedin className="absolute left-0 text-gray-400 bottom-3" />
                        <input
                          type="text"
                          name="linkedin"
                          value={userDetails?.linkedin ?? ""}
                          onChange={handleUserDetails}
                          className="w-full pl-6 pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">
                        Portfolio Website
                      </label>
                      <div className="relative flex items-center">
                        <FaGlobe className="absolute left-0 text-gray-400 bottom-3" />
                        <input
                          type="text"
                          name="portfolio"
                          value={userDetails?.portfolio ?? ""}
                          onChange={handleUserDetails}
                          className="w-full pl-6 pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase">
                      Bio / Summary
                    </label>
                    <textarea
                      rows="3"
                      name="bio"
                      value={userDetails?.bio ?? ""}
                      onChange={handleUserDetails}
                      className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent resize-none"
                    />
                  </div>

                  {/* Experience block wrapper */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-2">
                      <FaBriefcase className="text-[#309689]" /> Most Recent
                      Experience
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={userDetails?.companyName ?? ""}
                          onChange={handleUserDetails}
                          className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">
                          Role Title
                        </label>
                        <input
                          type="text"
                          name="roleTitle"
                          value={userDetails?.roleTitle ?? ""}
                          onChange={handleUserDetails}
                          className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">
                          Start Date
                        </label>
                        <input
                          type="text"
                          name="startDate"
                          value={userDetails?.startDate ?? ""}
                          onChange={handleUserDetails}
                          className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">
                          End Date
                        </label>
                        <input
                          type="text"
                          name="endDate"
                          value={userDetails?.endDate ?? ""}
                          onChange={handleUserDetails}
                          className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Education block wrapper */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-2">
                      <FaGraduationCap className="text-[#309689]" /> Highest
                      Education Level
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">
                          Institution / University
                        </label>
                        <input
                          type="text"
                          name="institution"
                          value={userDetails?.institution ?? ""}
                          onChange={handleUserDetails}
                          className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase">
                          Degree Earned
                        </label>
                        <input
                          type="text"
                          name="degree"
                          value={userDetails?.degree ?? ""}
                          onChange={handleUserDetails}
                          className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">
                      Attached Resume (PDF)
                    </label>

                    <div className="border-2 border-dashed border-gray-200 hover:border-[#309689] transition-colors rounded-2xl p-6 text-center cursor-pointer bg-neutral-50/50 flex flex-col items-center justify-center gap-2 group">
                      <FaCloudUploadAlt className="text-3xl text-gray-400 group-hover:text-[#309689] transition-colors" />
                      <span className="text-sm font-bold text-neutral-700">
                        {userDetails.resume
                          ? "Change CV / Resume"
                          : "Upload New CV / Resume"}
                      </span>
                      <input
                        type="url"
                        name="resume"
                        onChange={handleUserDetails}
                        value={userDetails.resume}
                        placeholder="https://google.com..."
                        className="w-full pb-2 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                      />

                      <a
                        href={userDetails.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevents the file dialog picker from popping up when clicking the link
                        className="mt-2 px-3 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors rounded-lg text-xs font-medium max-w-xs truncate border border-emerald-200 flex items-center gap-1.5 dynamic-link"
                      >
                        {userDetails.resume
                          ? "📄 View Current Resume ↗"
                          : "No Resume"}
                      </a>
                    </div>
                  </div>

                  {/* Skills Tag Management */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-400 tracking-wide uppercase block">
                      Core Skillsets
                    </label>

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
                      {currentSkills.map((skill, index) => (
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

                <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
                  <button
                    type="button"
                    className="text-sm text-gray-400 hover:text-neutral-800 font-bold transition-colors"
                  >
                    Discard Changes
                  </button>
                  <button
                    type="submit"
                    className="bg-[#309689] text-white py-3 px-8 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#309689]/20"
                  >
                    SAVE PROFILE
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: Jobs */}
          {activeTab === "Jobs" && (
            <div>
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Jobs</h2>
                <p className="text-[#309689] font-medium text-sm">
                  Keep your company jobs records up to date
                </p>
              </div>
              <div className="space-y-8 anonymity-fadeIn">
                <div className="w-full px-2 sm:px-3 lg:px-4 max-w-7xl mx-auto">
                  {/* Jobs Feed Stack */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      {jobs.map((job) => (
                        <div
                          key={job.id}
                          className="bg-white border border-neutral-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative group"
                        >
                          {/* Top Badge */}
                          <span className="inline-block bg-[#309689]/10 text-[#309689] text-[10px] font-bold px-2.5 py-1 rounded mb-4">
                            {job.posted}
                          </span>

                          <div className="flex flex-col sm:flex-row gap-5">
                            {/* Abstract Logo */}
                            <div
                              className={`w-12 h-12 ${job.logoBg} rounded-full flex items-center justify-center text-white shrink-0 shadow-inner`}
                            >
                              <FaBriefcase className="text-lg" />
                            </div>

                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-neutral-800 group-hover:text-[#309689] transition-colors mb-1">
                                {job.title}
                              </h3>
                              <p className="text-sm text-neutral-500 mb-4">
                                {job.company}
                              </p>

                              {/* Meta Info Row */}
                              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-500 font-medium">
                                <span className="flex items-center gap-1.5">
                                  <FaBriefcase className="text-[#309689]" />{" "}
                                  {job.category}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <FaRegClock className="text-[#309689]" />{" "}
                                  {job.type}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <FaMoneyBillWave className="text-[#309689]" />{" "}
                                  {job.salary}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <FaMapMarkerAlt className="text-[#309689]" />{" "}
                                  {job.location}
                                </span>
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
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
