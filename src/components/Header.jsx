import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../assets/logo_biopharma.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Header() {
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

      <Sheet>
        <SheetTrigger>
          <ShoppingCart className="text-white hover:text-gray-300 cursor-pointer h-5" />
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
