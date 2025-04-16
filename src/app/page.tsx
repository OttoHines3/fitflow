import Clock from "@/components/Clock";

export default function Home() {
  return (
    <div>
      <Clock />
      <h2 className="text-lg front-semibold">Workout</h2>
      <p className="text-sm text-gray-600">✅ Completed</p>
    </div>
  );
}
