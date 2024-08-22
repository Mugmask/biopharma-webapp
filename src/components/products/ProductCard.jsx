/* eslint-disable react/prop-types */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/productos/${product.id}`} key={product.id}>
      <Card className=" bg-white rounded-lg hover:shadow-xl">
        <CardHeader>
          <img src={product.imagen} alt={product.nombre} className="w-full h-full object-cover rounded-t-lg " />
          <div className="flex justify-center">
            <ShoppingBag />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-light text-gray-800 mb-2 text-center">{product.nombre}</CardTitle>
          <CardDescription className="text-gray-700 text-xl mb-2 font-semibold text-center">
            {product.precio}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
