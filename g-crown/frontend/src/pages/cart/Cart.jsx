import React from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import FeatureCard from "../../components/common/FeatureCard";

import shippingIcon from "../../assets/NewArrivalAssets/logos/la_shipping-fast.png";
import paymentIcon from "../../assets/NewArrivalAssets/logos/fluent_payment-32-regular.png";
import supportIcon from "../../assets/NewArrivalAssets/logos/streamline-plump_customer-support-7.png";

export default function Cart() {
    const navigate = useNavigate();
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
    } = useCart();

    const subtotal = getCartTotal();
    const shipping = subtotal > 2000 ? 0 : 200;
    const tax = subtotal * 0.18;
    const total = subtotal + shipping + tax;

    if (cartItems.length === 0) {
        return (
            <div className="bg-[#FFF9E9] min-h-screen py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
                    <h1 className="text-3xl font-cormorant font-bold text-[#1C3A2C] mb-4">
                        Your Cart is Empty
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Looks like you haven't added anything to your cart yet.
                    </p>
                    <button
                        onClick={() => navigate("/collections")}
                        className="px-8 py-3 bg-[#08221B] text-white font-semibold tracking-widest uppercase hover:bg-black transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FFF9E9] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-cormorant font-bold text-[#1C3A2C] mb-8">
                    Shopping Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg border border-[#E5DDCC] p-4 sm:p-6 flex flex-col sm:flex-row gap-4"
                            >
                                <div
                                    className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                                    onClick={() =>
                                        navigate(`/product/${item.id}`, { state: { product: item } })
                                    }
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3
                                            className="font-cormorant text-xl font-semibold text-[#08221B] mb-2 cursor-pointer hover:text-[#CBA135] transition-colors"
                                            onClick={() =>
                                                navigate(`/product/${item.id}`, {
                                                    state: { product: item },
                                                })
                                            }
                                        >
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {item.material} | {item.color}
                                        </p>
                                        <p className="text-lg font-bold text-[#08221B]">
                                            ₹{item.price.toLocaleString()}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-3 border border-gray-300 rounded">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 hover:bg-gray-100 transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="px-4 font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 hover:bg-gray-100 transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                                            aria-label="Remove item"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg border border-[#E5DDCC] p-6 sticky top-24">
                            <h2 className="text-xl font-cormorant font-semibold text-[#08221B] mb-6">
                                Order Summary
                            </h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold">
                                        ₹{subtotal.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-semibold">
                                        {shipping === 0 ? "Free" : `₹${shipping}`}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Tax (18%)</span>
                                    <span className="font-semibold">₹{tax.toLocaleString()}</span>
                                </div>
                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-lg">Total</span>
                                        <span className="font-bold text-xl text-[#08221B]">
                                            ₹{total.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate("/checkout")}
                                className="w-full bg-[#08221B] text-white py-4 font-semibold tracking-widest uppercase hover:bg-black transition-colors mb-4"
                            >
                                Proceed to Checkout
                            </button>

                            <button
                                onClick={() => navigate("/collections")}
                                className="w-full border-2 border-[#08221B] text-[#08221B] py-3 font-semibold tracking-widest uppercase hover:bg-[#08221B] hover:text-white transition-colors"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <section className="mt-16 px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        <FeatureCard
                            icon={shippingIcon}
                            title="Free Shipping"
                            description="Free Shipping for Order above ₹ 2,000"
                        />
                        <FeatureCard
                            icon={paymentIcon}
                            title="Flexible Payment"
                            description="Multiple Secure payment Options"
                        />
                        <FeatureCard
                            icon={supportIcon}
                            title="24x7 Support"
                            description="We Support online all days"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
