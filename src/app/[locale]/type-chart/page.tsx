import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { ChartTable } from "./chart-table";

function Page() {
  const t = useTranslations("pages");

  return (
    <Card className="mx-auto p-4 w-full">
      <CardHeader>
        <CardTitle>{t("type-chart.title")}</CardTitle>
        <CardDescription>{t("type-chart.description")}</CardDescription>
      </CardHeader>
      <ChartTable />
    </Card>
  );
}

export default Page;
