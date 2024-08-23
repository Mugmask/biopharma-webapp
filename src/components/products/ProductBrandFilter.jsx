import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppProvider";
import { Button } from "../ui/button"; // Ajusta la ruta según tu proyecto
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"; // Ajusta la ruta según tu proyecto
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer"; // Ajusta la ruta según tu proyecto
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"; // Ajusta la ruta según tu proyecto
import { useMediaQuery } from "@react-hook/media-query";
import { Filter } from "lucide-react";

export default function ProductBrandFilter() {
  const { brand, updateFilters } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = useState(null);

  const statuses = brand;

  // eslint-disable-next-line react/prop-types
  function StatusList({ setOpen, setSelectedStatus }) {
    return (
      <Command>
        <CommandInput placeholder="Buscar marca" />
        <CommandList>
          <CommandEmpty>Sin resultados.</CommandEmpty>
          <CommandGroup>
            {statuses.map((status) => (
              <CommandItem
                key={status.value}
                value={status.value}
                onSelect={(value) => {
                  setSelectedStatus(statuses.find((status) => status.value === value) || null);
                  setOpen(false);
                }}
              >
                {status.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }
  useEffect(() => {
    if (selectedStatus?.value || selectedStatus?.value == "") {
      updateFilters({ brand: selectedStatus.value });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStatus]);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[300px] justify-between">
            {!selectedStatus || selectedStatus.value == "" ? "Filtrar por marca" : selectedStatus.label}
            <Filter className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-start">
          {selectedStatus ? selectedStatus.label : "Filtrar por marca"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
