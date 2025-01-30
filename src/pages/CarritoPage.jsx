import { useCarrito } from "../services/carritoContext/CarritoContext";

const CarritoPage = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {carrito.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h3 className="font-semibold">{item.nombre}</h3>
                  <p className="text-gray-600">{item.descripcion}</p>
                  <p className="text-gray-600">{item.cantidad} x {item.precio}</p>
                </div>
                <button
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={vaciarCarrito}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default CarritoPage;