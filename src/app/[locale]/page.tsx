import { Button } from "@/components/ui/button";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("filters");

  return (
    <main className="flex flex-col justify-between items-center">
      Home
      <Link href="/filter">
        <Button variant="link" className="capitalize">
          {t("short-name")}
        </Button>
      </Link>
    </main>
  );
}
