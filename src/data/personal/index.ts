import { Contents } from "@/shared-types";
import {
  ClayIcon,
  MixerIcon,
  ToothpickIcon,
  WhiskIcon,
} from "@/components/icons/tools";
import miniatureGardensImages from "@/data/personal/images/1. Miniature gardens";
import cheesecakeImages from "@/data/personal/images/2. Cheesecake";

export const title = "Personal";

export const contents: Contents = {
  "miniature-gardens": {
    title: "Miniature Gardens",
    subtitle: "Polymer clay sculptures",
    year: "2018-2021",
    tools: [ClayIcon, ToothpickIcon],
    images: miniatureGardensImages,
    description: [
      "While living in Israel, I found inspiration in the gardens surrounding the Bahá’í holy places in Haifa and Akko. I decided to recreate their beauty using oven-cured polymer clay, a medium I've enjoyed working with since childhood. This endeavor challenged me to refine my art by working at smaller scales while preserving intricate details.",
      "My process begins with immersion in the actual gardens, identifying elements feasible for miniature recreation. I photograph the sites from various angles and the begin with sketching in plan, followed by building three-dimensional elements with clay over the sketch. This process can be iterative, requiring multiple attempts to achieve precision. Each piece I create hones my patience, creativity, and attention to detail, making it a meditative yet systematic journey.",
    ],
  },
  "cheesecake-galore": {
    title: "Cheesecake Galore",
    subtitle: "Developing delicious cheesecakes",
    year: "2019-2021",
    tools: [MixerIcon, WhiskIcon],
    images: cheesecakeImages,
    description: [
      "Learning to bake cheesecakes has become a creative outlet and a journey of culinary discovery. Starting with no prior baking experience, I embarked on a series of experiments to perfect the art of cheesecake making.",
      "The process involves achieving the right balance: a soft yet non-soggy crust, a fluffy yet moist filling, and a golden yet crack-free top, all while ensuring the toppings complement without overpowering the flavor. This baking journey has imparted lessons in patience, precision, and creativity.",
      "Baking is not just a hobby; it's also a form of engaging with the community around me. I've shared my cheesecakes at office meetings, community gatherings, and friends' birthdays. Providing this treat for others has allowed me to hone my skills and explore new techniques like crafting decorative caramel bowls or mastering gluten-free cheesecakes with each new bake.",
    ],
  },
};
