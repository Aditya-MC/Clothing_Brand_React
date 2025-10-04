import React from "react";

const collections = [
  { id:1, title:'Summer Drop', subtitle:'Breezy fits', img:'/public/assets/collection1.jpg' },
  { id:2, title:'StreetCore', subtitle:'Raw & Rugged', img:'/public/assets/collection2.jpg' },
  { id:3, title:'Traditionals', subtitle:'Divine Collections', img:'/public/assets/collection3.jpg' },
  { id:2, title:'Casuals', subtitle:'Chill Fits', img:'/public/assets/collection4.jpg' },
];

export default function Collections(){
  return (
    <section className="mt-16">
      <h3 className="text-3xl font-bold mb-6 text-black">Collections</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {collections.map(c => (
          <div key={c.id} className="relative rounded-xl overflow-hidden group">
            <img src={c.img} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <div className="text-white font-semibold text-lg">{c.title}</div>
                <div className="text-sm text-gray-200">{c.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
