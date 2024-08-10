import { FC, PropsWithChildren } from "react";

const SettingsSectionItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-between items-center space-x-4 py-5 first:pt-0 last:pb-0 w-full">
      {children}
    </div>
  );
};

export default SettingsSectionItem;
