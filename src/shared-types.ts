import { FunctionComponent } from "react";
import { StaticImageData } from "next/image";

export type Content =
  | {
      placeholder: false;
      title: string;
      subtitle: string;
      year: string;
      tools: FunctionComponent[];
      images: { image: StaticImageData; caption: string }[];
      thumbnail: StaticImageData;
      description: string[];
      collaborators?: string[];
    }
  | {
      placeholder: true;
      title: string;
      subtitle: string;
      thumbnail: StaticImageData;
    };

export type Contents = Record<string, Content>;
