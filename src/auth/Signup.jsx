import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "seeker",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = auth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          fullName: formData.fullName,
          role: formData.role
        })
      }
      window.location.href = '/login';
     toast.success('User Registered Successfully!!', {
      position: "top-right"
     });
    } catch (error) {
      console.log("There is issue in something" + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1000px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden grid md:grid-cols-2">
        {/* ============= LEFT SIDE: BRAND VISUAL ============= */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-black text-white relative">
          <div className="relative z-10 flex flex-col justify-center h-full">
            <h1 className="text-4xl font-bold mb-6">Join Us</h1>
            <p className="text-blue-100 text-lg">
              Create your professional account and discover thousands of job
              opportunities.
            </p>
          </div>

          <div className="relative z-10 text-sm opacity-60">
            WWW.JobPortal.COM
          </div>

          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-70"></div>
        </div>

        {/* ============= RIGHT SIDE: SIGNUP FORM ============= */}
        <div className="p-8 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome !</h2>
            <p className="text-[#309689] font-medium text-lg">
              Get started now
            </p>
            <h3 className="mt-6 text-xl font-semibold">Create Account</h3>
          </div>

          <form className="space-y-6" onSubmit={handleSignUp}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 block">
                Join as a
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center justify-center gap-2 p-3.5 border rounded-xl cursor-pointer transition-all duration-200 select-none ${
                    formData.role === "seeker"
                      ? "border-[#309689] bg-[#309689]/5 text-[#309689] shadow-sm font-bold"
                      : "border-gray-200 text-gray-500 hover:border-gray-300 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="userRole"
                    value="seeker"
                    checked={formData.role === "seeker"}
                    onChange={() => {
                      setFormData({
                        ...formData,
                        role: "seeker",
                      });
                    }}
                    className="sr-only"
                  />
                  <FaUser className="text-sm" />
                  <span className="text-sm">Search for job</span>
                </label>

                <label
                  className={`flex items-center justify-center gap-2 p-3.5 border rounded-xl cursor-pointer transition-all duration-200 select-none ${
                    formData.role === "employer"
                      ? "border-[#309689] bg-[#309689]/5 text-[#309689] shadow-sm font-bold"
                      : "border-gray-200 text-gray-500 hover:border-gray-300 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="userRole"
                    value="employer"
                    checked={formData.role === "employer"}
                    onChange={() => {
                      setFormData({
                        ...formData,
                        role: "employer",
                      });
                    }}
                    className="sr-only"
                  />
                  <FaBriefcase className="text-sm" />
                  <span className="text-sm">Find a talent</span>
                </label>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Doe"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
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
                  placeholder="••••••••"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-400">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pb-3 border-b-2 border-gray-200 text-neutral-800 placeholder-gray-400 focus:outline-none focus:border-[#309689] transition-all bg-transparent"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600 mt-6">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#309689] focus:ring-[#309689] mt-1"
              />
              <p>
                I agree to the{" "}
                <a href="#" className="text-[#309689] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#309689] hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#309689] text-white py-3.5 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#309689]/20"
            >
              SIGN UP
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <span className="text-gray-500 text-sm">
              Already have an account?{" "}
            </span>
            <Link
              to="/login"
              className="font-bold text-[#309689] hover:underline transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
