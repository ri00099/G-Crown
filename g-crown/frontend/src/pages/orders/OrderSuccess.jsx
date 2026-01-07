import React from "react";
import { useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import Icon from "../../assets/orderSuccess/OrderTick.png";
import GoldEaring from "../../assets/orderCancel/GoldEaring.png";
import GoldEaring2 from "../../assets/orderCancel/goldEarring2.jpg";
import GoldEaring3 from "../../assets/orderCancel/GoldEaring3.jpg";
import GoldEaring4 from "../../assets/orderCancel/GoldEaring4.jpg";
import FootIcon from "../../assets/NewArrivalAssets/logos/la_shipping-fast.png";
import FootIcon2 from "../../assets/NewArrivalAssets/logos/fluent_payment-32-regular.png";
import FootIcon3 from "../../assets/NewArrivalAssets/logos/streamline-plump_customer-support-7.png";
import FeatureCard from "../../components/common/FeatureCard";

import shippingIcon from "../../assets/NewArrivalAssets/logos/la_shipping-fast.png";
import paymentIcon from "../../assets/NewArrivalAssets/logos/fluent_payment-32-regular.png";
import supportIcon from "../../assets/NewArrivalAssets/logos/streamline-plump_customer-support-7.png";

const orderProducts = [
  {
    id: 1,
    name: "Gold Earring",
    qty: "1 Qty",
    price: "₹45,000",
    image: GoldEaring,
  },
  {
    id: 2,
    name: "Gold Earring",
    qty: "1 Qty",
    price: "₹45,000",
    image: GoldEaring2,
  },
  {
    id: 3,
    name: "Gold Earring",
    qty: "1 Qty",
    price: "₹45,000",
    image: GoldEaring3,
  },
  {
    id: 4,
    name: "Gold Earring",
    qty: "1 Qty",
    price: "₹45,000",
    image: GoldEaring4,
  },
];

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#FFF8E8] min-h-screen py-12 sm:py-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* SUCCESS ICON */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C9A14A] flex items-center justify-center shadow-lg">
            <img
              src={Icon}
              alt="Order Success"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </div>
        </div>

        {/* HEADING */}
        <h1 className="text-center font-cormorant text-3xl sm:text-4xl md:text-[52px] font-semibold text-[#1C3A2C] mb-2">
          Your order is completed
        </h1>
        <p className="text-center text-base sm:text-lg md:text-[25px] text-[#1C3A2C] mt-1 font-bold">
          Thank You. Your order has been received.
        </p>

        {/* ORDER META BAR */}
        <div className="mt-8 sm:mt-10 bg-[#1C3A2C] rounded-lg flex flex-wrap justify-between items-center text-white text-sm px-4 sm:px-6 py-4 gap-4 shadow-md">
          <MetaItem label="Order ID" value="SSICTT456AD" />
          <MetaItem label="Payment Method" value="Paypal" />
          <MetaItem label="Transaction ID" value="SSICTT456AD" />
          <MetaItem label="Estimated Delivery Date" value="24 December 2025" />
          <button
            onClick={() => {}}
            className="bg-[#C9A14A] text-white px-4 py-2 rounded text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Download size={16} />
            Download Invoice
          </button>
        </div>

        {/* ORDER DETAILS */}
        <div className="mt-8 sm:mt-10 border border-[#E5E1D8] rounded-lg p-4 sm:p-6 bg-white shadow-sm">
          <h2 className="font-medium text-[#0E2A21] mb-4 text-xl sm:text-[28px]">
            Order Details
          </h2>
          <div className="w-full h-0.5 bg-[#D0D0D0] mb-4" />
          <h3 className="font-medium text-[#0E2A21] mb-4 text-base sm:text-[20px]">
            Products:
          </h3>

          {/* PRODUCT ROW */}
          <div className="space-y-4">
            {orderProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between py-3 sm:py-4 border-b border-[#E5E1D8] last:border-none"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden bg-[#EDE7DA] flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[#0E2A21] text-sm sm:text-[16px] truncate">
                      {product.name}
                    </p>
                    <p className="text-[#1C3A2C] text-xs sm:text-[16px]">
                      Earring · {product.qty}
                    </p>
                  </div>
                </div>
                <p className="font-medium text-sm sm:text-[16px] ml-4 flex-shrink-0">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="mt-6 space-y-3 text-sm sm:text-[16px]">
            <div className="w-full h-0.5 bg-[#D0D0D0] my-4" />
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping Charges</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taxes (18%)</span>
              <span className="font-medium">₹32,400</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Coupon Discount</span>
              <span className="font-medium text-green-600">-₹18,000</span>
            </div>
            <div className="w-full h-0.5 bg-[#D0D0D0] my-4" />
            <div className="flex justify-between font-medium pt-4 text-lg sm:text-[20px]">
              <span>Total</span>
              <span className="text-[#1C3A2C]">₹1,62,000</span>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/collections")}
            className="flex-1 bg-[#08221B] text-white py-3 px-6 font-semibold tracking-widest uppercase hover:bg-black transition-colors"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/track-order")}
            className="flex-1 border-2 border-[#08221B] text-[#08221B] py-3 px-6 font-semibold tracking-widest uppercase hover:bg-[#08221B] hover:text-white transition-colors"
          >
            Track Order
          </button>
        </div>

        {/* TRUST INFO SECTION */}
        <div className="mt-12 sm:mt-20 bg-[#FFF8E8] py-8 sm:py-12 rounded-lg">
          <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 px-4">
            <TrustItem icon={FootIcon} title="Free Shipping" desc="Free Shipping for Order above ₹ 2,000" />
            <TrustItem icon={FootIcon2} title="Flexible Payment" desc="Multiple Secure payment Options" />
            <TrustItem icon={FootIcon3} title="24×7 Support" desc="We Support online all days" />
          </div>
        </div>
      </div>
    </main>
  );
}

const MetaItem = ({ label, value }) => (
  <div className="min-w-[140px]">
    <p className="text-xs opacity-70 text-sm sm:text-[17px]">{label}</p>
    <p className="font-medium text-xs sm:text-[15px] mt-1">{value}</p>
  </div>
);

const TrustItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-[#1C3A2C] flex items-center justify-center flex-shrink-0">
      <img src={icon} alt={title} className="w-6 h-6" />
    </div>
    <div>
      <p className="font-medium text-[#1C3A2C] text-base sm:text-[18px] font-bold">
        {title}
      </p>
      <p className="text-[#1C3A2C] text-xs sm:text-[14px] font-bold">
        {desc}
      </p>
    </div>
  </div>
);
