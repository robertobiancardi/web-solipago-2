import Header from "./components/Header";
import Hero from "./components/Hero";
import Frentes from "./components/Frentes";
import Sectores from "./components/Sectores";
import Trayectoria from "./components/Trayectoria";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Frentes />
      <Sectores />
      <Trayectoria />
      <Footer />
    </main>
  );
}