import React from "react";

export default function Footer(){
  return (
    <footer className="mt-12 border-t py-10 border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold">STREETLACE</div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Streetlace</div>
        </div>

        <div className="flex gap-4 text-sm text-gray-600">
          <a>Privacy</a>
          <a>Terms</a>
          <a>Contact</a>
        </div>
      </div>
    </footer>
  );
}
