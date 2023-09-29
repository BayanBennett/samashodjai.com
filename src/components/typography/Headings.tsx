import { FunctionComponent, PropsWithChildren } from "react";

export const H1: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <h1 className="text-2xl">{children}</h1>
);
