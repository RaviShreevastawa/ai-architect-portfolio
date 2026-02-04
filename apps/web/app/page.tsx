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
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>
        <section id="architecture" className="scroll-mt-24">
          <Architecture />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="ai" className="scroll-mt-24">
          <AIPlayground />
        </section>

        {/* Contact (optional later) */}
        {/* <section id="contact" className="scroll-mt-24">
          <Contact />
        </section> */}
      </main>
    </>
  );
}
