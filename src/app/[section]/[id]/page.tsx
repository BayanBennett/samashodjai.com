import type { FunctionComponent } from "react";
import type { Content } from "@/shared-types";
import * as data from "@/data";
import { DoorHeader } from "@/components/Door";
import { H1 } from "@/components/typography/Headings";
import {
  Carousel,
  CarouselContainer,
  CarouselItem,
} from "@/components/Carousel";
import Link from "next/link";
import Image from "next/image";
import { Overlay } from "@/components/Overlay";
import { Card, CardsContainer } from "@/components/Card";

export const generateStaticParams = async () =>
  Object.entries(data).flatMap(([section, value]) =>
    Object.keys(value).map((id) => ({ section, id })),
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
            <Tool />
          ))}
        </div>
        <Carousel images={images} />
        {description.map((text) => (
          <p>{text}</p>
        ))}
      </article>
      <DoorHeader position="bottom" direction="down" />
      <CardsContainer>
        {Object.entries(restOfContents).map(([id, content]) => (
          <Card key={id} href={`${section}/${id}`} {...content} />
        ))}
      </CardsContainer>
    </main>
  );
};

export default AcademicPages;
