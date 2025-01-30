import Producto from "../components/Producto";

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción breve del producto 1.",
    precio: "$20.00",
    imagen: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción breve del producto 2.",
    precio: "$25.00",
    imagen: "https://via.placeholder.com/300",
  },
  // Añade más productos aquí
];

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <Producto key={producto.id} {...producto} />
        ))}
      </div>
    </main>
  );
};

export default Home;