import React from 'react';
import { 
  FaBriefcase, 
  FaRegClock, 
  FaMapMarkerAlt, 
  FaMoneyBillWave,
  FaRegBookmark,
  FaCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaUserAlt,
  FaGraduationCap,
  FaRegUser,
  FaRegEnvelope,
  FaPhoneAlt
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function JobDetails() {
  const relatedJobs = [
    {
      id: 1,
      time: "24 min ago",
      title: "Internal Creative Coordinator",
      company: "Green Group",
      category: "Commerce",
      type: "Full time",
      salary: "$44000-$46000",
      location: "New-York, USA",
      logoColor: "bg-teal-100 text-teal-600"
    },
    {
      id: 2,
      time: "24 min ago",
      title: "District Intranet Director",
      company: "VonRueden - Weber Co",
      category: "Commerce",
      type: "Full time",
      salary: "$42000-$48000",
      location: "New-York, USA",
      logoColor: "bg-orange-100 text-orange-600"
    },
    {
      id: 3,
      time: "25 min ago",
      title: "Corporate Tactics Facilitator",
      company: "Cormier, Turner and Flatley Inc",
      category: "Commerce",
      type: "Full time",
      salary: "$38000-$40000",
      location: "New-York, USA",
      logoColor: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-neutral-800 font-sans flex flex-col">
      
      {/* 1. DARK PAGE HEADER */}
      <div className="w-full bg-[#0a0a0a] text-white py-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight">Job Details</h1>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: JOB INFORMATION */}
        <div className="lg:col-span-2">
          
          {/* Job Header Info */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[#309689] bg-[#eaf4f3] px-3 py-1 rounded-md text-xs font-semibold">
                10 min ago
              </span>
              <button className="text-neutral-400 hover:text-[#309689] transition-colors">
                <FaRegBookmark className="text-xl" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              {/* Placeholder for Logo */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-400 via-red-400 to-yellow-400 p-[2px]">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-xl">
                  {/* Insert actual logo image here later */}
                  G
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-1">Corporate Solutions Executive</h2>
                <p className="text-neutral-500">Leffler and Sons</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-neutral-500 font-medium pb-8 border-b border-neutral-200">
              <div className="flex items-center gap-2"><FaBriefcase className="text-[#309689]" /> Commerce</div>
              <div className="flex items-center gap-2"><FaRegClock className="text-[#309689]" /> Full time</div>
              <div className="flex items-center gap-2"><FaMoneyBillWave className="text-[#309689]" /> $40000-$42000</div>
              <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#309689]" /> New-York, USA</div>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Job Description</h3>
            <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
              Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in lacus lectus. Nisl enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm">
              Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisl vitae vitae cras ornare. Cras facilsis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisl dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta egest blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6">Key Responsibilities</h3>
            <ul className="flex flex-col gap-4">
              {[
                "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisl vitae vitae cras ornare. Cras facilsis dignissim augu",
                "Cras facilsis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in",
                "Ornare varius faucibus nisl vitae vitae cras ornare. Cras facilsis dignissim augue lorem amet adipiscing cursus fames",
                "Tortor amet porta proin in. Orci imperdiet nisl dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
                "Tortor amet porta proin in. Orci imperdiet nisl dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
                "Tortor amet porta proin in. Orci imperdiet nisl dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-600 leading-relaxed">
                  <FaCheck className="text-[#309689] mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6">Professional Skills</h3>
            <ul className="flex flex-col gap-4">
              {[
                "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisl vitae vitae cras ornare.",
                "Ornare varius faucibus nisl vitae vitae cras ornare",
                "Tortor amet porta proin in. Orci imperdiet nisl dignissim pellentesque morbi vitae",
                "Tortor amet porta proin in. Orci imperdiet nisl dignissim pellentesque morbi vitae",
                "Tortor amet porta proin in. Orci imperdiet nisl dignissim pellentesque morbi vitae"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-600 leading-relaxed">
                  <FaCheck className="text-[#309689] mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-3">
              {['Full time', 'Commerce', 'New - York', 'Corporate', 'Location'].map((tag, idx) => (
                <span key={idx} className="bg-[#eaf4f3] text-[#309689] px-4 py-2 rounded-lg text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Job */}
          <div className="flex items-center gap-4 mb-16 pb-12 border-b border-neutral-200">
            <h3 className="text-lg font-bold">Share Job:</h3>
            <div className="flex gap-3 text-xl">
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-[#309689] hover:text-white hover:border-[#309689] transition-all"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-[#309689] hover:text-white hover:border-[#309689] transition-all"><FaXTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-[#309689] hover:text-white hover:border-[#309689] transition-all"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Related Jobs */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Related Jobs</h2>
            <p className="text-neutral-500 text-sm mb-8">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
            
            <div className="flex flex-col gap-6">
              {relatedJobs.map((job) => (
                <div key={job.id} className="border border-neutral-200 rounded-2xl p-6 hover:shadow-md transition-shadow bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[#309689] bg-[#eaf4f3] px-3 py-1 rounded text-xs font-semibold">
                      {job.time}
                    </span>
                    <button className="text-neutral-400 hover:text-[#309689]">
                      <FaRegBookmark />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center text-xl shadow-sm">
                       {/* Placeholder icon representing company logos */}
                       <div className="w-6 h-6 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-sm transform rotate-45"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-neutral-900">{job.title}</h3>
                      <p className="text-neutral-500 text-sm">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 pt-5">
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-500 font-medium">
                      <div className="flex items-center gap-1"><FaBriefcase className="text-[#309689]" /> {job.category}</div>
                      <div className="flex items-center gap-1"><FaRegClock className="text-[#309689]" /> {job.type}</div>
                      <div className="flex items-center gap-1"><FaMoneyBillWave className="text-[#309689]" /> {job.salary}</div>
                      <div className="flex items-center gap-1"><FaMapMarkerAlt className="text-[#309689]" /> {job.location}</div>
                    </div>
                    <button className="bg-[#309689] hover:bg-teal-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                      Job Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="lg:col-span-1 space-y-8">
          
          <button className="w-full bg-[#309689] hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-teal-900/20 text-lg">
            Apply Job
          </button>

          {/* Job Overview Card */}
          <div className="bg-[#f4f8f7] rounded-3xl p-8 border border-neutral-100">
            <h3 className="text-xl font-bold mb-6">Job Overview</h3>
            <div className="flex flex-col gap-6 mb-8">
              
              <div className="flex items-start gap-4">
                <FaUserAlt className="text-[#309689] text-xl mt-1" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">Job Title</p>
                  <p className="text-sm text-neutral-500">Corporate Solutions Executive</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaRegClock className="text-[#309689] text-xl mt-1" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">Job Type</p>
                  <p className="text-sm text-neutral-500">Full Time</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaBriefcase className="text-[#309689] text-xl mt-1" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">Category</p>
                  <p className="text-sm text-neutral-500">Commerce</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                {/* using user icon as a placeholder for 'experience' badge */}
                <FaCheck className="text-[#309689] text-xl mt-1" /> 
                <div>
                  <p className="text-sm font-bold text-neutral-900">Experience</p>
                  <p className="text-sm text-neutral-500">5 Years</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-[#309689] text-xl mt-1" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">Degree</p>
                  <p className="text-sm text-neutral-500">Master</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMoneyBillWave className="text-[#309689] text-xl mt-1" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">Offered Salary</p>
                  <p className="text-sm text-neutral-500">$40000-$42000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#309689] text-xl mt-1" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">Location</p>
                  <p className="text-sm text-neutral-500">New-York, USA</p>
                </div>
              </div>

            </div>

            {/* Sidebar Map Placeholder */}
            <div className="w-full h-40 bg-neutral-200 rounded-2xl overflow-hidden relative border border-neutral-200">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Mini Map"
                  className="absolute inset-0 grayscale contrast-125 opacity-70"
                ></iframe>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center drop-shadow-md">
                   <div className="bg-[#309689] text-white p-2 rounded-full shadow-lg">
                      <FaMapMarkerAlt className="text-sm" />
                   </div>
                   <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#309689] -mt-[2px]"></div>
                </div>
            </div>
          </div>

          {/* Send Us Message Card */}
          <div className="bg-[#f4f8f7] rounded-3xl p-8 border border-neutral-100">
            <h3 className="text-xl font-bold mb-6">Send Us Message</h3>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <FaRegUser />
                </div>
                <input type="text" placeholder="Full name" className="w-full bg-white border border-neutral-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#309689]" />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <FaRegEnvelope />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-neutral-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#309689]" />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <FaPhoneAlt />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-neutral-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#309689]" />
              </div>
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#309689] resize-none"
              ></textarea>
              <button type="submit" className="w-max bg-[#309689] hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm mt-2">
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default JobDetails;