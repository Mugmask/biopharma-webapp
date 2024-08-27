import { Button } from "@/components/ui/Button";
import { useAppContext } from "../useAppContext";
import ProductCartView from "./products/ProductCartView";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useAppContext();

  if (!cart.length) {
    return (
      <div className="flex w-full justify-center p-2 border border-black my-7">
        <p>El carrito de compras está vacío.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full justify-between">
      {cart.map((item, index) => (
        <ProductCartView key={index} product={item} />
      ))}
      <div className="flex flex-col gap-4 mb-6">
        <Button>Iniciar Compra</Button>
        <Link to={"/productos"}>
          <Button variant="secondary">Ver más productos</Button>
        </Link>
      </div>
    </div>
  );
}
