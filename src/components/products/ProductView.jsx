import { useState, useEffect, useRef } from "react";
import { useAppContext } from "../../useAppContext";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/sheetService";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import ImageLoader from "@/components/ui/ImageLoader";
import { Input } from "@/components/ui/input";

export default function ProductView() {
  const { products, cart, addToCart, openCart, updateCartItem } = useAppContext();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const selectedUnitRef = useRef(selectedUnit);
  const selectedPriceRef = useRef(selectedPrice);

  const handleAddCart = () => {
    const selectedUnitValue = selectedUnitRef.current ? selectedUnitRef.current : product.detalles[0].unidad;
    const selectedPriceValue = selectedPriceRef.current ? selectedPriceRef.current : product.detalles[0].precio;
    const cartProduct = {
      ...product,
      detalles: {
        unidad: selectedUnitValue,
        precio: selectedPriceValue,
        cantidad: quantity,
        precioTotal: parseInt(selectedPriceValue.replace("$", "").replace(".", ""), 10) * quantity,
      },
      cartId: `${product.id}-${selectedUnitValue || "none"}`,
    };

    const findItem = cart.filter((item) => item.cartId == cartProduct.cartId);

    if (findItem.length) {
      const newQuantity = quantity + findItem[0].detalles.cantidad;
      updateCartItem(cartProduct.cartId, {
        cantidad: newQuantity,
        precioTotal: parseInt(selectedPriceValue.replace("$", "").replace(".", ""), 10) * newQuantity,
      });
    } else {
      addToCart(cartProduct);
    }
    openCart();
  };
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const handleUnitChange = (unit) => {
    const selected = unit;
    setSelectedUnit(selected);
    const selectedDetail = product.detalles.find((detail) => detail.unidad === selected);
    setSelectedPrice(selectedDetail ? selectedDetail.precio : "");
    selectedUnitRef.current = selected;
    selectedPriceRef.current = selectedDetail?.precio || "";
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1); // Asegurarse de que la cantidad mínima sea 1
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (!products || !products.length) {
        const fetchedProducts = await getProducts();
        const foundProduct = fetchedProducts.data.find((x) => x.id === productId);
        setProduct(foundProduct);
        if (foundProduct && foundProduct.detalles.length > 0) {
          setSelectedUnit(foundProduct.detalles[0].unidad);
          setSelectedPrice(foundProduct.detalles[0].precio);
          selectedUnitRef.current = foundProduct.detalles[0].unidad;
          selectedPriceRef.current = foundProduct.detalles[0].precio;
        }
      } else {
        const foundProduct = products.find((x) => x.id === productId);
        setProduct(foundProduct);
        if (foundProduct && foundProduct.detalles.length > 0) {
          setSelectedUnit(foundProduct.detalles[0].unidad);
          setSelectedPrice(foundProduct.detalles[0].precio);
          selectedUnitRef.current = foundProduct.detalles[0].unidad;
          selectedPriceRef.current = foundProduct.detalles[0].precio;
        }
      }
    };

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) {
    return <ImageLoader />;
  }

  return (
    <div className="p-6">
      <div className="bg-white flex flex-col lg:flex-row border rounded-lg overflow-hidden h-full">
        <div className=" flex w-full lg:w-[60%] p-4 justify-center items-center">
          {isLoading && (
            <div className="flex w-full h-96 lg:h-screen">
              <Skeleton className="w-full h-full rounded-lg" />
            </div>
          )}

          <img
            src={`https://drive.google.com/thumbnail?id=${product.imagen}&sz=w1000`}
            alt={product.nombre}
            className={`w-full h-auto object-cover rounded-lg transition-opacity duration-300 ${
              isLoading ? "hidden opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
          />
        </div>

        {/* Datos del producto */}
        <div className=" flex flex-col p-6 space-y- lg:border-l w-full lg:w-[40%] gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.nombre}</h1>
            <p className="text-3xl font-bold text-gray-900">{selectedPriceRef.current}</p>
          </div>

          <div className="flex flex-col bg-white  rounded-lg space-y-4 gap-4">
            <div className="flex  w-full gap-3">
              {product.detalles[0].unidad && (
                <div className="w-full flex flex-col gap-3">
                  <p className="text-lg font-semibold text-gray-700">Unidad</p>
                  <Select onValueChange={handleUnitChange} defaultValue={selectedUnitRef.current}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccione la unidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.detalles.map((detail, index) => (
                        <SelectItem key={index} value={detail.unidad}>
                          {detail.unidad}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className={`${product.detalles[0].unidad ? "w-full" : "w-full sm:w-1/2"} flex flex-col gap-3`}>
                <p className="text-lg font-semibold text-gray-700">Cantidad</p>
                <div className="relative flex items-center justify-center w-full">
                  <Minus
                    onClick={handleDecrease}
                    className="absolute left-1 cursor-pointer h-4 w-4 opacity-50 mx-3 hover:opacity-100"
                  />
                  <Input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="h-10 w-full text-center border  rounded-md px-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    min="1"
                  />
                  <Plus
                    onClick={handleIncrease}
                    className="absolute right-1 cursor-pointer h-4 w-4 opacity-50 mx-3 hover:opacity-100"
                  />
                </div>
              </div>
            </div>
            <Button className="w-full my-10 h-12" onClick={handleAddCart}>
              AGREGAR AL CARRITO
            </Button>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold text-gray-700">Descripción</p>
            <p className="text-gray-600 leading-relaxed">{product.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
