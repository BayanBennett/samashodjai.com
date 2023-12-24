import { FunctionComponent } from "react";
import { StaticImageData } from "next/image";

export type Content = {
  title: string;
  subtitle: string;
  year: string;
  tools: FunctionComponent[];
  images: { image: StaticImageData; caption: string }[];
  description: string[];
  collaborators?: string[];
};

export type Contents = Record<string, Content>;
