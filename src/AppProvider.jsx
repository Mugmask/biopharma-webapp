import { createContext, useState, useEffect } from "react";
import { getProducts } from "../src/services/sheetService";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ search: "", brand: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const updateCartItem = (cartId, updatedFields) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.cartId === cartId) {
          return {
            ...item,
            detalles: {
              ...item.detalles,
              ...updatedFields,
            },
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const openCart = () => setCartIsOpen(true);
  const closeCart = () => setCartIsOpen(false);
  const toggleCart = () => setCartIsOpen((prev) => !prev);

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const removeAccents = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredProducts = products.filter((product) => {
    const { search, brand } = filters;
    const nameMatches = removeAccents(product.nombre).toLowerCase().includes(search.toLowerCase());
    const brandMatches = brand ? product.marca.toLowerCase().includes(brand.toLowerCase()) : true;
    return nameMatches && brandMatches;
  });

  const filteredBrandProducts = [
    { value: "", label: "Todas las marcas" },
    ...Array.from(new Set(products.map((product) => product.marca.trim()))).map((brand) => ({
      value: brand,
      label: brand,
    })),
  ];

  return (
    <AppContext.Provider
      value={{
        products: filteredProducts,
        brand: filteredBrandProducts,
        cart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        updateCartItem,
        removeFromCart,
        loading,
        error,
        updateFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
