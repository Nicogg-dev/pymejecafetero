'use client'

import Link from "next/link";
import "./page.css";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";

const Pym = [
    {
        id: 1,
        url: "https://via.placeholder.com/250",
        title: "Aceite PYM Ricino Puro x 30 Ml",
        description: "El aceite PYM Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    },
    {
        id: 2,
        url: "https://via.placeholder.com/250",
        title: "Aceite PYM Ricino Puro x 60 Ml",
        description: "El aceite PYM Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    },
    {
        id: 3,
        url: "https://via.placeholder.com/250",

        title: "Aceite PYM Ricino Puro x 120 Ml",
        description: "El aceite PYM Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    }
];

const Herbacol = [
    {
        id: 1,
        url: "https://via.placeholder.com/250",
        title: "Aceite Herbacol Ricino Puro x 30 Ml",
        description: "El aceite Herbacol Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    },
    {
        id: 2,
        url: "https://via.placeholder.com/250",
        title: "Aceite Herbacol Ricino Puro x 60 Ml",
        description: "El aceite Herbacol Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    },
    {
        id: 3,
        url: "https://via.placeholder.com/250",
        title: "Aceite Herbacol Ricino Puro x 120 Ml",
        description: "El aceite Herbacol Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    }
];

const Ges = [
    {
        id: 1,
        url: "https://via.placeholder.com/250",
        title: "Aceite Ges Ricino Puro x 30 Ml",
        description: "El aceite Ges Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    },
    {
        id: 2,
        url: "https://via.placeholder.com/250",
        title: "Aceite Ges Ricino Puro x 60 Ml",
        description: "El aceite Ges Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    },
    {
        id: 3,
        url: "https://via.placeholder.com/250",
        title: "Aceite Ges Ricino Puro x 120 Ml",
        description: "El aceite Ges Ricino Puro es un aceite vegetal, se utiliza como producto de bell.."
    }
];

const Home = ({ params }) => {

    const [slug, setSlug] = useState(params.slug);

    useEffect(() => {
        setSlug(params.slug);
    }, [params.slug]);

    return (
        <div className="grid grid-cols-12 mb-20 min-h-96 h-auto">
            <section className="min-[0px]:hidden min-[650px]:flex flex-col col-span-4 mt-4">

                <Link className="link-item" href="/pym-eje-cafetero">PYM | Eje cafetero</Link>
                <Link className="link-item" href="/herbacol-colombia">Herbacol Colombia</Link>
                <Link className="link-item" href="/ges-cosmeticos">GES Cosméticos</Link>
                <Link className="link-item" href="/balsamos">Balsamos</Link>
                <Link className="link-item" href="/corporales">Corporales</Link>
                <Link className="link-item" href="/faciales">Decolorantes</Link>
                <Link className="link-item" href="/capilares">Desinfectantes</Link>
                <Link className="link-item" href="/jabones">Dilusor Esmalte</Link>

            </section>

            <section className="col-span-12 min-[650px]:col-span-8 pl-0 min-[650px]:pl-6 pt-8">

                <div>
                    {
                        slug === "pym-eje-cafetero" && (
                            <>
                                <div className="ml-2">
                                    <h4>{slug}</h4>
                                </div>
                                <div>
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                                <div className="grid grid-cols-12 lg:grid-cols-9">
                                    {Pym.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </>
                        )}
                    {
                        slug === "herbacol-colombia" && (
                            <>
                                <div className="ml-2">
                                    <h4>{slug}</h4>
                                </div>
                                <div>
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                                <div className="grid grid-cols-12 lg:grid-cols-9">
                                    {Herbacol.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </>
                        )
                    }
                    {
                        slug === "ges-cosmeticos" && (
                            <>
                                <div className="ml-2">
                                    <h4>{slug}</h4>
                                </div>
                                <div>
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                                <div className="grid grid-cols-12 lg:grid-cols-9">
                                    {Ges.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </>
                        )
                    }

                    {slug !== "pym-eje-cafetero" && slug !== "herbacol-colombia" && slug !== "ges-cosmeticos" && (
                        <p className="text-2xl font-bold text-center">Not Found</p>
                    )}

                </div>
            </section>
        </div>
    );
};

export default Home;
