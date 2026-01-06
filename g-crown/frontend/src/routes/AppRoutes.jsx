import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Home from "../pages/homePage/Home";
import SignIn from "../pages/auth/SignIn.jsx";
import SignUp from "../pages/auth/SignUp.jsx";

import Collections from "../pages/collections/Collections.jsx";
import NewArrivals from "../pages/newArrivals/NewArrival.jsx";
import Occasions from "../pages/occasions/Occasion.jsx";
import Store from "../pages/store/Store.jsx";
import AboutUs from "../pages/aboutUs/AboutUs.jsx";
import ProductDetails from "../pages/ProductDetails/ProductDetails.jsx";
import Profile from "./../pages/Profile/Profile.jsx"

import TrackingOrder from '../pages/trackOrder/TrackOrder.jsx'
import TrackingForm from '../pages/trackOrder/TrackingForm.jsx'

export default function AppRoutes() {
  const location = useLocation();

  // navbar + footer hide only on auth pages
  const hideLayout =
    location.pathname === "/signin" ||
    location.pathname === "/signup";

  return (
    <div className={!hideLayout ? "pt-16 sm:pt-20 md:pt-22 lg:pt-28 xl:pt-32" : ""}>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/collections" element={<Collections />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/track-order" element={<TrackingForm />} />
        <Route path="/track-id" element={<TrackingOrder />} />
    
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}
