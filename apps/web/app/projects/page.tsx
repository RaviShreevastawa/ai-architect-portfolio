import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen flex justify-center">
        <Projects />
      </main>
    </>
  );
}
