import { Description } from "app/components/Home/Description";
import { Hero } from "app/components/Home/Hero";
import { MainProducts } from "app/components/Home/MainProducts";

export default function Home() {
  console.log("Hola mundo");
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
