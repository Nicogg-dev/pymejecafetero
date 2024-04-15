'use client'

import { ProductCard } from "@/components/ProductCard";
import { Slider } from "@/components/Slider";

const info = [
  {
    id: 1,
    url:"https://via.placeholder.com/250",
    title: "Tratamiento Capilar Herbacol Liso Inteligente x 15 Ml Caja x 30 Sobres",
    description: "Herbacol Lisso Inteligente Keratina Termo ProtectoraPor su contenido de aceite d.."
  },
  {
    id: 2,
    url:"https://via.placeholder.com/250",
    title: "Tono Ges Baba Caracol Beige Perla x 24 Sobres 30 Ml",
    description: "- Antifrizz.- Con aceite de argan bionatural.- Previene la caída del cabello.Con.."
  },
  {
    id: 3,
    url:"https://via.placeholder.com/250",
    title: "Tono Ges Baba Caracol Cenizo x 24 Sobres 30 Ml",
    description: "- Antifrizz.- Con aceite de argan bionatural.- Previene la caída del cabello.Con.."
  },
  {
    id: 4,
    url:"https://via.placeholder.com/250",
    title: "Tonico Capilar Herbacol Cubre Canas Rubio Medio x 240 Ml",
    description: "FLASH CUBRE CANAS HERBACOL X 240MLCubre las canas perfectamente en tan solo 1 ho..",
  },
  {
    id: 5,
    url:"https://via.placeholder.com/250",
    title:"Tonico Capilar Herbacol Cubre Canas Rubio Medio x 240 Ml",
    description:"FLASH CUBRE CANAS HERBACOL X 240MLCubre las canas perfectamente en tan solo 1 ho.."
  }
];

const images1 = [
  {
    original: "https://picsum.photos/id/1018/1000/600",
    thumbnail: "https://picsum.photos/id/1018/250/150"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
]

export default function Home() {


  return (
    <div className="mx-6 md:mx-24">

      <Slider images={images1}/>

      <section>
        <h2 className="text-xl mt-20 mb-5 text-gray-500 font-medium">Los más vendidos</h2>
        <ul className="grid grid-cols-12 w-full bg-slate-400">
          {
            info.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </ul>
      </section>

      <section >
        <h2 className="text-xl mt-20 mb-5 text-gray-500 font-medium">Recientes</h2>
        <ul className="grid grid-cols-12 w-full bg-blue-400">
          {
            info.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))
          }
        </ul>
      </section>

      <Slider images={images1}/>
    </div>
  );
}
