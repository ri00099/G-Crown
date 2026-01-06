import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import modelImage from "../../assets/authPages/signUpModel.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <section className="flex h-svh w-full overflow-hidden bg-[#FBF6EA] font-serif selection:bg-[#1E3A2F]/10">
      
      {/* LEFT IMAGE SECTION */}
      <div className="relative hidden w-[45%] lg:block">
        <img
          src={modelImage}
          alt="G-Crown Jewellery Model"
          className="h-full w-full object-cover"
        />
        {/* Luxury Frame Overlay */}
        <div className="absolute inset-8 border border-white/40 pointer-events-none" />
        
        {/* Glass Box Container */}
        <div className="absolute bottom-12 left-12 right-12">
          <div className="rounded-xl border border-white/30 bg-white/10 p-8 backdrop-blur-md">
            <p className="text-[18px] leading-[1.6] tracking-wide text-white font-light">
              Where master craftsmanship meets contemporary luxury in every fine
              detail. <span className="font-semibold italic">G-Crown by Graphura</span> creates
              jewellery that reflects power, grace, and individuality.
            </p>
          </div>
          {/* Indicators positioned exactly like the screenshot */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-1.5 w-40 rounded-full bg-[#C9A23F]" />
            <span className="h-1.5 w-40 rounded-full bg-white/60 transition-colors hover:bg-white/80 cursor-pointer" />
            <span className="h-1.5 w-40 rounded-full bg-white/60 transition-colors hover:bg-white/80 cursor-pointer" />
            <span className="h-1.5 w-40 rounded-full bg-white/60 transition-colors hover:bg-white/80 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="flex w-full flex-col overflow-y-auto bg-[#FBF6EA] px-8 lg:w-[55%] lg:px-16 xl:px-24">
        {/* 'my-auto' handles the centering bug perfectly */}
        <div className="mx-auto my-auto w-full max-w-[460px] py-12">
          
          <header className="mb-10">
            <h1 className="text-[48px] font-normal leading-tight text-[#1E3A2F] tracking-tight">
              Sign Up
            </h1>
            <p className="mt-2 text-[15px] font-medium text-[#B08E42] tracking-[0.01em]">
              Fill your information below or register with your social account
            </p>
          </header>

          <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[13px] font-bold text-[#1E3A2F] uppercase tracking-[0.15em]">
                  First Name*
                </label>
                <input
                  type="text"
                  placeholder="Bessie"
                  className="w-full bg-white border border-gray-100 px-4 py-3.5 text-[15px] text-[#1E3A2F] outline-none transition-all focus:border-[#CBA135] focus:ring-1 focus:ring-[#CBA135]/20 placeholder:text-gray-350"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[13px] font-bold text-[#1E3A2F] uppercase tracking-[0.15em]">
                  Last Name*
                </label>
                <input
                  type="text"
                  placeholder="Cooper"
                  className="w-full bg-white border border-gray-100 px-4 py-3.5 text-[15px] text-[#1E3A2F] outline-none transition-all focus:border-[#CBA135] focus:ring-1 focus:ring-[#CBA135]/20 placeholder:text-gray-350"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-[#1E3A2F] uppercase tracking-[0.15em]">
                Email*
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-white border border-gray-100 px-4 py-3.5 text-[15px] text-[#1E3A2F] outline-none transition-all focus:border-[#CBA135] focus:ring-1 focus:ring-[#CBA135]/20 placeholder:text-gray-350"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-[#1E3A2F] uppercase tracking-[0.15em]">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full bg-white border border-gray-100 px-4 py-3.5 text-[15px] text-[#1E3A2F] outline-none transition-all focus:border-[#CBA135] focus:ring-1 focus:ring-[#CBA135]/20 placeholder:text-gray-350"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1E3A2F]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-[#1E3A2F] uppercase tracking-[0.15em]">
                Confirm Password *
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full bg-white border border-gray-100 px-4 py-3.5 text-[15px] text-[#1E3A2F] outline-none transition-all focus:border-[#CBA135] focus:ring-1 focus:ring-[#CBA135]/20 placeholder:text-gray-350"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1E3A2F]"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded-sm border-gray-300 accent-[#1E3A2F] cursor-pointer"
              />
              <label htmlFor="remember" className="cursor-pointer text-[14px] font-semibold text-[#1E3A2F]">
                Remember me
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#1E3A2F] py-4.5 text-[15px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#152B20] active:scale-[0.99] shadow-md"
            >
              Sign Up
            </button>
          </form>

          <div className="relative my-10 flex items-center justify-center">
            <div className="absolute w-full border-t border-gray-200"></div>
            <span className="relative bg-[#FBF6EA] px-4 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              or Sign Up with
            </span>
          </div>

          <button 
            type="button"
            className="flex w-full items-center justify-center gap-3 border border-gray-200 bg-white py-3.5 text-[13px] font-bold text-gray-700 uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-[0.99]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          <footer className="mt-8 text-center text-[15px] text-gray-600">
            Already have an account?{" "}
            <button className="font-bold text-[#1E3A2F] underline underline-offset-8 transition-colors hover:text-black">
              Sign In
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default SignUp;