import { FunctionComponent } from "react";
import { StaticImageData } from "next/image";

export type Content = {
  title: string;
  subtitle: string;
  year: string;
  tools: FunctionComponent[];
  images: StaticImageData[];
  description: string[];
  collaborators?: string[];
};

export type Contents = Record<string, Content>;
