import { Instagram } from "lucide-react";
import Whatsapp from "../assets/whatsapp.svg";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div>
          <h1>Biopharma Distribuidora</h1>
        </div>
        <div className="flex gap-2">
          <a href="https://www.instagram.com/biopharmadistribuidora/" target="blank">
            <Instagram />
          </a>
          <a href="https://wa.me/+5492234399100" target="blank">
            <img src={Whatsapp} alt="Your SVG" target="blank" />
          </a>
        </div>

        {/* Sección de Derechos de Autor */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            Distribuidora de productos naturales aptos para veganos, sin TACC y suplementos dietarios.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
