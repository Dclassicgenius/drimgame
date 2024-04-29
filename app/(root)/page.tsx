import Anticipated from "@/components/cards/Anticipated";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the dazzling world of games</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Anticipated />
        <Anticipated />
      </div>
    </main>
  );
}
