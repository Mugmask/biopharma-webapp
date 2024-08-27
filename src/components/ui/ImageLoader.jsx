import { Skeleton } from "@/components/ui/skeleton";

export default function ImageLoader() {
  return (
    <div className="p-6 min-h-screen">
      <div className="bg-white flex flex-col lg:flex-row border rounded-lg overflow-hidden h-screen">
        {/* Skeleton para la imagen del producto */}
        <div className="flex w-full h-[415px] p-4 justify-center items-center lg:w-[60%] lg:h-screen">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>

        {/* Skeleton para los datos del producto */}
        <div className="flex flex-col p-6 space-y-6 lg:border-l w-full lg:w-[40%] lg:gap-5">
          {/* Skeleton para el título del producto */}
          <Skeleton className="h-8 w-3/4 rounded-lg" />

          {/* Skeleton para el precio */}
          <Skeleton className="h-8 w-1/4 rounded-lg" />

          {/* Skeleton para la tarjeta de información */}
          <div className="bg-white rounded-lg space-y-4">
            <div className="flex justify-center w-full gap-3">
              <div className="w-full flex flex-col gap-3">
                {/* Skeleton para la unidad */}
                <Skeleton className="h-6 w-1/4 rounded-lg" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              <div className="w-full flex flex-col gap-3">
                {/* Skeleton para la cantidad */}
                <Skeleton className="h-6 w-1/4 rounded-lg" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>

            {/* Skeleton para el botón "AGREGAR AL CARRITO" */}
            <Skeleton className="h-12 w-full rounded-md" />
          </div>

          {/* Skeleton para la descripción */}
          <div className="flex flex-col gap-5">
            <Skeleton className="h-6 w-1/4 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg mt-2" />
            <Skeleton className="h-4 w-5/6 rounded-lg mt-1" />
            <Skeleton className="h-4 w-3/4 rounded-lg mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
