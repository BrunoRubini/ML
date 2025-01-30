import { Link } from "react-router-dom";
import { useCarrito } from "../services/carritoContext/CarritoContext"; // Ruta corregida

const Header = () => {
  const { carrito } = useCarrito();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Catálogo de Productos</h1>
        <Link to="/carrito" className="relative">
          <span className="text-2xl">🛒</span>
          {carrito.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
              {carrito.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;