import { useEffect } from "react";
import { useAppContext } from "../useAppContext";
import ProductCatalog from "./products/ProductCatalog";
import ProductFilters from "./products/ProductFilters";

export default function Products() {
  const { updateFilters, error } = useAppContext();

  useEffect(() => {
    updateFilters({ brand: "", search: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* if (loading) return <Loading />; */
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full p-6 ">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-4 text-black">Productos</h1>
      </div>
      <ProductFilters />
      <ProductCatalog />
    </div>
  );
}
