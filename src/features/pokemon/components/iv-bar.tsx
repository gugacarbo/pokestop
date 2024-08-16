import { Progress } from "@/components/ui/progress";

function IvBar({ value, disabled }: { value: number; disabled?: boolean }) {
  const min = 0;
  const max = 17;

  const parsed = (Math.min(Math.max(value, min), max) / max) * 100;

  return (
    <div className="relative flex items-center bg-popover rounded-full w-full overflow-hidden center">
      <div className="z-20 absolute grid grid-cols-3 w-full h-full">
        <div className="bg-popover ml-auto w-[2px] h-full translate-x-[50%]"></div>
        <div className="bg-popover ml-auto w-[2px] h-full translate-x-[50%]"></div>
      </div>
      <Progress
        disabled={disabled}
        value={parsed < 0.98 * max ? 0.995 * parsed : parsed}
        className="h-2"
        barClassName="bg-orange-400 rounded-r-full"
      />
    </div>
  );
}

export { IvBar };
