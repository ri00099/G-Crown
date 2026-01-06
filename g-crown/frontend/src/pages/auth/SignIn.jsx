import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import modelImage from "../../assets/authPages/signInModel.png";
import logo from "../../assets/authPages/logo.png";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <section className="flex h-svh w-full overflow-hidden bg-[#FBF6EA] font-serif selection:bg-[#1E3A2F]/20">
      
      {/* LEFT IMAGE SECTION - Scalable Aspect Ratio */}
      <div className="relative hidden w-[45%] lg:block">
        <img
          src={modelImage}
          alt="G-Crown Jewellery Model"
          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        
        {/* Luxury Frame Overlay - Matches Screenshot inset */}
        <div className="absolute inset-9 border border-white/50 pointer-events-none z-10" />
        
        {/* Content Box with Frosted Glass Effect */}
        <div className="absolute inset-x-14 bottom-10 z-20">
          <div className="rounded-lg border border-white/30 bg-white/10 p-8 backdrop-blur-sm">
            <p className="text-[19px] leading-[1.6] tracking-wide text-white font-light drop-shadow-sm">
              Every jewel at G-Crown is a symbol of elegance, precision, and heritage. 
              Crafted by Graphura, our designs are made to be worn like a crown—forever.
            </p>
          </div>
          
          {/* Progress Indicators - Perfect Alignment */}
          <div className="mt-8 flex items-center gap-2 px-1">
            <span className="h-1.5 flex-1 rounded-full bg-[#C9A23F] shadow-sm" />
            <span className="h-1.5 flex-1 rounded-full bg-white/40 transition-colors" />
            <span className="h-1.5 flex-1 rounded-full bg-white/40 transition-colors" />
            <span className="h-1.5 flex-1 rounded-full bg-white/40 transition-colors" />
          </div>
        </div>
      </div>

      {/* RIGHT FORM SECTION - No Scroll & High Density */}
      <div className="relative flex w-full flex-col overflow-y-auto lg:w-[55%] bg-[#FDF9F0]">
        <div className="m-auto w-full max-w-[480px] px-8 py-12 lg:px-12">
          
          {/* Brand Header */}
          <header className="mb-10 text-left">
            <div className="mb-6 h-[80px] w-auto">
              <img src={logo} alt="G-Crown" className="h-full object-contain" />
            </div>
            <h1 className="text-[44px] font-normal leading-tight text-[#1E3A2F] tracking-tight">
              Sign In
            </h1>
            <p className="mt-2 text-[16px] font-medium text-[#CBA135] tracking-wide">
              Please fill your detail to access your account
            </p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field - Boxed Style per Screenshot */}
            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-[#1E3A2C] tracking-wide">
                Email*
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-white border border-gray-100 px-4 py-3.5 text-[15px] text-[#1E3A2F] outline-none transition-all focus:border-[#CBA135] focus:ring-1 focus:ring-[#CBA135]/20 placeholder:text-gray-350"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-[#1E3A2C] tracking-wide">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full bg-white border border-gray-100 px-4 py-3.5 pr-12 text-[15px] outline-none transition-all focus:border-[#CBA135] focus:ring-1 focus:ring-[#CBA135]/20 placeholder:text-gray-350"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#1E3A2F] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} strokeWidth={1.2} /> : <Eye size={20} strokeWidth={1.2} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot Wrapper */}
            <div className="flex items-center justify-between py-1">
              <label className="group flex cursor-pointer items-center gap-2.5">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-white transition-all checked:bg-[#1E3A2F] checked:border-[#1E3A2F]"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <svg className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[14px] font-semibold text-[#1E3A2F]">Remember me</span>
              </label>
              
              <button type="button" className="text-[14px] font-semibold text-[#1E3A2F] underline underline-offset-4 hover:opacity-70 transition-opacity">
                Forgot Password?
              </button>
            </div>

            {/* Primary Action */}
            <button 
              type="submit"
              className="w-full bg-[#1C332A] py-4 text-[15px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#142620] active:scale-[0.99] shadow-lg shadow-[#1E3A2F]/10"
            >
              Sign In
            </button>
          </form>

          {/* Luxury Divider */}
          <div className="relative my-10 flex items-center justify-center">
            <div className="absolute w-full border-t border-gray-200/60"></div>
            <span className="relative bg-[#FDF9F0] px-4 text-[12px] font-medium text-gray-400">
              or Sign in with
            </span>
          </div>

          {/* Social Provider */}
          <button 
            type="button"
            className="flex w-full items-center justify-center gap-4 border border-gray-200 bg-white py-3.5 text-[14px] font-bold text-gray-700 transition-all hover:bg-gray-50 active:scale-[0.99] shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
            </svg>
            Sign In With Google
          </button>

          {/* Footer - Perfect Leading/Spacing */}
          <footer className="mt-10 text-center text-[15px] text-gray-600">
            Don't have an account?{" "}
            <button className="font-bold text-[#1E3A2F] underline underline-offset-8 decoration-1 hover:text-black">
              Sign Up
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default SignIn;