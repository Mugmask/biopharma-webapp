import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAppContext } from "../useAppContext";
import Logo from "../assets/logo_biopharma.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Cart from "./Cart";
import { useEffect, useState } from "react";

export default function Header() {
  const { cart } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (cart.length) setIsOpen(true);
  }, [cart]);

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
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <ShoppingCart className="text-white hover:text-gray-300 cursor-pointer h-5" />
        </SheetTrigger>
        <SheetContent className="w-full lg:w-1/3 lg:max-w-none">
          <SheetHeader>
            <SheetTitle className="text-2xl">Carrito de compras</SheetTitle>
          </SheetHeader>
          <Cart />
        </SheetContent>
      </Sheet>
    </header>
  );
}
