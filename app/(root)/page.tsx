import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Welcome</h1>
      <UserButton afterSignOutUrl="/" />
      <p>Sign in to see your favourite games</p>
    </main>
  );
}
