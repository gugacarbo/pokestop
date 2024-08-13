import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

function SettingsSection({
  id,
  children,
}: {
  id: "candidate" | "output-data" | "leagues" | "level-caps";
  children: React.ReactNode;
}) {
  const t = useTranslations("settings");

  return (
    <Card id={id} className="w-full">
      <Accordion type="single" collapsible defaultValue={id}>
        <AccordionItem value={id}>
          <CardHeader>
            <AccordionTrigger>
              <div className="flex flex-col items-start gap-1 w-full">
                <CardTitle className="text-2xl leading-none">
                  {t(`${id}.title`)}
                </CardTitle>
                {t(`${id}.description`) && (
                  <CardDescription>{t(`${id}.description`)}</CardDescription>
                )}
              </div>
            </AccordionTrigger>
          </CardHeader>
          <AccordionContent>
            <CardContent className="divide-y divide-muted">
              {children}
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

export { SettingsSection };
