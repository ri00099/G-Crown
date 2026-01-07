import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/occassions/bannerImg.jpg";

const mockOrderStatus = {
  "ORD123": {
    status: "Out for Delivery",
    steps: ["Order Placed", "Processing", "Shipped", "Out for Delivery"],
  },
  "ORD456": {
    status: "Delivered",
    steps: ["Order Placed", "Processing", "Shipped", "Delivered"],
  },
};

export default function OrderTracking() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    setError("");

    if (!orderId.trim()) {
      setError("Please enter a valid Order ID");
      return;
    }

    // Navigate to track order page with order ID
    navigate("/track-id", { state: { orderId: orderId.trim() } });
  };

  return (
    <div className="bg-[#FFF9E9] min-h-screen">

      {/* Banner */}
      <section className="relative h-[320px]">
        <img src={bannerImage} alt="Track Order" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-cormorant text-5xl text-[#CBA135]">TRACK YOUR ORDER</h1>
        </div>
      </section>

      {/* Tracking Card */}
      <section className="max-w-[700px] mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="font-serif text-2xl text-[#08221B] mb-6 text-center">
            Enter Your Order ID
          </h2>

          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. ORD123"
              className="flex-1 border border-[#1C3A2C] px-4 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#08221B] text-white px-6 py-3 text-sm tracking-widest hover:bg-black transition"
            >
              CHECK STATUS
            </button>
          </form>

          {error && (
            <p className="text-center text-sm text-red-500 mb-4">{error}</p>
          )}

          <p className="text-center text-xs text-gray-500 mt-4">
            Enter your order ID to track your shipment status
          </p>
        </div>
      </section>
    </div>
  );
}
