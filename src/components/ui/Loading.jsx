import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center  overflow-hidden ">
      <LoaderCircle className="w-12 h-12 m-3 animate-spin" />
      <p>Cargando...</p>
    </div>
  );
}
