import Image from "next/image";

import { useShopping } from "@/context/ShoppingCartContext";

import { FaWindowClose } from "react-icons/fa";

export const ShoppingCartProduct = () => {

    /* Pronto await */
    const { products } = useShopping();

    return <>
        <ul className="flex flex-col bg-white">
            {products.map((product) => (
                <li key={product.id} className="flex flex-row text-xs p-2 items-center justify-between border">
                    <Image src={product.url} alt={product.title} width={50} height={50} />
                    <h3 className="text-red-950 font-medium">{product.title}</h3>
                    <p></p>
                    <button className="h-full pl-2"><FaWindowClose className="text-2xl text-red-600"/></button>
                </li>
            ))}
        </ul>

    </>;
};
