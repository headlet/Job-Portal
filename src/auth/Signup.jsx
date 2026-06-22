import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8">
      {/* Container matching Login design */}
      <div className="w-full max-w-[1000px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden grid md:grid-cols-2">
        
        {/* ============= LEFT SIDE: BRAND VISUAL ============= */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-black text-white relative">
          
          <div className="relative z-10 flex flex-col justify-center h-full">
            <h1 className="text-4xl font-bold mb-6">Join Us</h1>
            <p className="text-blue-100 text-lg">Create your professional account and discover thousands of job opportunities.</p>
          </div>
          
          <div className="relative z-10 text-sm opacity-60">
            WWW.JobPortal.COM
          </div>
          
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-70"></div>
        </div>

        {/* ============= RIGHT SIDE: SIGNUP FORM ============= */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome !</h2>
            <p className="text-[#309689] font-medium text-lg">Get started now</p>
            <h3 className="mt-8 text-xl font-semibold">Create Account</h3>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Underlined Full Name Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-all bg-transparent"
                />
              </div>
            </div>

            {/* Underlined Email Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-all bg-transparent"
                />
              </div>
            </div>

            {/* Underlined Password Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-all bg-transparent"
                />
              </div>
            </div>

            {/* Underlined Confirm Password Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-all bg-transparent"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-600 mt-6">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 mt-1" />
              <p>I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
            </div>

            {/* Purple Gradient Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#309689] text-white py-3.5 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            >
              SIGN UP
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <span className="text-gray-500 text-sm">Already have an account? </span>
            <Link to="/login" className="font-bold text-blue-600 hover:underline transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;