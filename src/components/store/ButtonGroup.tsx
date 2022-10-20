import { ReactNode } from "react";

interface buttonGroupProps {
  children: ReactNode;
}

export default function buttonGroup({ children }: buttonGroupProps) {
  return (
    <div className="isolate flex w-fit rounded-md shadow-sm">{children}</div>
  );
}
