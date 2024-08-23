import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#006b33] text-white text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Biopharma</h1>
        <p className="text-lg">
          Distribuidora de productos naturales aptos para veganos, sin TACC y suplementos dietarios.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Sección de Ver Productos */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4">Explora Nuestros Productos</h2>
          <p className="text-gray-700 mb-4">
            Descubre nuestra amplia gama de productos naturales que te ayudarán a llevar un estilo de vida saludable.
          </p>
          <Link
            to="/productos"
            className="inline-flex items-center px-6 py-3 bg-[#006b33] text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Ver Productos
            <ArrowRight className="ml-2" />
          </Link>
        </section>

        {/* Sección de Crear Pedido */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Crea tu Pedido</h2>
          <p className="text-gray-700 mb-4">
            Es fácil y rápido. Selecciona los productos que necesitas y genera tu pedido directamente desde nuestra
            página.
          </p>
          <Link
            to="/crear-pedido"
            className="inline-flex items-center px-6 py-3 bg-[#006b33] text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Crear Pedido
            <ArrowRight className="ml-2" />
          </Link>
        </section>
      </main>
    </div>
  );
}
