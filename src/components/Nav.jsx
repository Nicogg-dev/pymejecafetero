'use client'

import Image from "next/image";
import Link from "next/link";

import { useShopping } from "@/context/ShoppingCartContext";

import { FaPhoneAlt, FaUser, FaHeart, FaShoppingCart, FaShare, FaSearch } from "react-icons/fa";

export const Nav = () => {

    const {products} = useShopping();

    /* const toggleMenu = () => {
        setShowMenu(!showMenu);
    }; */

    return (
        <nav className="flex flex-col gap-3">

            <ul className="flex flex-row w-full justify-end gap-4 pr-8 bg-black text-white text-sm py-3">
                <li className="flex gap-1 items-center">
                    <FaPhoneAlt style={{ color: "white" }} />
                    <p className="min-[0px]:hidden min-[650px]:block">3187734231</p>
                </li>
                <li className="flex gap-1 items-center">
                    <FaUser />
                    <p className="min-[0px]:hidden min-[650px]:block">Mi cuenta</p>
                </li>
                <li className="flex gap-1 items-center">
                    <FaHeart />
                    <p className="min-[0px]:hidden min-[650px]:block">Listas de Deseos</p>
                </li>
                <li className="flex gap-1 items-center">
                    <FaShoppingCart />
                    <p className="min-[0px]:hidden min-[650px]:block">Carrito de compras</p>
                </li>
                <li className="flex gap-1 items-center">
                    <FaShare />
                    <p className="min-[0px]:hidden min-[650px]:block">Pagar</p>
                </li>
            </ul>

            <div className="grid grid-cols-12 md:flex-row mx-6 md:mx-24 md:justify-between items-center text-center gap-2 pt-2">

                <Link className="col-span-12 md:col-span-4 m-auto" href="/">
                    <Image
                        src="/logopyme1.png"
                        alt="logo"
                        width={200}
                        height={200} />
                </Link>

                <form className="flex col-span-12 md:col-span-5 border border-slate-200 rounded-md justify-end" action="">
                    <input className="w-full shadow-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-md focus:shadow-blue-400" type="text" name="Buscar" id="" />
                    <button className="bg-slate-300 p-3 px-6 hover:border-black">
                        <FaSearch style={{ color: "#6D0000" }} />
                    </button>
                </form>
                <button className="flex col-span-12 bg-gray-800 text-white text-sm justify-center items-center h-full rounded-md md:col-span-3 py-2 gap-1 md:py-0">
                    <FaShoppingCart />
                    {`${products.length} artículo(s)`}
                </button>

            </div>

            <ul className="min-[0px]:hidden min-[650px]:flex mx-6 md:mx-24 rounded-md bg-blue-500 md:bg-gradient-to-b md:from-blue-500 md:to-blue-400 text-white text-sm">
                <Link className="hover:bg-blue-600 p-2" href="/pym-eje-cafetero">
                    <p>PYM|Eje Cafetero</p>
                </Link>
                <Link className="flex flex-col justify-center hover:bg-blue-600 p-2" href="herbacol-colombia">
                    <p>Herbacol Colombia</p>
                </Link>
                <Link className="flex flex-col justify-center hover:bg-blue-600 p-2" href="ges-cosmeticos">
                    <p>Ges Cosméticos</p>
                </Link>
                <Link className="flex flex-col justify-center hover:bg-blue-600 p-2" href="">
                    <p>Corporales</p>
                </Link>
                <Link className="flex flex-col justify-center hover:bg-blue-600 p-2" href="">
                    <p>Removedores</p>
                </Link>
                <Link className="flex flex-col justify-center hover:bg-blue-600 p-2" href="shampoos">
                    <p>Shampoos</p>
                </Link>
                <Link className="flex flex-col justify-center hover:bg-blue-600 p-2" href="">
                    <p>Tratamientos</p>
                </Link>
                <Link className="flex flex-col justify-center hover:bg-blue-600 p-2" href="todos">
                    <p>Todos</p>
                </Link>
            </ul>

        </nav>
    );
};
