import { BarChart3, Search, LayoutGrid, Sparkles } from "lucide-react";

const frentes = [
  {
    titulo: "Tableros de mando (BI)",
    descripcion:
      "Vemos lo que hoy no se ve. Conectado a lo que ya usás.",
    Icono: BarChart3,
  },
  {
    titulo: "Scouting tecnológico",
    descripcion: "Elegimos por vos. Evaluamos, filtramos, implementamos.",
    Icono: Search,
  },
  {
    titulo: "Aplicaciones a medida",
    descripcion:
      "Cuando no existe el software para tu problema, lo construimos.",
    Icono: LayoutGrid,
  },
  {
    titulo: "IA",
    descripcion: "Solo si estás listo para eso.",
    Icono: Sparkles,
  },
];

export default function Frentes() {
  return (
    <section className="max-w-[1400px] mx-auto px-12 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {frentes.map((frente) => (
          <div
            key={frente.titulo}
            className="border border-[#C7D5E3] rounded-xl p-6"
          >
            <div className="w-10 h-10 rounded-full bg-[#0F2E4D]/10 flex items-center justify-center mb-4">
              <frente.Icono className="w-5 h-5 text-[#0F2E4D]" />
            </div>
            <h3 className="text-[#0F2E4D] text-lg font-semibold mb-2">
              {frente.titulo}
            </h3>
            <p className="text-[#0F2E4D] text-sm leading-relaxed opacity-70">
              {frente.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}