import { useState } from "react";
import {
  FaSearch,
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaRegClock,
  FaRegBookmark,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FaUsers, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home({ jobs }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log({ search, location, category });
  };

  const categories = [
    { name: "Agriculture", jobs: "1.2k+ jobs", icon: <CornIcon /> },
    { name: "Metal Production", jobs: "800+ jobs", icon: <LineIcon /> },
    { name: "Commerce", jobs: "2.4k+ jobs", icon: <BagIcon /> },
    { name: "Construction", jobs: "1.5k+ jobs", icon: <CraneIcon /> },
    { name: "Hotels & Tourism", jobs: "950+ jobs", icon: <UmbrellaIcon /> },
    { name: "Education", jobs: "1.1k+ jobs", icon: <GraduationIcon /> },
    { name: "Financial Services", jobs: "3.2k+ jobs", icon: <DollarIcon /> },
    { name: "Transport", jobs: "1.8k+ jobs", icon: <UserIcon /> },
  ];

  const testimonials = [
    {
      name: "Marcus Leon",
      role: "UI/UX Designer",
      quote:
        "An absolute game-changer for finding jobs! The platform is smooth, transparent, and allowed me to land a role within two weeks of creating my professional candidate portfolio.",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Project Manager",
      quote:
        "Everything is remarkably simple. Sorting through curated geographic roles helped me filter exactly what I needed without the standard corporate spam found elsewhere.",
      rating: 5,
    },
    {
      name: "Alex Downey",
      role: "DevOps Engineer",
      quote:
        "Awesome tools, thank you! The personalized matching system is phenomenal. I highly recommend this portal to any developers seeking high-growth tech positions.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center  text-white bg-[#f4f7f6]">
      {/* =========================================================
          1. HERO MAIN WRAPPER CONTAINER
         ========================================================= */}
      <div className="w-full bg-black px-6 py-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-800/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto z-10 flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Find Your Dream Job Today!
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-medium max-w-2xl mb-12">
            Connecting Talent with Opportunity. Your Gateway to Career Success
          </p>

          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-4xl bg-white text-black rounded-2xl md:rounded-full p-2 md:pl-6 flex flex-col md:flex-row items-center gap-3 md:gap-0 shadow-2xl mb-16 border border-neutral-800/10"
          >
            <div className="w-full md:flex-1 py-2">
              <input
                type="text"
                placeholder="Job Title or Company"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 text-sm font-medium text-neutral-700 bg-transparent placeholder-neutral-400 outline-none border-none"
              />
            </div>

            <div className="w-full md:w-48 py-2 border-t md:border-t-0 md:border-l border-neutral-200">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 text-sm font-medium text-neutral-500 bg-transparent outline-none cursor-pointer border-none"
              >
                <option value="" disabled hidden>
                  Select Location
                </option>
                <option value="ktm">Kathmandu</option>
                <option value="lkt">Lalitpur</option>
                <option value="bkt">Bhaktapur</option>
              </select>
            </div>

            <div className="w-full md:w-52 py-2 border-t md:border-t-0 md:border-l border-neutral-200 md:mr-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 text-sm font-medium text-neutral-500 bg-transparent outline-none cursor-pointer border-none"
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
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

            <button
              type="submit"
              className="w-full md:w-auto bg-[#309689] hover:bg-teal-700 text-white font-medium text-sm px-6 py-3.5 rounded-xl md:rounded-full flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <FaSearch className="text-xs" />
              <span>Search Job</span>
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-14 md:gap-20 w-full">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#309689]/20 border border-[#309689]/40 flex items-center justify-center text-[#309689] text-xl">
                <FaBriefcase />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white leading-none">
                  25,850
                </h4>
                <p className="text-xs text-neutral-400 mt-1.5">Jobs</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#309689]/20 border border-[#309689]/40 flex items-center justify-center text-[#309689] text-xl">
                <FaUsers />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white leading-none">
                  10,250
                </h4>
                <p className="text-xs text-neutral-400 mt-1.5">Candidates</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#309689]/20 border border-[#309689]/40 flex items-center justify-center text-[#309689] text-xl">
                <FaBuilding />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white leading-none">
                  18,400
                </h4>
                <p className="text-xs text-neutral-400 mt-1.5">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. RECENT JOBS AVAILABLE SECTION
         ========================================================= */}
      <div className="w-full py-20 px-2 sm:px-3 lg:px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Recent Jobs Available
            </h2>
            <p className="text-sm text-neutral-500">
              Discover current open roles matched perfectly to your industry
              expertise.
            </p>
          </div>
          <Link to='/jobs' className="text-[#309689] font-medium text-sm flex items-center gap-1 hover:underline">
            View all <FaChevronRight className="text-xs" />
          </Link>
        </div>

        {/* Jobs Feed Stack */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-neutral-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative group"
              >
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
                        <FaRegClock className="text-[#309689]" /> {job.type}
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

      {/* =========================================================
          3. BROWSE BY CATEGORY SECTION
         ========================================================= */}
      <div className="w-full bg-[#080d0c] py-20 px-6 sm:px-10 lg:px-16 border-y border-neutral-900/60">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Browse by Category
          </h2>
          <p className="text-sm text-neutral-500 max-w-xl mx-auto">
            Explore targeted fields to narrow down the ideal employment options
            matching your skill profile.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#0e1211] border border-neutral-900 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#309689]/40 hover:bg-[#0c1614] transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#182421] border border-[#233531] flex items-center justify-center text-[#309689] text-2xl mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-1">
                {cat.name}
              </h3>
              <p className="text-xs text-neutral-500 mb-4">{cat.jobs}</p>
              <span className="text-xs font-semibold text-[#309689] bg-[#14221f] px-4 py-1.5 rounded-lg group-hover:bg-[#309689] group-hover:text-white transition-colors">
                Explore
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          4. BRAND MISSION STRIP
         ========================================================= */}
      <div className="w-full  py-20 px-2 sm:px-3 lg:px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Block Placeholder Styling Frame */}
          <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square bg-gradient-to-br from-neutral-800 to-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-neutral-900">
            <div className="absolute inset-0 bg-neutral-900/40 mix-blend-overlay" />
            <div className="absolute bottom-6 left-6 right-6 bg-[#0e1012]/90 backdrop-blur-md border border-neutral-800/60 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 font-medium">
                  Top Verified Employer
                </p>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  Global Enterprise Solutions
                </h4>
              </div>
              <span className="text-[10px] bg-[#309689]/20 text-[#309689] font-bold px-2 py-1 rounded border border-[#309689]/30">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4 leading-tight">
              Good Life Begins With <br />A Good Company
            </h2>
            <p className="text-sm text-neutral-400 font-medium leading-relaxed mb-8 max-w-xl">
              We coordinate ecosystem partnerships to bridge premium, vetted
              jobs directly onto verified profiles. Secure your long term
              development within reliable operational workflows.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <button className="bg-[#309689] hover:bg-teal-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all">
                Search job
              </button>
              <button className="text-white hover:text-[#309689] font-semibold text-sm flex items-center gap-2 transition-colors">
                Learn more <FaArrowRightLong />
              </button>
            </div>

            {/* Micro Stats Counter Footer inside Block */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-neutral-900 pt-8 w-full">
              <div>
                <h4 className="text-2xl font-bold text-[#309689]">12k+</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Clients Worldwide
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#309689]">20k+</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Active Vacancies
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#309689]">10k+</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Companies Partnered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          5. CALL TO ACTION SECTION
         ========================================================= */}
      <div className="w-full  px-2 sm:px-3 lg:px-4 pb-12 max-w-7xl mx-auto">
        <div className="w-full bg-gradient-to-r from-[#111e1c] via-[#0b1715] to-neutral-950 border border-teal-950/40 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#309689]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Create A Better Future For Yourself
            </h2>
            <p className="text-sm text-neutral-400 font-medium leading-relaxed">
              Upload your updated resume structure today. Our intelligent
              routing system matches technical credentials immediately into
              pipeline workflows.
            </p>
          </div>

          <button className="bg-[#309689] hover:bg-teal-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl whitespace-nowrap z-10 shadow-lg shadow-[#309689]/10 transition-all self-start md:self-center">
            Join Now
          </button>
        </div>
      </div>

      {/* =========================================================
          6. TESTIMONIALS FROM OUR CUSTOMERS
         ========================================================= */}
      <div className="w-full bg-[#040607] py-20 px-6 sm:px-10 lg:px-16 border-t border-neutral-900/60">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Testimonials from Our Customers
          </h2>
          <p className="text-sm text-neutral-500 max-w-xl mx-auto">
            Read how verified engineers and job seekers leveraged our
            infrastructure to accelerate careers.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0e1012] border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between relative shadow-sm"
            >
              <FaQuoteLeft className="absolute top-6 right-6 text-2xl text-teal-950/40" />
              <div>
                <div className="flex items-center gap-1 text-orange-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="text-xs" />
                  ))}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-900">
                <div className="w-10 h-10 rounded-full bg-[#16191c] border border-neutral-800 flex items-center justify-center font-bold text-sm text-[#309689]">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">
                    {t.name}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          7. NEWS AND BLOG SECTION
         ========================================================= */}
      <div className="w-full py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              News and Blog
            </h2>
            <p className="text-sm text-neutral-500">
              Stay up to date with modern recruitment frameworks and
              optimization tricks.
            </p>
          </div>
          <button className="text-[#309689] font-medium text-sm flex items-center gap-1 hover:underline">
            More <FaChevronRight className="text-xs" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Post 1 */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[16/10] bg-gradient-to-br from-neutral-800 to-neutral-950 rounded-2xl overflow-hidden mb-4 border border-neutral-900 relative">
              <span className="absolute top-4 left-4 bg-[#309689] text-white text-[10px] font-bold px-2 py-1 rounded">
                NEWS
              </span>
            </div>
            <p className="text-xs text-neutral-500 mb-2 font-medium">
              11 March 2024
            </p>
            <h3 className="text-lg font-bold text-black group-hover:text-[#309689] transition-colors leading-snug">
              Maximizing Workplace Content Innovations: Tactical Approaches for
              Boosting Employee Engagement in 2024
            </h3>
          </div>

          {/* Blog Post 2 */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[16/10] bg-gradient-to-br from-neutral-800 to-neutral-950 rounded-2xl overflow-hidden mb-4 border border-neutral-900 relative">
              <span className="absolute top-4 left-4 bg-[#309689] text-white text-[10px] font-bold px-2 py-1 rounded">
                BLOG
              </span>
            </div>
            <p className="text-xs text-neutral-500 mb-2 font-medium">
              10 March 2024
            </p>
            <h3 className="text-lg font-bold text-black group-hover:text-[#309689] transition-colors leading-snug">
              How to Avoid the Top Ten Most Common Mistakes Candidates Make When
              Submitting Senior Developer Applications
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

// ============================================================================
// INLINE COMPONENT CLEAN SVGS (Resolves duplicate import errors completely)
// ============================================================================
function CornIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5 12h14" />
    </svg>
  );
}
function LineIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}
function CraneIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21H3m14-4H7m10-4H7m10-4H7"
      />
    </svg>
  );
}
function UmbrellaIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3a9 9 0 019 9H3a9 9 0 019-9zm0 0v18m0 0a3 3 0 01-3-3"
      />
    </svg>
  );
}
function GraduationIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
      />
    </svg>
  );
}
function DollarIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
