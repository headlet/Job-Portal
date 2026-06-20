import React from 'react';
import { FaBriefcase, FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <FaBriefcase className="text-4xl text-[#309689]" />
        </div>
        <h2 className="text-center text-3xl font-bold text-neutral-900">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-3xl sm:px-10 border border-neutral-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Email address</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-400">
                  <FaEnvelope />
                </div>
                <input type="email" className="appearance-none block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#309689] focus:border-[#309689]" placeholder="name@company.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700">Password</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-400">
                  <FaLock />
                </div>
                <input type="password" className="appearance-none block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#309689] focus:border-[#309689]" placeholder="••••••••" />
              </div>
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-[#309689] hover:bg-teal-700 transition-colors">
              Sign in
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-neutral-500">Don't have an account? <a href="/signup" className="font-semibold text-[#309689] hover:underline">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;