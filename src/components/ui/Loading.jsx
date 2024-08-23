import { Skeleton } from "./skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="border rounded-lg  bg-white h-[550px] p-6">
          <Skeleton className="w-full h-[400px] rounded-md" />

          <div className="flex justify-center mt-2">
            <Skeleton className="h-9 w-9 rounded-full " />
          </div>

          <Skeleton className="mt-4 h-6  rounded-md" />

          <div className="flex justify-center">
            <Skeleton className="mt-2 h-6 w-1/2 rounded-md just" />
          </div>
        </div>
      ))}
    </div>
  );
}
