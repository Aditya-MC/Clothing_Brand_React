import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { id:1, name:'Anya', quote:'Best tees I own. Fit is immaculate.' },
  { id:2, name:'Ravi', quote:'Quality > hype. Worth every rupee.' },
  { id:1, name:'Anya', quote:'Best tees I own. Fit is immaculate.' },
  { id:2, name:'Ravi', quote:'Quality > hype. Worth every rupee.' },
  { id:1, name:'Anya', quote:'Best tees I own. Fit is immaculate.' },
  { id:2, name:'Ravi', quote:'Quality > hype. Worth every rupee.' },
];

export default function Testimonials(){
  return (
    <section className="mt-16">
      <h3 className="text-xl font-bold mb-6 text-black">Loved by People</h3>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {reviews.map((r,i) => (
          <motion.div
            key={r.id}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.12 }}
            className="min-w-[260px] bg-white rounded-xl p-6 shadow"
          >
            <div className="text-gray-800 font-semibold">{r.name}</div>
            <div className="mt-2 text-sm text-gray-600">{r.quote}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
