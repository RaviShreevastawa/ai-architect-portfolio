import Navbar from "@/components/layout/Navbar";
import AIPlayground from "@/components/ai/AIPlayground";

export default function AIPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen flex justify-center">
        <AIPlayground />
      </main>
    </>
  );
}
