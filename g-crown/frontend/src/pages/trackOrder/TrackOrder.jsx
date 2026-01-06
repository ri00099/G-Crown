import React from "react";
import {
  Check,
  CreditCard,
  Headphones,
  Truck as ShippingIcon,
} from "lucide-react";

import p1 from "../../assets/trackingPage/p1.jpg";
import p2 from "../../assets/trackingPage/p2.jpg";
import p3 from "../../assets/trackingPage/p3.jpg";
import p4 from "../../assets/trackingPage/p4.jpg";

/* ================= DATA ================= */

const steps = [
  {
    label: "Order Placed",
    date: "20 December 2025",
    time: "11:00 AM",
    done: true,
  },
  {
    label: "Accepted",
    date: "20 December 2025",
    time: "11:00 AM",
    done: true,
  },
  {
    label: "In Progress",
    date: "Expected 20 December 2025",
    done: false,
  },
  {
    label: "On The Way",
    date: "Expected 20 December 2025",
    done: false,
  },
  {
    label: "Delivered",
    date: "Expected 20 December 2025",
    done: false,
  },
];

const products = [
  { img: p1, name: "Gold Earring", qty: 4 },
  { img: p2, name: "Gold Earring", qty: 4 },
  { img: p3, name: "Gold Earring", qty: 4 },
  { img: p4, name: "Gold Earring", qty: 4 },
];

/* ================= MAIN ================= */

export default function TrackOrder() {
  return (
    <main className="min-h-screen bg-[#FBF6EA] px-6 py-12 font-cormorant text-[#0F241A]">
      <h1 className="mb-12 text-center text-xl font-medium tracking-wide">
        Track Order
      </h1>

      <OrderStatus />
      <OrderInfo />
      <Products />
      <Services />
    </main>
  );
}

/* ================= ORDER STATUS ================= */

function OrderStatus() {
  return (
    <section className="mx-auto mb-14 max-w-5xl">
      <h2 className="mb-1 text-lg font-semibold">Order Status</h2>
      <p className="mb-6 text-sm text-gray-600">
        Order ID : <span className="font-medium">#SDGTT456AD</span>
      </p>

      <div className="rounded-md border border-[#CFC7B5] bg-[#FBF6EA] px-6 py-10">
        <div
          className="relative flex justify-between gap-6 overflow-x-auto"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={steps.length}
        >
          {steps.map((step, i) => {
            const isCompleted = step.done;
            const isLast = i === steps.length - 1;

            return (
              <div
                key={i}
                className="relative min-w-[160px] flex-1 text-center"
                aria-current={isCompleted ? "step" : undefined}
              >
                {/* CONNECTOR */}
                {!isLast && (
                  <span
                    className={`absolute top-[14px] left-1/2 h-[2px] w-full ${
                      isCompleted ? "bg-[#1F3B2D]" : "bg-[#D6D6D6]"
                    }`}
                  />
                )}

                {/* STEP DOT */}
                <div
                  className={`relative z-10 mx-auto mb-3 flex h-7 w-7 items-center justify-center rounded-md border ${
                    isCompleted
                      ? "bg-[#C9A24D] border-[#C9A24D]"
                      : "bg-[#E0E0E0] border-[#CFC7B5]"
                  }`}
                >
                  {isCompleted && <Check size={14} className="text-white" />}
                </div>

                <p className="text-sm font-medium">{step.label}</p>
                <p className="mt-1 text-xs text-gray-600">{step.date}</p>
                {step.time && (
                  <p className="text-xs text-gray-600">{step.time}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= ORDER INFO ================= */

function OrderInfo() {
  return (
    <section className="mx-auto mb-14 max-w-5xl rounded-md border border-[#CFC7B5]">
      <h3 className="border-b border-[#CFC7B5] px-6 py-4 font-semibold">
        Order Information
      </h3>

      <div className="divide-y divide-[#E2DCCB]">
        <InfoRow label="Order Date" value="November 19, 2025" />
        <InfoRow label="Estimated Delivery" value="November 27, 2025" />
        <InfoRow label="Payment Method" value="Paypal" />
      </div>

      <div className="flex justify-between bg-[#0F241A] px-6 py-4 font-medium text-white">
        <span>Total :</span>
        <span>₹ 2,15,000 /Only</span>
      </div>
    </section>
  );
}

/* ================= PRODUCTS ================= */

function Products() {
  return (
    <section className="mx-auto mb-16 max-w-5xl rounded-md border border-[#CFC7B5]">
      <h3 className="border-b border-[#CFC7B5] px-6 py-4 font-semibold">
        Products
      </h3>

      <div className="divide-y divide-[#E2DCCB]">
        {products.map((p, i) => (
          <div key={i} className="flex items-center gap-4 px-6 py-4">
            <img
              src={p.img}
              alt={p.name}
              className="h-14 w-14 rounded object-cover"
            />
            <div className="flex-1">
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-gray-600">
                Earring | {p.qty} Qty.
              </p>
            </div>
            <span className="text-sm text-gray-500">Price</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */

function Services() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
      <Service
        icon={<ShippingIcon />}
        title="Free Shipping"
        desc="Free Shipping for Order above ₹ 2,000"
      />
      <Service
        icon={<CreditCard />}
        title="Flexible Payment"
        desc="Multiple secure payment options"
      />
      <Service
        icon={<Headphones />}
        title="24x7 Support"
        desc="We support online all days"
      />
    </section>
  );
}

/* ================= SMALL COMPONENTS ================= */

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between px-6 py-4 text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const Service = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F241A] text-white">
      {icon}
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);