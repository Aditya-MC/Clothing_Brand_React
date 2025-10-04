import React from "react";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <header className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/public/assets/hero.jpg')] bg-cover bg-center brightness-75"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        <div className="w-full max-w-2xl text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg"
          >
            Wear Your Attitude.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-gray-100/90"
          >
            Premium streetwear crafted for motion and mischief. Limited drops — no refunds for regrets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <button className="btn bg-brand.accent text-black hover:scale-105 transform transition">Shop Drop</button>
            <button className="btn border border-white/30 text-white hover:bg-white/10">Explore</button>
          </motion.div>
        </div>

        <div className="hidden lg:block w-96">
          {/* Decorative floating card */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-white/5 p-6 rounded-2xl backdrop-blur shadow-2xl"
          >
            <img src="/src/assets/side-model.jpg" alt="model" className="rounded-xl w-full object-cover" />
            <div className="mt-4 text-gray-100">
              <div className="text-sm">New Drop</div>
              <div className="font-semibold">The Ember Jacket</div>
              <div className="mt-2 text-xs text-gray-300">Limited stock</div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
