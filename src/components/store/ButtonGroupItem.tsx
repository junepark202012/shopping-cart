import { ReactNode } from "react";

interface buttonGroupItemProps {
  children: ReactNode;
  className?: string;
}

export default function buttonGroupItem({
  className,
  children,
}: buttonGroupItemProps) {
  return (
    <div
      className={`${className} w- relative flex h-9 w-9 items-center justify-center border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
    >
      {children}
    </div>
  );
}
