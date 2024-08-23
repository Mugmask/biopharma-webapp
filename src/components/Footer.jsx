import Logo from "../assets/logo_biopharma.jpg";
import { Instagram } from "lucide-react";
import Whatsapp from "../assets/whatsapp.svg";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-row justify-center mb-4 gap-3">
          <img src={Logo} width="100" className="rounded" />
          <div className="flex flex-col gap-4 justify-center">
            <a href="https://www.instagram.com/biopharmadistribuidora/" target="blank" className="flex gap-3">
              <Instagram /> <p>biopharmadistribuidora</p>
            </a>
            <a href="https://wa.me/+5492234399100" target="blank" className="flex gap-3">
              <img src={Whatsapp} alt="Your SVG" target="blank" />
              <p>+5492234399100</p>
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm">
            Distribuidora de productos naturales aptos para veganos, sin TACC y suplementos dietarios.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
