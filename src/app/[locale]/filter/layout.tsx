import { Header } from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <Header />
      <div className="flex mx-auto w-full max-w-screen-xl fle-col">
        {children}
      </div>
    </div>
  );
}
