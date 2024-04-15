"use client"

const { createContext, useContext, useState } = require("react");

export const ShoppingCartContext = createContext();

export const useShopping = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
    }
    return context;
}

export const ShoppingCartProvider = ({ children }) => {
    const [products, setProducts] = useState(
        [
            {
                id: 1,
                url: "https://via.placeholder.com/250",
                title: "Tratamiento Capilar Herbacol Liso Inteligente x 15 Ml Caja x 30 Sobres",
                description: "Herbacol Lisso Inteligente Keratina Termo ProtectoraPor su contenido de aceite d.."
            },
            {
                id: 2,
                url: "https://via.placeholder.com/250",
                title: "Tono Ges Baba Caracol Beige Perla x 24 Sobres 30 Ml",
                description: "- Antifrizz.- Con aceite de argan bionatural.- Previene la caída del cabello.Con.."
            }
        ]
    );

    return (
        <ShoppingCartContext.Provider value={{ products, setProducts }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}