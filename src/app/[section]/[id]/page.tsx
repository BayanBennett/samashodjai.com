import type { FunctionComponent } from "react";
import * as data from "@/data";
import { DoorHeader } from "@/components/Door";
import { H1 } from "@/components/typography/Headings";
import { Carousel } from "@/components/Carousel";
import Link from "next/link";
import { Card, CardsContainer } from "@/components/Card";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string; section: keyof typeof data };
};

export const generateMetadata = async (
  { params }: Props,
  parentPromise: ResolvingMetadata,
): Promise<Metadata> => {
  const { section, id } = params;
  const { title, subtitle } = data[section].contents[id];
  return {
    title,
    description: subtitle,
  };
};

export const generateStaticParams = async () =>
  Object.entries(data).flatMap(([section, value]) =>
    Object.keys(value.contents).map((id) => ({ section, id })),
  );

const AcademicPages: FunctionComponent<Props> = ({
  params: { id, section },
}) => {
  const { [id]: thisContents, ...restOfContents } = data[section].contents;
  const restOfContentsEntries = Object.entries(restOfContents);
  if (thisContents.placeholder === true) {
    return null;
  }
  const { title, subtitle, description, year, collaborators, tools, images } =
    thisContents;

  return (
    <main className="relative">
      <Link href={`/${section}`}>
        <DoorHeader position="bottom" direction="up" title={section} />
      </Link>
      <article className="p-5">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <H1>{title}</H1>
            <p className="prose px-5">{subtitle}</p>
            <p className="prose px-5">{year}</p>
            {Array.isArray(collaborators) ? (
              <p className="prose px-5 pt-5">
                Collaborators: {collaborators.join(", ")}
              </p>
            ) : null}
          </div>
          <div className="p-5 flex-none">
            {tools.map((Tool) => (
              <Tool key={Tool.displayName} />
            ))}
          </div>
        </div>
        <Carousel images={images} />
        {description.map((text) => (
          <p
            className="prose max-w-none px-5 my-5"
            key={text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </article>
      {restOfContentsEntries.length > 0 ? (
        <>
          <DoorHeader
            position="bottom"
            direction="down"
            title={`${section} Continued`}
          />
          <CardsContainer>
            {restOfContentsEntries.map(([id, content]) => (
              <Card key={id} href={`/${section}/${id}`} {...content} />
            ))}
          </CardsContainer>
        </>
      ) : null}
    </main>
  );
};

export default AcademicPages;
