import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Architecture from "@/components/sections/Architecture";
import Projects from "@/components/sections/Projects";
import AIPlayground from "@/components/ai/AIPlayground";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Architecture />
        <Projects />
        <AIPlayground/>
      </main>
    </>
  );
}
