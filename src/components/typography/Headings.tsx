import { FunctionComponent, PropsWithChildren } from "react";

export const H1: FunctionComponent<
  PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <h1 className={`p-3 text-2xl ${className}`}>{children}</h1>
);
