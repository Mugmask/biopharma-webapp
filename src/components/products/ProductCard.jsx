/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <Link to={`/productos/${product.id}`} key={product.id}>
      <Card className="bg-white rounded-lg hover:shadow-xl ">
        <CardHeader>
          {isLoading && <Skeleton className="w-full h-[400px] rounded-md" />}
          <img
            src={`https://drive.google.com/thumbnail?id=${product.imagen}&sz=w1000`}
            alt={product.nombre}
            className={`w-full h-full object-cover rounded-xl ${isLoading ? "hidden" : "block"}`}
            onLoad={handleImageLoad}
          />
          <div className="flex justify-center">
            <ShoppingBag />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-light text-gray-800 mb-2 text-center">{product.nombre}</CardTitle>
          <CardDescription className="text-gray-700 text-xl mb-2 font-semibold text-center">
            {product.detalles[0].precio}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
