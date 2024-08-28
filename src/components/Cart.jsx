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
      <div className="overflow-y-auto pr-2">
        <div className="flex flex-col gap-3 mt-6">
          {cart.map((item, index) => (
            <ProductCartView key={index} product={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-6 mt-4">
        <Button>Iniciar Compra</Button>
        <Link to={"/productos"} className="w-full">
          <Button variant="secondary" className="w-full">
            Ver más productos
          </Button>
        </Link>
      </div>
    </div>
  );
}
