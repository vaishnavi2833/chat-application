import React from "react";
import Gender from "./Gender";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-h-screen"> 
      <div className="w-full max-w-md px-8 py-16 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"> 
        <section className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-15 my-4 mx-5 md:mx-0 md:my-0"> 
          <div>
            <div className="text-center md:text-left py-6"> 
              <h1 className="text-white font-bold text-3xl md:text-4xl"> 
                SignUp <span className="text-purple-500">ChatApp</span>
              </h1>
            </div>
            <input
              className="text-sm w-full px-6 py-3 border border-solid border-gray-300 rounded" 
              type="text"
              placeholder="Full Name"
            />
            <input
              className="text-sm w-full px-6 py-3 border border-solid border-gray-300 rounded mt-6" 
              type="text"
              placeholder="Username"
            />
            <input
              className="text-sm w-full px-6 py-3 border border-solid border-gray-300 rounded mt-6" 
              type="password"
              placeholder="Password"
            />
            <input
              className="text-sm w-full px-6 py-3 border border-solid border-gray-300 rounded mt-6" 
              type="password"
              placeholder="Confirm Password"
            />
            <Gender/>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left text-white"> 
              Already have an account?{" "}
              <a
                className="text-purple-600 hover:underline hover:underline-offset-4"
                href="#"
              >
                Login
              </a>
            </div>
            <div className="text-center md:text-left mt-6"> 
              <button
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white uppercase rounded text-sm tracking-wider w-full" 
                type="submit"
              >
                Sign Up
              </button>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
