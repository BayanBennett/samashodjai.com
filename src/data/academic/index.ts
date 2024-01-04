import { Contents } from "@/shared-types";
import {
  AdobeIllustratorIcon,
  AdobePhotoshopIcon,
  AffinityDesignerIcon,
  AffinityPhotoIcon,
  AutoCADIcon,
  RevitIcon,
  RhinoIcon,
  SketchupIcon,
  TwinmotionIcon,
} from "@/components/icons/tools";

import * as singularRoomPart2Images from "@/data/academic/images/0. A Singular Room-Part 2";
import * as singularRoomPart1Images from "@/data/academic/images/1. A Singular Room-Part 1";
import * as systemlessBuildingImages from "@/data/academic/images/2. The Systemless Building";
import * as edgeConditionImages from "@/data/academic/images/3. Edge Condition";
import * as flexRoomCoOpImages from "@/data/academic/images/4. Flex Room Co-Op";
import * as artistsResidenceImages from "@/data/academic/images/5. Artist's Residence";
import * as borrowedImages from "@/data/academic/images/6. Borrowed";
import * as wallSectionsImages from "@/data/academic/images/7. Wall Sections";
import * as haffendenHouseImages from "@/data/academic/images/8. Haffenden House";

export const title = "Academic";

export const contents: Contents = {
  "a-singular-room-part-2": {
    ...singularRoomPart2Images,
    placeholder: true,
    title: "A Singular Room – Part 2",
    subtitle:
      "Graduate project: a proposal for Canada’s National Baháʼí House of Worship",
  },
  "a-singular-room-part-1": {
    ...singularRoomPart1Images,
    placeholder: false,
    title: "A Singular Room – Part 1",
    subtitle:
      "Graduate project: an architectural exploration of Baháʼí Houses of Worship",
    year: "2022-2023",
    tools: [
      AutoCADIcon,
      SketchupIcon,
      AdobeIllustratorIcon,
      AdobePhotoshopIcon,
      AffinityDesignerIcon,
    ],
    description: [
      "Architecture has long served to translate spiritual teachings to the built environment. The Baháʼí Faith, the most recent world region, teaches the oneness of God, of religion, and of humanity. Over the past century or so, the Baháʼí community has been exploring how to express these teachings through the architecture of its places of worship, called Baháʼí Houses of Worship. Between 1912 and 2016, eight continental Houses of Worship were constructed worldwide. A new phase of development is now under way focusing on Houses of Worship at the local and national levels. Designing at the national level presents a unique challenge for the Baháʼí community, as there are limited existing examples to draw from.",
      "Within the defined spatial parameters of a Baháʼí House of Worship lies the challenge of designing a singular room that is deemed sacred to all—regardless of race, gender, age, or religious background—while also embodying cultural elements that tie the temple to its particular site and the diverse population that it seeks to welcome. This project aims to explore the intricacies and considerations involved in the design of a national House of Worship, using Canada as a case study.",
      "Part 1 of this project consists of the research and analysis of Baháʼí Houses of Worship, of which selected pages are shown above. The design component of this project is under PART 2.",
      "<a href='/SINGULAR ROOM PART 1.pdf'>Link to the full research document</a>",
    ],
  },
  "the-systemless-building": {
    ...systemlessBuildingImages,
    placeholder: false,
    title: "The Systemless Building",
    subtitle: "Architecture comprehensive studio",
    year: "2022",
    collaborators: ["Anis Hatampour"],
    tools: [
      AutoCADIcon,
      SketchupIcon,
      AdobeIllustratorIcon,
      AdobePhotoshopIcon,
      AffinityDesignerIcon,
    ],
    description: [
      `The project's goal was to create a "systemless" eco-community educational center in Fraser Lake, using passive design to minimize its carbon footprint and ensure year-round thermal comfort without mechanical systems. The final form of the building emerged through a series of energy and heat simulations to examine the performance of the building, accompanied by an iterative process of adjusting the building mass and the thickness of the envelope. Interior layouts were based on heat generation by occupants and occupancy hours. The challenge was to incorporate natural light and ventilation while maintaining energy efficiency and sustainable building materials. The final design sought to offer a welcoming and functional space for the Fraser Lake community to gather, work, harvest, and learn collaboratively about sustainable year-round food production.`,
    ],
  },
  "edge-condition": {
    ...edgeConditionImages,
    placeholder: false,
    title: "Edge Condition",
    subtitle: "An exploration of a tower responsive to site and context",
    year: "2022",
    tools: [AutoCADIcon, SketchupIcon, AffinityDesignerIcon, AffinityPhotoIcon],
    description: [
      "This project tasked us with designing a tower in Vancouver's Waterfront Station area that responds to a single characteristic of the site. Early in the analysis, it became clear to me that there is a particular “edge condition” in relation to various elements of the city: it lies at the edge of downtown, the edge of water, the edge of historic Gastown and the modern financial district, as well as the edge, or terminus, of major transit lines.",
      "The design's triangular shape evolved from responses to three critical edges: Waterfront Station, the Landing building, and the northern waterfront. Programmatically, the hotel maximizes northern views, residential units embrace southern natural light, and offices face west for transit accessibility. Distinct façades, mirroring the external edges, differentiate the tower’s internal program edges, creating a visible reveal in the triangular mass. This reveal extends into large openings, providing ventilation and light to the central courtyard.",
      `The tower embodies the site's “edge conditions”, unifying diverse elements into an architectural response that harmonizes with the surrounding urban fabric.`,
    ],
  },
  "flex-room-co-op": {
    ...flexRoomCoOpImages,
    placeholder: false,
    title: "Flex Room Co-Op",
    subtitle: "An architecture studio on the missing-middle",
    year: "2021",
    tools: [AutoCADIcon, SketchupIcon, TwinmotionIcon, AffinityDesignerIcon],
    description: [
      "This project drew inspiration from the Coast Salish Feast Dish, revealing cultural values of wealth redistribution through selfless exchange. The cooperative housing complex embodies these principles, fostering exchange at multiple levels. At the heart of the design is a community flex-room that can transform into an extra bedroom for neighboring units, reducing family relocations and redistributing residential space as communal wealth. This room belongs to the cooperative, and its usage is decided collectively. To honor the artifact's influence, the Dish's curve is mirrored in the roof design, not only for aesthetics but also guiding rainwater to on-site raingardens. This project expresses a commitment to cultural values, promoting selfless exchange and community cohesion.",
    ],
  },
  "artists-residence": {
    ...artistsResidenceImages,
    placeholder: false,
    title: "Artist's Residence",
    subtitle: "An exercise in developing construction documents",
    year: "2022",
    tools: [AutoCADIcon, SketchupIcon, TwinmotionIcon],
    description: [
      "This project aimed to develop a set of partial construction documents for a floating house on the south arm of the Fraser River. The focus was on learning how to effectively communicate design and construction information to contractors. The program needed to combine a residence with a work-space component, and the design required to adhere to building codes and certain design constraints. The resulting construction document package included drawings and technical specifications. During the preliminary design phase, I sought to break away from conventional house layouts, embracing creativity and creating enjoyable spaces fitting for an artist's residence.",
    ],
  },
  borrowed: {
    ...borrowedImages,
    placeholder: false,
    title: "Borrowed",
    subtitle: "A conceptual design for a library and car charging station",
    year: "2018",
    collaborators: ["Allexis Cowie", "Vanessa Aragona"],
    tools: [
      AutoCADIcon,
      RevitIcon,
      RhinoIcon,
      AdobeIllustratorIcon,
      AdobePhotoshopIcon,
    ],
    description: [
      "This project involved designing a unique combination of a library and an electric car charging station. Central to the idea of a library is the act of borrowing, which became the guiding principle of our project; we explored abstract notions like space, time, and light as lending possibilities. The library's form emerged from borrowing air-rights from neighboring lots and optimizing light captured through carefully angled cuts. Inside, we treated car-sharing akin to lending books, with a central elevator charging the cars while serving as vertical circulation. On the exterior, thoughtful plantings, benches, and paving patterns enabled discreet car passage, borrowing space from pedestrians. The design in this project harmoniously merged the library's borrowing tradition with contemporary notions of shared resources and sustainable mobility.",
    ],
  },
  "wall-sections": {
    ...wallSectionsImages,
    placeholder: false,
    title: "Wall Sections",
    subtitle: "An exercise in understanding steel and masonry construction",
    year: "2022",
    tools: [AutoCADIcon],
    description: [
      "The objectives of these assignments were to better understand the principles of loadbearing masonry and masonry veneer construction as well as heavy steel framing systems. By putting together these detailed wall section drawings, I familiarized myself with the various components and accessories related to each type of construction and learned about integrating the required building enclosure components and addressing issues of fire protection.",
    ],
  },
  "haffenden-house": {
    ...haffendenHouseImages,
    placeholder: false,
    title: "Haffenden House",
    subtitle: "An architectural study in Revit",
    year: "2017",
    tools: [RevitIcon],
    description: [
      "This project focused on gaining proficiency in Revit through a study of the Haffenden House, a modest yet renowned work by PARA in Syracuse, USA. I began by carrying out a detailed analysis of the house, which laid the foundation for preparing the final drawings, including plans, sections, and rendered images, all generated within Revit.",
      "Designed as a writing studio, the Haffenden House offers a peaceful retreat for reading and reflection. It is comprised of a garage and storage area on the first floor, a writing desk, library, and hot tub on the second, and a captivating bowl-shaped space on the third, accommodating diverse activities.",
      "Through this project, I not only honed my Revit skills but also gained a deeper appreciation for the thoughtful design behind this modest yet remarkable architectural gem.",
    ],
  },
};
