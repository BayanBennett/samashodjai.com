import { Door, DoorHeader } from "@/components/Door";

import { H1 } from "@/components/typography/Headings";
import Image from "next/image";
import SrcSamaShodjaiSquare from "../../../public/Sama-Shodjai-square.jpg";
const About = () => (
  <>
    <DoorHeader position="bottom" direction="up" title="About" />
    <section className="p-5">
      <H1 className="p-5">Sama Shodjai</H1>
      <div className="flex flex-col md:flex-row-reverse justify-stretch items-stretch">
        <div className="flex-1 p-5">
          <figure className="relative aspect-square">
            <Image
              className="object-contain"
              fill={true}
              src={SrcSamaShodjaiSquare}
              alt="Sama Shodjai"
              placeholder="blur"
            />
          </figure>
        </div>
        <div className="flex-1 prose px-5">
          <p>Hello!</p>
          <p>
            I’m an architect-in-training with a particular interest in designs that foster meaningful relationships among those who would occupy the space.
          </p>
          <p>
            Growing up in various countries has provided me with a rich understanding and appreciation of the invaluable lessons that one can learn from every corner of the world. My diverse cultural upbringing has allowed me to see that shedding prejudices and biases and embracing inclusivity is essential for creative design.
          </p>
          <p>
            Architecture has a profound impact on human behaviour and interactions. In fact, a thread throughout different stages of my life has been an interest in understanding how to cultivate healthy and meaningful relationships. I have found great value in the methodologies and approaches of life-coaching, in this regard, and have been involved both as a participant and facilitator in various coaching trainings across North America. This thread was also a driving force in my involvement in community-building and social development projects for over 15 years. Some of my most treasured experiences have been working with children and youth in learning about applying their own unique talents and skills towards serving their local communities through simple yet meaningful service projects.
          </p>
          <p className="pb-3">
            My journey as a designer was sparked at the young age of eleven, after a trip to Israel where my family and I visited the Baháʼí Gardens in the city of Haifa. The profound impact of these meticulously designed gardens and their surrounding buildings struck a chord within the heart and soul of that eleven-year-old, sowing a seed of fascination and curiosity about the nuances of the influence of design on the human condition. It became evident to me that design possesses the extraordinary ability to evoke awe, wonder, and serenity, while also holding a magnetic attraction to beauty. This seed slowly germinated and unfurled throughout the following two decades, expressing itself in various forms—from my early interest in the visual arts to my hobby of designing houses at the age of thirteen. Eventually, this passion propelled me towards the professional pursuit of architecture. My journey as a designer extends beyond the built environment, aiming to create spaces that nurture both meaningful connections and personal growth.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h2 className="border-b-4 relative px-10">Resume</h2>
      <iframe
        className="aspect-[17/22] border-none p-10"
        width="100%"
        src="/Sama%20Shodjai%20Resume.pdf"
      ></iframe>
    </section>
  </>
);

export default About;
