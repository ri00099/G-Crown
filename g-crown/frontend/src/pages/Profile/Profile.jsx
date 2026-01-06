import React, { useState } from "react";
import ProfileSidebar from '../../components/Profile/ProfileSide.jsx'
import PersonalInfo from "./Sections/PersonalInfo";
import MyOrders from "./Sections/MyOrders";
import Address from "./Sections/Address";
import Payment from "./Sections/Payment";
import Password from "./Sections/Password";
import { FeatureCard } from "../collections/Collections.jsx";

import shippingIcon from "../../assets/NewArrivalAssets/logos/la_shipping-fast.png";
import paymentIcon from "../../assets/NewArrivalAssets/logos/fluent_payment-32-regular.png";
import supportIcon from "../../assets/NewArrivalAssets/logos/streamline-plump_customer-support-7.png";

const Logout = () => (
  <div className="font-serif">
    <h2 className="text-2xl font-medium text-[#1B3022] mb-2">Logout</h2>
    <p className="text-[#B38B59] mb-8 italic">Are Sure You Want To Logout?</p>
    <button className="bg-[#1B3022] text-white px-8 py-3 text-sm font-medium hover:bg-opacity-90 transition-all">
      Yes, Logout
    </button>
  </div>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div>
      {/* Container: Mobile mein column (flex-col), Desktop mein row (lg:flex-row) */}
      {/* Padding: Mobile mein p-5, Desktop mein p-10 */}
      <div className="flex flex-col lg:flex-row bg-[#FFF9E9] p-5 lg:p-10 gap-8 lg:gap-10">
        
        {/* Sidebar Container: Mobile mein full width, Desktop mein 20% width */}
        <div className="w-full lg:w-[20%] shrink-0">
          <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content Area: Mobile mein full width, Desktop mein 75% aur extra space */}
        <div className="flex-1 w-full lg:w-[75%] min-h-[500px]">
          {activeTab === "profile" && <PersonalInfo />}
          {activeTab === "orders" && <MyOrders />}
          {activeTab === "address" && <Address />}
          {activeTab === "payment" && <Payment />}
          {activeTab === "password" && <Password />}
          {activeTab === "logout" && <Logout />}
        </div>
      </div>

      {/* Feature Section: Pehle se hi grid classes ke sath responsive hai */}
      <section className="bg-[#FFF9E9] px-4 sm:px-6 lg:px-12 xl:px-16 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard icon={shippingIcon} title="Free Shipping" description="Free Shipping for Order above ₹ 2,000" />
          <FeatureCard icon={paymentIcon} title="Flexible Payment" description="Multiple Secure payment Options" />
          <FeatureCard icon={supportIcon} title="24x7 Support" description="We Support online all days" />
        </div>
      </section>
    </div>
  );
};

export default Profile;