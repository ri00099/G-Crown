import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/homePage/Home";
import SignIn from "../pages/auth/SignIn.jsx";
import SignUp from "../pages/auth/SignUp.jsx";

export default function AppRoutes() {
  const location = useLocation();

  // Hide navbar & footer on auth pages
  const hideLayout =
    location.pathname === "/signin" ||
    location.pathname === "/signup";

  return (
    <div className={!hideLayout ? "pt-22 lg:pt-24" : ""}>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}