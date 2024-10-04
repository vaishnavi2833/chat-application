import React, { useState } from "react";
import { Link } from "react-router-dom";
import userLogin from "../../hooks/userLogin";

const Login = () => {
  const { loading, login } = userLogin();  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen">
      <div className="w-full px-8 py-16 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <section className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-15 my-4 mx-5 md:mx-0 md:my-0">
          <div>
            <div className="text-center md:text-left py-6">
              <h1 className="text-white font-bold text-3xl md:text-4xl">
                Login <span className="text-purple-500">ChatApp</span>
              </h1>
            </div>
            <form onSubmit={handleSubmit}>  
              <input
                className="text-sm w-full px-6 py-3 border border-solid border-gray-300 rounded"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="text-sm w-full px-6 py-3 border border-solid border-gray-300 rounded mt-6"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="mt-6 flex justify-between font-semibold text-sm">
                <a
                  className="text-gray-400 hover:text-blue-700 hover:underline hover:underline-offset-4"
                  href="#"  
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center md:text-left mt-4">
                <button
                  className="bg-purple-600 hover:bg-blue-700 px-6 py-3 text-white uppercase rounded text-sm tracking-wider w-full"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <span className='loading loading-spinner' /> : "Login"}
                </button>
              </div>
            </form> 
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left text-white">
              Don&apos;t have an account?{" "}
              <Link
                className="text-purple-600 hover:underline hover:underline-offset-4"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
