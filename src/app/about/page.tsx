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
            I’m an architect-in-training with a particular interest in designs
            that foster meaningful relationships among those occupying the
            space.{" "}
          </p>
          <p>
            My experience growing up in various countries has provided me with a
            rich understanding and appreciation of the invaluable lessons that
            one can learn from every corner of the world. My diverse cultural
            upbringing has reinforced my belief that shedding prejudices and
            biases and embracing inclusivity is essential for creative design.{" "}
          </p>
          <p>
            Architecture has a profound impact on human behaviour and
            interactions. Naturally then, understanding how to cultivate healthy
            and meaningful relationships has been an area of interest I have
            delved into. I have found great value in the methodologies and
            approaches of life-coaching and have been involved both as a
            participant and facilitator in various coaching trainings across
            North America.{" "}
          </p>
          <p>
            Further, uplifting and meaningful connections with others has been a
            driving force in my involvement in community-building and social
            development projects for over 15 years. Some of my most treasured
            experiences have been working with children and youth in learning
            about applying their own unique talents and skills towards serving
            their local communities through simple yet meaningful service
            projects.{" "}
          </p>
          <p className="pb-3">
            My journey as a designer extends beyond the built environment,
            aiming to create spaces that nurture both connections and personal
            growth.
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
