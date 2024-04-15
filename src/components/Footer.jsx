
export const Footer = () => {
    return (
        <footer className="px-6 md:px-24 bg-black text-white mt-auto">
            <div className="flex justify-between pb-7">
                <div className="gap-2">
                    <h4 className="my-5 text-sm">Información</h4>
                    <ul className="flex flex-col gap-1 text-xs text-gray-300">
                        <li>Sobre Nosotros</li>
                        <li>Información de envíos</li>
                        <li>Politica de Privacidad</li>
                        <li>Términos y condiciones</li>
                    </ul>
                </div>

                <div>
                    <h4 className="my-5 text-sm">Servicio al Cliente</h4>
                    <ul className="flex flex-col gap-1 text-xs text-gray-300">
                        <li>Contáctenos</li>
                        <li>Devoluciones</li>
                        <li>Mapa del sitio</li>
                    </ul>
                </div>

                <div>
                    <h4 className="my-5 text-sm">Extras</h4>
                    <ul className="flex flex-col gap-1 text-xs text-gray-300">
                        <li>Marcas</li>
                        <li>tarjetas de regalo</li>
                        <li>Afiliados</li>
                        <li>Especiales</li>
                    </ul>
                </div>

                <div>
                    <h4 className="my-5 text-sm">Mi cuenta</h4>
                    <ul className="flex flex-col gap-1 text-xs text-gray-300">
                        <li>Mi cuenta</li>
                        <li>Historial de pedidos</li>
                        <li>Lista de deseos</li>
                        <li>Boletín de notícias</li>
                    </ul>
                </div>
            </div>

            {/* Línea horizontal */}
            <hr className="my-auto border-gray-400 h-0" />

            <div>
                <p className="text-xs text-gray-300 py-5">Por: * ... 3054103838  © 2018-2024 Todos los derechos reversados.| Imágenes por P Y M Eje Cafetero</p>
            </div>
        </footer>
    );
};
