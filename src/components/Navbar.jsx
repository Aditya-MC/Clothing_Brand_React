import React from "react";
import {motion} from "framer-motion";

export default function Navbar(){
    return(
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/30">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-black">STREET LACE</div>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
                    <a className="hover:text-black transition">Home</a>
                    <a className="hover:text-black transition">Shop</a>
                    <a className="hover:text-black transition">Collections</a>
                    <a className="hover:text-black transition">About</a>
                </div>

                <div className="flex tems-center gap-4">
                    <button className="btn bg-black text-white hover:scale-105 transform transition">Shop now</button>
                    <div className="p-2 rounded-full bg-white/60 shadow-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 4h10l1 7H6L7 4z" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </div>
            </div>
        </nav>
    );
}