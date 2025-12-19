import React from "react";
// import img from "62adb076bf8f81508113b9205e86a804def16831.png";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-softCream px-4">
      <div className="max-w-6xl w-full bg-creamBg rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1765447041709-9f1efbc81606?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8
            "
            alt="Jewellery Model"
            className="w-full h-full object-cover"
          />

          {/* TEXT OVER IMAGE */}
          <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-sm p-5 rounded-md text-white font-serifLuxury text-sm leading-relaxed">
            Where master craftsmanship meets contemporary luxury in every fine
            detail. G-Crown by Graphura creates jewellery that reflects power,
            grace, and individuality.
          </div>

          {/* IMAGE BORDER */}
          <div className="absolute inset-4 border border-white/60 rounded-md"></div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-12 font-serifLuxury">
          <h2 className="text-3xl text-primaryGreen #1C3A2C mb-2">
            Sign Up
          </h2>

          <p className="text-sm text-textGold #CBA135 mb-6">
            Fill your information below or register with your social account
          </p>

          {/* NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-primaryGreen #1C3A2C ">
                First Name*
              </label>
              <input
                placeholder="Bessie"
                className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring-primaryGreen #d9d9d9dd"
              />
            </div>

            <div>
              <label className="text-sm text-#1C3A2C primaryGreen">
                Last Name*
              </label>
              <input
                placeholder="Cooper"
                className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring- #d9d9d9dd"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm text-#1C3A2C ">
              Email*
            </label>
            <input
              placeholder="example@gmail.com"
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring- #d9d9d9dd"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="text-sm text-#1C3A2C primaryGreen">
              Password*
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring- #d9d9d9dd"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-4">
            <label className="text-sm text-#1C3A2C">
              Confirm New Password*
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring- #d9d9d9dd"
            />
          </div>

          {/* REMEMBER */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <input type="checkbox" className="accent-primaryGreen" />
            Remember me
          </div>

          {/* SIGN UP BUTTON */}
          <button className="w-full bg-primaryGreen text-white py-3 rounded-md hover:bg-[#163128] transition">
            Sign Up
          </button>

          {/* OR */}
          <div className="flex items-center gap-3 my-4 text-sm text-gray-400">
            <div className="flex-1 h-px bg-gray-300"></div>
            or Sign Up with
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* GOOGLE */}
          <button className="w-full border py-3 rounded-md flex justify-center gap-2 hover:bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1765447041709-9f1efbc81606?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              className="w-5"
            />
            Sign Up With Google
          </button>

          {/* SIGN IN */}
          <p className="text-sm text-center mt-5">
            Already have an account?
            <span className="text-#1C3A2C ml-1 cursor-pointer font-medium">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;