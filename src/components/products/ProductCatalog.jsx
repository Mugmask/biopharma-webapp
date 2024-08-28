import { useAppContext } from "../../useAppContext";
import Loading from "@/components/ui/Loading";
import ProductCard from "./ProductCard";

export default function ProductCatalog() {
  const { products, loading } = useAppContext();

  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">Sin Resultados.</p>
      ) : (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
}
