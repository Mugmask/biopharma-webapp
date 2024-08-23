import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../assets/logo_biopharma.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-30 flex items-center justify-between p-4 bg-black fixed z-20">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" width="70" className="rounded-full" />
        {/* Navegación */}
        <nav className="flex items-center space-x-8 text-white">
          <Link to="/" className="hover:text-gray-300 text-lg">
            Home
          </Link>
          <Link to="/productos" className="hover:text-gray-300 text-lg">
            Productos
          </Link>
        </nav>
      </div>

      {/* Carrito */}
      <Sheet>
        <SheetTrigger>
          <ShoppingCart className="text-white hover:text-gray-300 cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
