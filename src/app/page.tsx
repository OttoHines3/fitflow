import Clock from "@/components/Clock";

export default function Home() {
  return (
    <main className=" min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/*Clock + Welcome */}
        <div>
          <Clock />
          <h1> Welcome back! USER 👋🏾</h1>
        </div>
      </div>
    </main>
  );
}
