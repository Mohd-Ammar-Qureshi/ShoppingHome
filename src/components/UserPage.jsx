import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Luxury Jacket",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "Premium winter fashion jacket for modern style.",
  },
  {
    id: 2,
    name: "Classic Sneakers",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Comfortable sneakers with luxury streetwear design.",
  },
  {
    id: 3,
    name: "Elegant Watch",
    price: "$220",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    description: "Luxury watch with premium stainless steel finish.",
  },
  {
    id: 4,
    name: "Fashion Hoodie",
    price: "$70",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
    description: "Oversized hoodie for trendy and casual outfits.",
  },
];

const UserPage = () => {
   
  return (
    <div className="min-h-screen gray-950 text-white px-6">

      {/* Heading */}
      <div className="flex justify-between items-center mb-12 flex-wrap gap-4">

        <div>
          <h1 className="lg:text-5xl text-3xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Explore premium fashion collections
          </p>
        </div>

      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/10 rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300 shadow-xl"
          >

            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="p-5">

              <h2 className="text-2xl font-semibold mb-2">
                {product.name}
              </h2>

              <p className="text-yellow-400 text-xl font-bold mb-3">
                {product.price}
              </p>

              <p className="text-gray-300 text-sm mb-5">
                {product.description}
              </p>

              <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
                Add to Cart
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default UserPage;