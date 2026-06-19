import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you use react-router-dom for navigation

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
  };

  return (
    <footer className="bg-black text-[#A3A3A3] pt-16 pb-8 px-6 sm:px-10 md:px-16 lg:px-28 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          
          {/* Brand/Logo Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white">
              {/* Briefcase SVG Icon */}
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-.621-.504-1.125-1.125-1.125H4.875c-.621 0-1.125.504-1.125 1.125m16.5 0a9 9 0 00-16.5 0M12 3v3h3V3h-3zm-1.5 7.5h3" />
              </svg>
              <span className="text-xl font-bold tracking-tight">Job Portal</span>
            </div>
            <p className="text-sm font-medium leading-relaxed max-w-xs pr-2 text-neutral-300">
              Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
            </p>
          </div>

  
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-base tracking-wide">Company</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/candidates" className="hover:text-white transition-colors">For Candidates</Link></li>
              <li><Link to="/employers" className="hover:text-white transition-colors">For Employers</Link></li>
            </ul>
          </div>


          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-base tracking-wide">Job Categories</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/jobs/telecommunications" className="hover:text-white transition-colors">Telecommunications</Link></li>
              <li><Link to="/jobs/hotels-tourism" className="hover:text-white transition-colors">Hotels & Tourism</Link></li>
              <li><Link to="/jobs/construction" className="hover:text-white transition-colors">Construction</Link></li>
              <li><Link to="/jobs/education" className="hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/jobs/financial-services" className="hover:text-white transition-colors">Financial Services</Link></li>
            </ul>
          </div>


          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-base tracking-wide">Newsletter</h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Eu nunc pretium vitae platea. Non netus elementum vulputate
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 w-full max-w-sm">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#309689] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#309689] text-white text-sm font-semibold py-3 px-4 rounded-xl hover:bg-teal-700 active:scale-[0.99] transition-all text-center"
              >
                Subscribe now
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between items-center text-xs text-neutral-500">
          <div>
            © Copyright Job Portal 2024. Designed by Job Portal
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="underline hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;