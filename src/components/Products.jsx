import { useAppContext } from "../useAppContext";
import ProductCatalog from "./products/ProductCatalog";
import ProductFilters from "./products/ProductFilters";
import Loading from "./ui/Loading";

export default function Products() {
  const { loading, error } = useAppContext();

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full p-6 ">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Productos</h1>
      </div>
      <ProductFilters />
      <ProductCatalog />
    </div>
  );
}
