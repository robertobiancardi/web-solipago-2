import { Briefcase, Truck, Settings, Wrench } from "lucide-react";

const sectores = [
  {
    texto: "Workflows comerciales",
    Icono: Briefcase,
  },
  {
    texto: "Logística",
    Icono: Truck,
  },
  {
    texto: "Programación de la producción",
    Icono: Settings,
  },
  {
    texto: "Mantenimiento de líneas",
    Icono: Wrench,
  },
];

export default function Sectores() {
  return (
    <section className="bg-[#0F2E4D] pt-10 py-2">
      <div className="max-w-[1400px] mx-auto px-12">
        <h2 className="text-white text-3xl font-semibold mb-10">
          Soluciones ágiles para liberar el potencial de tu estructura
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sectores.map((sector) => (
            <div
              key={sector.texto}
              className="border border-white/15 rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <sector.Icono className="w-5 h-5 text-white" />
              </div>
              <p className="text-[#DCE6EE] text-base leading-relaxed">
                {sector.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}