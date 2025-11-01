import React from 'react';
import { Link } from 'react-router';

const Singin = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
  <div className="card w-full max-w-sm bg-white shadow-xl rounded-2xl border border-gray-100">
    <div className="card-body">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Login to your account
      </h2>

      <fieldset className="fieldset space-y-3">
        <div>
          <label className="label text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="label text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-between items-center text-sm mt-2">
          <a className="link link-hover text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button className="btn btn-neutral w-full mt-5">Login</button>
      </fieldset>

      {/* Divider */}
      <div className="divider text-gray-400">OR</div>

      {/* Google Sign In Button */}
      <button
        onClick={() => console.log("Google Sign In Clicked")}
        className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 flex items-center justify-center gap-2"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google logo"
          className="w-5 h-5"
        />
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Don't have an account?{" "}
        <a to="/registar" className="link text-blue-600 font-medium hover:underline" href="/register">
          <Link to="/registar">  Register</Link>
        </a>
      </p>
    </div>
  </div>
</div>

    );
};

export default Singin;