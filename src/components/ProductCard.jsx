"use client"
import Image from "next/image";
import { useShopping } from "@/context/ShoppingCartContext";


import { FaShoppingCart, FaHeart, FaExchangeAlt } from "react-icons/fa";


export const ProductCard = ({ product }) => {
    
    const {products, setProducts} = useShopping();

    const shopClick = (e) => {
        setProducts([...products, product])
    }
    
    return (
        <li className="flex flex-col col-span-12 md:col-span-6 lg:col-span-3 m-2 bg-white text-start gap-4 border-2 border-black justify-between">

            <Image
                src={product.url} style={{ objectFit: "cover" }} alt="product" width={700} height={500} />

            <h4 className="text-md font-bold px-3 text-red-900">{product.title}</h4>
            <p className="text-sm pb-4 px-3">{product.description}</p>

            <div className="flex justify-around w-full border-t-2 p-3 bg-slate-200">
                <button onClick={shopClick} className="text-gray-400 rounded-md "><FaShoppingCart /></button>

                <button className="text-gray-400 rounded-md"><FaHeart /></button>

                <button className="text-gray-400 rounded-md"><FaExchangeAlt /></button>
            </div>

        </li>
    );
};
