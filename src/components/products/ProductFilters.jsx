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
    <div className="flex items-center w-full">
      <div className="flex items-center py-4 w-full">
        <Input placeholder="Buscar productos..." onChange={handleSearchChange} className="w-full " />
        <Search className="px-3" />
      </div>
      <ProductBrandFilter />
    </div>
  );
}
