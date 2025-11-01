import React from 'react';

const Registar = () => {
    return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
  <div className="card w-full max-w-sm bg-white shadow-xl rounded-2xl border border-gray-100">
    <div className="card-body">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Create an account
      </h2>

      <fieldset className="fieldset space-y-3">
        {/* Name */}
        <div>
          <label className="label text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your full name"
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="label text-sm font-medium text-gray-600">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Paste your profile photo URL"
          />
        </div>

        {/* Email */}
        <div>
          <label className="label text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="label text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
        </div>

        {/* Register Button */}
        <button className="btn btn-neutral w-full mt-4">Register</button>
      </fieldset>

     

      {/* Google Sign Up Button
      <button
        onClick={() => console.log("Google Sign Up Clicked")}
        className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 flex items-center justify-center gap-2"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google logo"
          className="w-5 h-5"
        />
        Continue with Google
      </button> */}

      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <a className="link text-blue-600 font-medium hover:underline" href="/login">
          Login
        </a>
      </p>
    </div>
  </div>
</div>

    );
};

export default Registar;