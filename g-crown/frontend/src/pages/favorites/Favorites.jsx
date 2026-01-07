import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";
import ProductCard from "../../components/products/ProductCard";
import FeatureCard from "../../components/common/FeatureCard";

import shippingIcon from "../../assets/NewArrivalAssets/logos/la_shipping-fast.png";
import paymentIcon from "../../assets/NewArrivalAssets/logos/fluent_payment-32-regular.png";
import supportIcon from "../../assets/NewArrivalAssets/logos/streamline-plump_customer-support-7.png";

export default function Favorites() {
    const navigate = useNavigate();
    const { favorites, removeFromFavorites } = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="bg-[#FFF9E9] min-h-screen py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Heart className="w-24 h-24 mx-auto text-gray-300 mb-6 fill-gray-300" />
                    <h1 className="text-3xl font-cormorant font-bold text-[#1C3A2C] mb-4">
                        Your Favorites is Empty
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Start adding items you love to your favorites list.
                    </p>
                    <button
                        onClick={() => navigate("/collections")}
                        className="px-8 py-3 bg-[#08221B] text-white font-semibold tracking-widest uppercase hover:bg-black transition-colors"
                    >
                        Explore Collections
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FFF9E9] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl md:text-4xl font-cormorant font-bold text-[#1C3A2C]">
                        My Favorites
                    </h1>
                    <span className="text-gray-600">
                        {favorites.length} {favorites.length === 1 ? "item" : "items"}
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {favorites.map((product) => (
                        <div key={product.id} className="relative">
                            <ProductCard product={product} />
                            <button
                                onClick={() => removeFromFavorites(product.id)}
                                className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
                                aria-label="Remove from favorites"
                            >
                                <Heart
                                    size={18}
                                    className="fill-red-500 text-red-500"
                                />
                            </button>
                        </div>
                    ))}
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
