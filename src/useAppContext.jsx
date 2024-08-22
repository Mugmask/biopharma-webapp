import { useContext } from "react";
import { AppContext } from "./AppProvider"; // Asegúrate de la ruta correcta

export function useAppContext() {
  return useContext(AppContext);
}
