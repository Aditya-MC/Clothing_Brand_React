import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Raven Tee", price: "$999", img: "/src/assets/product1.jpg" },
  { id: 2, name: "Ember Jacket", price: "$499", img: "/src/assets/product2.jpg" },
  { id: 3, name: "Washed Denim", price: "$299", img: "/src/assets/product3.jpg" },
  { id: 4, name: "Street Shorts", price: "$459", img: "/src/assets/product4.jpg" },
  { id: 4, name: "Street Shorts", price: "$459", img: "/src/assets/product4.jpg" },
  { id: 4, name: "Street Shorts", price: "$459", img: "/src/assets/product4.jpg" },
  { id: 4, name: "Street Shorts", price: "$459", img: "/src/assets/product4.jpg" },
  { id: 4, name: "Street Shorts", price: "$459", img: "/src/assets/product4.jpg" },
];

export default function ProductGrid() {
  return (
    <div className="min-h-screen bg-[#5c3d2e] flex justify-center items-center py-8 px-16">
      <section className="w-full max-w-6xl rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 p-8">
        <h2 className="text-2xl font-bold text-white mb-8">Featured Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all 
                         backdrop-blur-lg bg-white/20 border border-white/30"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/70 text-black rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition">
                  Add
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-white">{p.name}</div>
                  <div className="text-sm text-gray-200">{p.price}</div>
                </div>
                <div className="mt-3 text-xs text-gray-300">
                  Variant : Black / S-M-L
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
