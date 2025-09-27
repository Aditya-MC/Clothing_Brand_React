import React from "react";
import {motion} from "framer-motion";
import { section } from "framer-motion/client";

const products = [
    {id:1, name:'Raven Tee', price:'$999', img:'/src/assets/product1.jpg'},
    {id:2, name:'Ember Jacket', price:'$499', img:'/src/assets/product2.jpg'},
    {id:3, name:'Washed Denim', price:'$299', img:'/src/assets/product3.jpg'},
    {id:4, name:'Street Shorts',price:'$459', img:'/src/assets/product4.jpg'},

];

export default function ProductGrid(){
    return(
        <section className="mt-12 bg-brown-700">
            <h2 className="text-2xl font bold text-gray-900 mb-6">Featured Products</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((p,i)=>(
                    <motion.div
                        key={p.id}
                        initial={{opacity: 0, y:12}}
                        animate={{opacity: 1, y:0}}
                        transition={{delay: i* 0.08}}
                        className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transform hover:-translate-y-3 transition"
                    >
                        <div className="relative">
                            <img src={p.img} alt={p.name} className="w-full h-56 object-cover group-hover: scale-105 transition-transform duration-400"/>
                            <div className="absolute top-3 right-3 bg-white/80 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition">Add</div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <div className="font-semibold text-gray-800">{p.name}</div>
                                <div className="text-sm text-gray-500">{p.price}</div>
                            </div>
                            <div className="mt-3 text-xs text-gray-500">Variant : Black / S-M-L</div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>

    );
}