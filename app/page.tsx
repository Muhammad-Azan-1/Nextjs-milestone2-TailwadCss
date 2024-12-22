import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Hero2 from "@/components/Hero2/Hero2";
import Hero3 from "@/components/Hero3/Hero3";
import Hero4 from "@/components/Hero4/Hero4";

export default function Home() {
  return (
    <>
      <section className="h-[85vh] md:h-screen w-full bg-hero-gradient bg-center bg-cover bg-no-repeat bg-fixed">
        <Header />
        <Hero />
      </section>

      <section className="h-auto pb-4 md:pb-0   md:h-[140vh] w-full bg-[#F5F5F5]">
        <Hero2 />
      </section>

      <section className="h-[83vh] w-full bg-hero-gradient-2 bg-center bg-cover bg-no-repeat bg-fixed">
        <Hero3 />
      </section>

      <section className="h-auto w-full  bg-[#F5F5F5]">
        <Hero4 />
      </section>
    </>
  );
}

// https://websitedemos.net/?page-builder=elementor
