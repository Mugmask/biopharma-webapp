/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppContext } from "../../useAppContext";
import { Input } from "../ui/input";
import { Minus, Plus, Trash } from "lucide-react";

export default function ProductCartView({ product }) {
  const { removeFromCart } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(product.detalles.cantidad);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const handleDeleteCart = () => {
    removeFromCart(product.id);
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1); // Asegurarse de que la cantidad mínima sea 1
  };
  return (
    <Card className="bg-white rounded-lg flex p-3 justify-between">
      <div className="flex flex-row">
        <CardHeader className="flex p-0 justify-center items-center">
          {isLoading && <Skeleton className="w-full h-[120px] rounded-md" />}
          <img
            src={`https://drive.google.com/thumbnail?id=${product.imagen}&sz=w120`}
            alt={product.nombre}
            className={`w-full h-full object-cover rounded-xl ${isLoading ? "hidden" : "block"}`}
            onLoad={handleImageLoad}
          />
        </CardHeader>
        <CardContent className="p-0">
          <CardTitle className="text-lg font-light text-gray-800 mb-2">{`${product.nombre} ${
            product.detalles.unidad ? `(${product.detalles.unidad})` : ""
          }`}</CardTitle>
          <CardDescription className="text-gray-700 text-md mb-2 font-semibold ">
            {product.detalles.precio}
          </CardDescription>

          <div className="w-[150px] flex flex-col gap-3">
            <div className="relative flex items-center justify-center w-full">
              <Minus
                onClick={handleDecrease}
                className="absolute left-1 cursor-pointer h-4 w-4 opacity-50 mx-3 hover:opacity-100"
              />
              <Input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="h-10 w-full text-center border  rounded-md px-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min="1"
              />
              <Plus
                onClick={handleIncrease}
                className="absolute right-1 cursor-pointer h-4 w-4 opacity-50 mx-3 hover:opacity-100"
              />
            </div>
          </div>
        </CardContent>
      </div>

      <CardFooter className="p-0 ">
        <Trash className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer" onClick={handleDeleteCart} />
      </CardFooter>
    </Card>
  );
}
