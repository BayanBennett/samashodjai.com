import type { FunctionComponent } from "react";
import * as data from "@/data";
import { DoorHeader } from "@/components/Door";
import { H1 } from "@/components/typography/Headings";
import { Carousel } from "@/components/Carousel";
import Link from "next/link";
import { Card, CardsContainer } from "@/components/Card";

export const generateStaticParams = async () =>
  Object.entries(data).flatMap(([section, value]) =>
    Object.keys(value.contents).map((id) => ({ section, id })),
  );

const AcademicPages: FunctionComponent<{
  params: { id: string; section: keyof typeof data };
}> = ({ params: { id, section } }) => {
  const { [id]: thisContents, ...restOfContents } = data[section].contents;
  const { title, subtitle, description, tools, images } = thisContents;

  return (
    <main className="container relative p-2">
      <Link href={`/${section}`}>
        <DoorHeader position="bottom" direction="up" title={section} />
      </Link>
      <article className="p-2">
        <H1>{title}</H1>
        <h2>{subtitle}</h2>
        <div>
          {tools.map((Tool) => (
            <Tool key={Tool.displayName} />
          ))}
        </div>
        <Carousel images={images} />
        {description.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </article>
      <DoorHeader position="bottom" direction="down" />
      <CardsContainer>
        {Object.entries(restOfContents).map(([id, content]) => (
          <Card key={id} href={`/${section}/${id}`} {...content} />
        ))}
      </CardsContainer>
    </main>
  );
};

export default AcademicPages;
