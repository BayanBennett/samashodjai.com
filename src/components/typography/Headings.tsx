import { FunctionComponent, PropsWithChildren } from "react";

export const H1: FunctionComponent<
  PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => (
  <h1 className={`${className} text-2xl`}>{children}</h1>
);
