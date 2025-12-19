import React from "react";
// import lgo from "268390fdb4f6f4f1941e2f1e4f3e8b7c9b5d6e2c1.png";
// import img from "3acfc0a3ab8eee94a00c19463a8ec879b55a61c5.png"; 

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6E9] px-4">
      <div className="max-w-5xl w-full bg-[#FFF8EC] rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <img src="https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="aa" className="3acfc0a3ab8eee94a00c19463a8ec879b55a61c5.png" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/80 p-4 rounded-md text-sm">
            Every jewel at G-Crown is a symbol of elegance, precision, and heritage.Crafted by Graphura, our designs are made to be worn like a crown—forever..
          </div>
        </div>

        {/* FORM */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-3xl font-serif text-[#1E3D34] mb-2">
            Sign In
          </h2>
          <p className="text-sm text-#1C3A2C mb-6">
            Please fill your details to access your account
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-md mb-4 focus:ring-1 focus:ring-[#1E3D34] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-md mb-3 focus:ring-1 focus:ring-[#1E3D34] outline-none"
          />

          <div className="flex justify-between text-sm mb-4">
            <label className="flex gap-2 items-center">
              <input type="checkbox" className="accent-[#1C3A2C]" />
              Remember me
            </label>
            <a className="text-[#1C3A2C] hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          <button className="bg-[#FFF8E8] text-white py-3 rounded-md hover:bg-[#1C3A2C] transition">
            Sign In
          </button>

          <div className="text-center text-gray-400 #1C3A2C my-4 text-sm">
            or sign in with
          </div>

          <button className="border py-3 rounded-md flex justify-center gap-2 hover:bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
              className="w-5"
            />
            Google
          </button>

          <p className="text-sm text-[#1C3A2C] text-center mt-5">
            Don't have an account?
            <a className="text-[#1C3A2C] ml-1 font-medium cursor-pointer">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn