import React from "react";

export default function Newsletter(){
  return (
    <section className="mt-16 bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h4 className="text-2xl font-bold">Join The Drop</h4>
        <p className="mt-2 text-sm text-gray-300">Get exclusive early access and 10% off your first order.</p>

        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-full bg-white/10 outline-none focus:ring-2 focus:ring-brand.accent/40 w-full sm:w-auto"/>
          <button type="submit" className="btn bg-brand.accent text-white">Join</button>
        </form>
      </div>
    </section>
  );
}
