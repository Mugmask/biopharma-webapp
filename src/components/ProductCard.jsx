import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductCard({ product }) {
  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <img src={product.imagen} alt={product.nombre} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold text-gray-800 mb-2">{product.nombre}</CardTitle>
        <CardDescription className="text-gray-700 mb-4">{product.descripcion}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 bg-gray-100">
        <p className="text-lg font-bold text-gray-900">Precio: {product.precio}</p>
      </CardFooter>
    </Card>
  );
}
