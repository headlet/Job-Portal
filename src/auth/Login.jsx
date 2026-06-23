import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1000px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden grid md:grid-cols-2">
        <div className="hidden md:flex flex-col justify-between p-12 bg-black text-white relative">
          <div className="relative z-10 flex flex-col justify-center h-full">
            <h1 className="text-4xl font-bold mb-6">Welcome Page</h1>
            <p className="text-blue-100 text-lg">Sign In To Your Account</p>
          </div>

          <div className="relative z-10 text-sm opacity-60">
            WWW.JobPortal.com
          </div>

          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-70"></div>
        </div>

        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Hello !</h2>
            <p className="text-[#309689] font-medium text-lg">Good Morning</p>
            <h3 className="mt-8 text-xl font-semibold">Login Your Account</h3>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-all bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-all bg-transparent"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600"
                />{" "}
                Remember
              </label>
              <button
                type="button"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#309689] text-white py-3.5 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            >
              SUBMIT
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <span className="text-gray-500 text-sm">
              Don't have an account?{" "}
            </span>
            <Link
              to="/Signup"
              className="font-bold text-[#309689] hover:underline transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
