import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCarrito } from "@/services/carritoContext/CarritoContext";

const Producto = ({ id, nombre, descripcion, precio, imagen }) => {
  const { añadirAlCarrito } = useCarrito();

  return (
    <Card className="w-72 overflow-hidden shadow-lg">
      <CardHeader>
        <img src={imagen} alt={nombre} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold">{nombre}</CardTitle>
        <CardDescription className="mt-2 text-gray-600">{descripcion}</CardDescription>
        <p className="mt-2 text-lg font-bold">{precio}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button
          className="w-full"
          onClick={() => añadirAlCarrito({ id, nombre, descripcion, precio, imagen })}
        >
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Producto;