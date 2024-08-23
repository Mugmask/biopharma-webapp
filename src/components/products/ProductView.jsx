import { useState, useEffect } from "react";
import { useAppContext } from "../../useAppContext";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/sheetService";
import { Skeleton } from "@/components/ui/skeleton";
import ImageLoader from "../ui/ImageLoader";

export default function ProductView() {
  const { products, setProducts } = useAppContext();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      if (!products || !products.length) {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        const foundProduct = fetchedProducts.find((x) => x.id === productId);
        setProduct(foundProduct);
        if (foundProduct && foundProduct.detalles.length > 0) {
          setSelectedUnit(foundProduct.detalles[0].unidad);
          setSelectedPrice(foundProduct.detalles[0].precio);
        }
      } else {
        const foundProduct = products.find((x) => x.id === productId);
        setProduct(foundProduct);
        if (foundProduct && foundProduct.detalles.length > 0) {
          setSelectedUnit(foundProduct.detalles[0].unidad);
          setSelectedPrice(foundProduct.detalles[0].precio);
        }
      }
    };

    fetchProducts();
  }, [products, productId, setProducts]);

  const handleUnitChange = (event) => {
    const selected = event.target.value;
    setSelectedUnit(selected);
    const selectedDetail = product.detalles.find((detail) => detail.unidad === selected);
    setSelectedPrice(selectedDetail ? selectedDetail.precio : "");
  };

  if (!product) {
    return <ImageLoader />;
  }

  return (
    <div className="p-6">
      <div className="bg-white flex flex-col lg:flex-row border rounded-lg overflow-hidden h-full">
        <div className=" flex w-full lg:w-[60%] p-4 justify-center items-center">
          {isLoading && (
            <div className=" w-full h-96 lg:h-screen flex">
              <Skeleton className="w-full h-full rounded-lg" />
            </div>
          )}
          <img
            src={`https://drive.google.com/thumbnail?id=${product.imagen}&sz=w1000`}
            alt={product.nombre}
            className={`w-full h-auto object-cover rounded-lg transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
          />
        </div>

        {/* Datos del producto */}
        <div className="p-6 space-y-6 lg:border-l w-full lg:w-[60%]">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.nombre}</h1>

          <div className="bg-white p-4 rounded-lg  space-y-4">
            <div>
              <p className="text-4xl font-bold text-gray-800">{selectedPrice}</p>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-700">Unidad</p>
              <select
                value={selectedUnit}
                onChange={handleUnitChange}
                className="p-3 border border-gray-300 rounded-md w-full bg-gray-50 focus:ring focus:ring-gray-200 transition duration-200"
              >
                {product.detalles.map((detail, index) => (
                  <option key={index} value={detail.unidad}>
                    {detail.unidad}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-700">Descripción</p>
              <p className="text-gray-600 leading-relaxed">{product.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
