import Link from "next/link";
import "./page.css";
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

// Define un objeto que mapea cada slug a su respectivo conjunto de productos y contenido adicional
const productsData = {
    "pym-eje-cafetero": {
        title: "PYM | Eje cafetero",
        products: Pym,
    },
    "herbacol-colombia": {
        title: "Herbacol Colombia",
        products: Herbacol,
    },
    "ges-cosmeticos": {
        title: "GES Cosméticos",
        products: Ges,
    },
};

const Home = ({ params }) => {
    const { slug } = params;

    // Verifica si el slug existe en los datos de productos
    if (slug in productsData) {
        const { title, products } = productsData[slug];

        return (
            <div className="grid grid-cols-12 mb-20 min-h-96 h-auto">
                <section className="min-[0px]:hidden min-[650px]:flex flex-col col-span-4 mt-4">
                    {/* Renderiza los enlaces para los slugs disponibles */}
                    {Object.keys(productsData).map((linkSlug) => (
                        <Link key={linkSlug} href={`/categorias/${linkSlug}`}>
                            <p className={`link-item ${slug === linkSlug ? "font-bold" : ""}`}>{productsData[linkSlug].title}</p>
                        </Link>
                    ))}
                </section>
                <section className="col-span-12 min-[650px]:col-span-8 pl-0 min-[650px]:pl-6 pt-8">
                    <div>
                        {/* Renderiza el título y productos correspondientes al slug */}
                        <div className="ml-2">
                            <h4>{title}</h4>
                        </div>
                        <div>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className="grid grid-cols-12 lg:grid-cols-9">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    } else {
        // Si el slug no coincide con ningún conjunto de datos de productos, muestra un mensaje de "Not Found"
        return (
            <div className="text-2xl font-bold text-center">
                Not Found
            </div>
        );
    }
};

export default Home;
