const URL_SHEET = import.meta.env.VITE_URL_SHEET;

// Función para obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await fetch(URL_SHEET);
    if (!response.ok) {
      throw new Error("Error fetching products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
