import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Droplet } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner mejorado */}
      <header className="relative bg-green-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/fotos-premium/botella-locion-sienta-mesa-al-lado-botilla-locion_337384-178021.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Bienvenido a Biopharma</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              Distribuidora de productos naturales aptos para veganos, sin TACC y suplementos dietarios.
            </p>
            <Link
              to="/productos"
              className="inline-flex items-center px-8 py-4 bg-[#009446] text-white rounded-full text-lg font-semibold hover:bg-green-500  transition-colors animate-fade-in-up animation-delay-400"
            >
              Explora Nuestros Productos
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Características destacadas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
            <p className="text-gray-600">Productos orgánicos y naturales para tu bienestar</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certificados</h3>
            <p className="text-gray-600">Todos nuestros productos cuentan con certificaciones de calidad</p>
          </div>
          <div className="text-center">
            <Droplet className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sin TACC</h3>
            <p className="text-gray-600">Aptos para celíacos y personas con sensibilidad al gluten</p>
          </div>
        </div>

        {/* Marcas con las que trabajamos */}
        <section className="bg-gray-100 p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-8 text-center">Marcas con las que Trabajamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={`https://acdn.mitiendanube.com/stores/001/129/542/products/logo-natier11-7233c2773251619b5b16415902247262-1024-1024.jpg`}
                  alt={`Logo de Marca ${index}`}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
