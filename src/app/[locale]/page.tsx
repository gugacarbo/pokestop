import { Link } from "@/lib/navigation";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      Home
      <Link href="/filter">Filter</Link>
    </main>
  );
}
