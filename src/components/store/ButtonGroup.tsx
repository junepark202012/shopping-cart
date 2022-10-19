import { ReactNode } from "react";

interface buttonGroupProps {
  children: ReactNode;
}

export default function buttonGroup({ children }: buttonGroupProps) {
  return (
    <span className="isolate inline-flex w-fit rounded-md shadow-sm">
      {children}
    </span>
  );
}
