import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Raven Tee",
    price: "999",
    oldPrice: "1899",
    discount: "45%",
    img: "/assets/product1.jpg",
  },
  {
    id: 2,
    name: "Ember Jacket",
    price: "1499",
    oldPrice: "2999",
    discount: "50%",
    img: "/assets/product2.jpg",
  },
  {
    id: 3,
    name: "Washed Denim",
    price: "1299",
    oldPrice: "2599",
    discount: "50%",
    img: "/assets/product3.jpg",
  },
  {
    id: 4,
    name: "Street Shorts",
    price: "899",
    oldPrice: "1799",
    discount: "50%",
    img: "/assets/product4.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="min-h-screen w-full bg-[#5c3d2e] py-16 px-6">
      {/* Container */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-xl overflow-hidden shadow-lg 
                         backdrop-blur-lg bg-white/20 border border-white/30"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Discount Badge */}
                {p.discount && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    SAVE {p.discount}
                  </span>
                )}

                {/* Add Button */}
                <button className="absolute bottom-2 right-2 bg-white text-black rounded-full p-2 shadow opacity-0 group-hover:opacity-100 transition">
                  +
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm">{p.name}</h3>
                <p className="text-xs text-gray-300">Variant: Black / S-M-L</p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-white font-bold">₹{p.price}</span>
                  {p.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ₹{p.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
