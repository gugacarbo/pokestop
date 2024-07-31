import { Header } from "./header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      {children}
    </div>
  );
}
