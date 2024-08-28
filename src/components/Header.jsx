import { useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAppContext } from "../useAppContext";
import Logo from "../assets/logo_biopharma.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Cart from "./Cart";

export default function Header() {
  const { cart, isCartOpen, toggleCart, closeCart } = useAppContext();

  useEffect(() => {
    const handlePopState = () => {
      if (isCartOpen) {
        closeCart();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCartOpen]);

  return (
    <header className="w-full h-20 flex items-center justify-between p-4 bg-black fixed z-20">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" width="60" className="rounded-full" />

        <nav className="flex items-center space-x-4 text-white">
          <Link to="/" className="hover:text-gray-300 ">
            Inicio
          </Link>
          <Link to="/productos" className="hover:text-gray-300 ">
            Productos
          </Link>
        </nav>
      </div>
      <Sheet open={isCartOpen} onOpenChange={toggleCart}>
        <SheetTrigger>
          <div className="relative w-9 h-9 flex justify-center items-center">
            <span className="w-4 h-4 rounded-full bg-white absolute top-0 right-0 flex justify-center items-center text-[10px]">
              {cart.length}
            </span>
            <ShoppingCart className="text-white hover:text-gray-300 cursor-pointer h-5 " />
          </div>
        </SheetTrigger>
        <SheetContent className="w-full lg:w-1/3 lg:max-w-none" onOpenAutoFocus={(e) => e.preventDefault()}>
          <SheetHeader>
            <SheetTitle className="text-2xl">Carrito de compras</SheetTitle>
            <SheetDescription>{""}</SheetDescription>
          </SheetHeader>
          <Cart />
        </SheetContent>
      </Sheet>
    </header>
  );
}
