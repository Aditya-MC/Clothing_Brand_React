import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";



export default function App(){
  return(
    <div className="font-display text-gray-100 bg-white">

      <Navbar/>
      <main className="overflow-x-hidden">
        <Hero/>
        <section className="max-w-7xl mx-auto px-6 py-20">
          <ProductGrid/>
        </section>
      </main>
      
    </div>
  );
}