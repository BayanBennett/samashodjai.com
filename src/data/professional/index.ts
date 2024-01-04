import { Contents } from "@/shared-types";
import {
  AutoCADIcon,
  SketchupIcon,
  TwinmotionIcon,
} from "@/components/icons/tools";
import * as penthouseImages from "@/data/professional/images/1. Penthouse";

export const title = "Professional";

export const contents: Contents = {
  penthouse: {
    ...penthouseImages,
    placeholder: false,
    title: "Penthouse",
    subtitle: "A penthouse unit in a six-storey building on West 4th Avenue",
    year: "2021",
    tools: [AutoCADIcon, SketchupIcon, TwinmotionIcon],
    description: [
      "The project involved the design of a six-story building on Vancouver's West 10th Avenue, featuring two underground parking levels, ground-floor commercial and retail spaces, and upscale residential suites above. My role encompassed designing floor plans for all levels, with a particular focus on crafting layout options, interior design styles, and material palettes for the penthouse suite. The penthouse design process entailed multiple client meetings to fully grasp their personal preferences, spatial needs, and priorities. Close collaboration with mechanical, electrical, and structural consultants was essential to ensure that the design harmonized with the building's systems and remained feasible.",
      "This project challenged me to balance elegance in design with the practical requirements of a mixed-use structure, necessitating both aesthetic finesse and functional coordination with the building's infrastructure.",
    ],
  },
};
