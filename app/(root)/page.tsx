import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the dazzling world of games</h1>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <p>Sign in to share your favourite games</p>
    </main>
  );
}
