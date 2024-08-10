import { Header } from "../filter/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <Header />
      <div className="flex flex-col mx-auto w-full max-w-screen-xl">
        {children}
      </div>
    </div>
  );
}
