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
        <section>
            <h2>Featured Products</h2>

            <div>
                {products.map((p,i)=>(
                    <motion.div
                        key={p.id}
                        initial={{opacity: 0, y:12}}
                        animate={{opacity: 1, y:0}}
                        transition={{delay: i* 0.08}}
                        className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transform hover:-translate-y-1 transition"
                    >
                        <div>
                            <img src={p.img} alt={p.name} />
                            <div>Add</div>
                        </div>
                        <div>
                            <div>
                                <div>{p.name}</div>
                                <div>{p.price}</div>
                            </div>
                            <div>Variant : Black / S-M-L</div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>

    );
}