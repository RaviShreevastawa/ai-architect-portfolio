import Navbar from "@/components/layout/Navbar";
import Architecture from "@/components/sections/Architecture";

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen flex justify-center">
        <Architecture />
      </main>
    </>
  );
}
