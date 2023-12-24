import { FunctionComponent, PropsWithChildren } from "react";

export const H1: FunctionComponent<
  PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <h1 className={`prose p-5 text-2xl ${className ?? ""}`}>{children}</h1>
);
