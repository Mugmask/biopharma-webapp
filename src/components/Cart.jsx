import { Button } from "@/components/ui/button";
import { useAppContext } from "../useAppContext";
import ProductCartView from "./products/ProductCartView";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, closeCart } = useAppContext();

  const handlePurchase = () => {
    const message = generateCartMessage(cart);
    console.log(message);
    const whatsAppLink = `https://wa.me/+5492234399100?text=${encodeURIComponent(message)}&`;
    window.location.href = whatsAppLink;
  };

  const generateCartMessage = (cart) => {
    return cart
      .map((item) => {
        const { nombre, detalles } = item;
        const { precioTotal, cantidad, unidad } = detalles;
        return `${cantidad}x - ${nombre} - ${unidad ? `${unidad} -` : ""} ${precioTotal.toLocaleString("es-ar", {
          style: "currency",
          currency: "ARS",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`;
      })
      .join("\n");
  };

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
      <div className="flex flex-col gap-4 mb-9 mt-4">
        <Button onClick={handlePurchase}>Iniciar Compra</Button>
        <Link to={"/productos"} className="w-full" onClick={closeCart}>
          <Button variant="secondary" className="w-full">
            Ver más productos
          </Button>
        </Link>
      </div>
    </div>
  );
}
