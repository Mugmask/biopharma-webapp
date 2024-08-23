import { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import ProductBrandFilter from "./ProductBrandFilter";

export default function ProductFilters() {
  const { updateFilters } = useContext(AppContext);

  const removeAccents = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  const handleSearchChange = (e) => {
    updateFilters({ search: removeAccents(e.target.value) });
  };

  return (
    <div className="flex items-center w-full gap-5 justify-between">
      <div className="relative w-full lg:w-1/3 py-4">
        {/* Input */}
        <Input placeholder="Buscar productos..." onChange={handleSearchChange} className="w-full  pr-10" />
        {/* Icono */}
        <div className="absolute inset-y-0 right-3 flex items-center">
          <Search className="text-[#61656e]" />
        </div>
      </div>
      <ProductBrandFilter />
    </div>
  );
}
