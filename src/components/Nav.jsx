'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import './Nav.css';

import { useShopping } from "@/context/ShoppingCartContext";

import { FaPhoneAlt, FaUser, FaHeart, FaShoppingCart, FaShare, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { client } from "@/utils/sanity/client";

export const Nav = () => {

    const { products } = useShopping();
    const [navOptions,setNavOptions] = useState([])

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await client.fetch(`*[_type == "category"]{
                nombre,
                slug,
                sub_category[] -> { 
                    nombre
                }
              }`)
            setNavOptions(posts.reverse())
        }
        fetchPosts()
    }, []);
    
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

            <div className="grid grid-cols-12 md:flex-row mx-6 md:mx-20 md:justify-between items-center text-center gap-2 pt-2">

                <Link className="col-span-12 md:col-span-4 m-auto" href="/">
                    <Image
                        src="/logopyme1.png"
                        alt="logo"
                        width={350}
                        height={350} />
                </Link>

                <form className="flex col-span-12 md:col-span-5 border border-slate-200 rounded-md justify-end" action="">
                    <input className="w-full shadow-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-md focus:shadow-blue-400" type="text" name="Buscar" id="" />
                    <button className="bg-slate-300 p-3 px-6 hover:border-black">
                        <FaSearch style={{ color: "#6D0000" }} />
                    </button>
                </form>
                <button className="flex col-span-12 bg-gray-800 text-white text-sm justify-center items-center h-full rounded-md md:col-span-3 py-2 gap-1 md:py-0 border-t-2 border-t-gray-400">
                    <FaShoppingCart />
                    {`${products.length} artículo(s)`}
                </button>

            </div>

            {/* PANTALLAS PEQUEÑAS */}
            <div className="flex flex-col min-[0px]:flex min-[650px]:hidden mx-6 md:mx-20 rounded-md bg-gradient-to-b from-blue-500 to-blue-400 text-white text-sm p-2 border border-blue-500">
                <div className="flex justify-between items-center w-full px-4" onClick={toggleDropdown}>
                    <p className="text-base font-semibold">Categorías</p>
                    <button className="text-md bg-gradient-to-b from-blue-400 to-blue-500 p-3 rounded-md">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className={`overflow-hidden bg-transparent px-4 transition-all duration-900`} style={{ maxHeight: isOpen ? '1000px' : '0', opacity: isOpen ? '1' : '0' }}>
                    <ul className="py-2">
                        {navOptions.map((navOption) => (
                            <li key={navOption.slug}>
                                <Link className="block py-2" href={`/categorias/${navOption.slug}`}>
                                    {navOption.nombre}
                                </Link>
                                <div className="text-xs absolute left-0 bg-black shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {navOption.sub_category?.map((subCategory) => (
                                        <Link key={subCategory.nombre} href={`/categorias/${navOption.slug}/${subCategory.nombre}`} className="block px-4 py-2 hover:bg-blue-600">{subCategory.nombre}</Link>
                                    ))}
                                    {navOption.sub_category?.length > 0 ? <Link href="#" className="block px-4 py-2 text-red-700 hover:bg-blue-600">Mostrar todo: {navOption.nombre}</Link>:null}
                                </div>
                            </li>
                        ))}
                
                        <li>
                            <Link className="block py-2" href="/category2">
                                Todos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* PANTALLAS MEDIANAS */}
            <ul className="min-[0px]:hidden min-[650px]:flex mx-5 md:mx-20 rounded-md bg-blue-500 md:bg-gradient-to-b md:from-blue-500 md:to-blue-400 text-white text-sm">

                {navOptions.map((navOption) => (
                    <li key={navOption.slug} className="relative group m-0-auto">
                        <Link className="hover:bg-blue-600 flex flex-col text-center items-center justify-center px-1 py-2 lg:px-3 h-full" href={`/categorias/${navOption.slug}`}>
                            <p>{navOption.nombre}</p>
                        </Link>
                        <div className="text-xs absolute left-0 bg-black shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {navOption.sub_category?.map((subCategory) => (
                                <Link key={subCategory.nombre} href={`/categorias/${navOption.slug}/${subCategory.nombre}`} className="block px-4 py-2 hover:bg-blue-600">{subCategory.nombre}</Link>
                            ))}
                            {navOption.sub_category?.length > 0 ? <Link href="#" className="block px-4 py-2 text-red-700 hover:bg-blue-600">Mostrar todo: {navOption.nombre}</Link>:null}
                        </div>
                    </li>
                ))}

                <Link className="flex flex-col justify-center hover:bg-blue-600 px-1 py-2 lg:px-3 rounded-r-md" href="todos">
                    <p>Todos</p>
                </Link>
            </ul>

        </nav>
    );
};
