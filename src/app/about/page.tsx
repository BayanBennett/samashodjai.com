import { Door } from "@/components/Door";

import { H1 } from "@/components/typography/Headings";
const About = () => (
  <main className="p-2">
    <h2 className="border-b-4 relative pt-16 pl-6">
      <Door position="bottom" direction="up" />
      About
    </h2>
    <section className="p-2">
      <H1>Sama Shodjai</H1>
      <figure></figure>
      <p>Hello!</p>
      <p>
        I’m an architect-in-training with a particular interest in designs that
        foster meaningful relationships among those occupying the space.{" "}
      </p>
      <p>
        My experience growing up in various countries has provided me with a
        rich understanding and appreciation of the invaluable lessons that one
        can learn from every corner of the world. My diverse cultural upbringing
        has reinforced my belief that shedding prejudices and biases and
        embracing inclusivity is essential for creative design.{" "}
      </p>
      <p>
        Architecture has a profound impact on human behaviour and interactions.
        Naturally then, understanding how to cultivate healthy and meaningful
        relationships has been an area of interest I have delved into. I have
        found great value in the methodologies and approaches of life-coaching
        and have been involved both as a participant and facilitator in various
        coaching trainings across North America.{" "}
      </p>
      <p>
        Further, uplifting and meaningful connections with others has been a
        driving force in my involvement in community-building and social
        development projects for over 15 years. Some of my most treasured
        experiences have been working with children and youth in learning about
        applying their own unique talents and skills towards serving their local
        communities through simple yet meaningful service projects.{" "}
      </p>
      <p>
        My journey as a designer extends beyond the built environment, aiming to
        create spaces that nurture both connections and personal growth.
      </p>
      <h2 className="border-b-4">Resume</h2>
      <iframe></iframe>
    </section>
  </main>
);

export default About;
