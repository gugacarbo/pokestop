import React, { FC, ReactNode } from "react";

const SettingsSection: FC<{
  id: string;
  title: string;
  children: ReactNode;
}> = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="md:bg-white md:dark:bg-gray-800 md:shadow-md md:shadow-gray-100 md:dark:shadow-xl md:dark:shadow-gray-900 mb-12 md:mb-0 px-4 md:px-6 py-6 rounded-lg w-full"
    >
      <div className="mb-6">
        <h3 className="font-title text-2xl text-gray-900 text-left dark:text-white leading-none">
          {title}
        </h3>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {children}
      </div>
    </section>
  );
};

export default SettingsSection;
