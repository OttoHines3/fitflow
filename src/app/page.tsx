import Clock from "@/components/Clock";

export default function Home() {
  return (
    <main className=" min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/*Clock + Welcome */}
        <div>
          <Clock />
          <h1 className="text-green-800"> Welcome back! USER 👋🏾</h1>
        </div>
        {/*Cards Section: Workout, Macros*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="shadow-md">
            <h1 className="text-green-800">Workouts</h1>
          </div>

          <div className="shadow-md">
            <h1 className="text-green-800">Protein</h1>
          </div>

          <div className="shadow-md">
            <h1 className="text-green-800">Water</h1>
          </div>
        </div>
        {/*Habit Checklist Section */}
        <div className="shadow-md">
          <h1 className="text-green-800">
            Daily Habits
          </h1>
        </div>
      </div>
    </main>
  );
}
