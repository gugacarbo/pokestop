function MinMaxDisplay({
  min = 0,
  max = 0,
  title,
  icon,
}: {
  min?: number;
  max?: number;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-start p-2 border border-border rounded-md">
      <div className="flex flex-col items-center mr-2 leading-none">
        {icon}
        <small className="text-xs leading-none">{title}</small>
      </div>
      <div className="gap-1 grid grid-cols-2 leading-none">
        <div className="text-blue-600 dark:text-blue-400">
          <p className="min-w-20 text-xs leading-none">Min</p>
          <p className="font-medium text-xl leading-none tabular-nums">
            {min.toFixed(2)}
          </p>
        </div>
        <div className="text-red-600 dark:text-red-400">
          <p className="min-w-20 text-xs leading-none">Max</p>
          <p className="font-medium text-xl leading-none tabular-nums">
            {max.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export { MinMaxDisplay };
