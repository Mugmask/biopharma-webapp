/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCartView({ product }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <Card className="bg-white rounded-lg flex">
      <CardHeader className="flex p-0 justify-center items-center">
        {isLoading && <Skeleton className="w-full h-[400px] rounded-md" />}
        <img
          src={`https://drive.google.com/thumbnail?id=${product.imagen}&sz=w250`}
          alt={product.nombre}
          className={`w-full h-full object-cover rounded-xl ${isLoading ? "hidden" : "block"}`}
          onLoad={handleImageLoad}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-light text-gray-800 mb-2 text-center">{product.nombre}</CardTitle>
        <CardDescription className="text-gray-700 text-xl mb-2 font-semibold text-center">
          {product.detalles.precio}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
