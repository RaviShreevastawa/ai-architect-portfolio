import RealtimeMetrics from "@/components/realtime/RealtimeMetrics";
import Navbar from "@/components/layout/Navbar";

export default function DashboardPage() {
  return (
    <>
    <Navbar /> 
    <main className="pt-24 min-h-screen">
      <h1 className="text-4xl font-bold flex justify-center">
        Real-Time Portfolio Intelligence
      </h1>

      <RealtimeMetrics />
    </main>
    </>
  );
}
