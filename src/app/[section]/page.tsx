import { DoorHeader } from "@/components/Door";
import * as data from "@/data";

import { Card, CardsContainer } from "@/components/Card";
import { FunctionComponent } from "react";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { section: keyof typeof data };
};

export const generateMetadata = async (
  { params }: Props,
  parentPromise: ResolvingMetadata,
): Promise<Metadata> => {
  const { section } = params;

  const { title } = data[section];
  const parent = await parentPromise;
  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
  };
};

const SectionPages: FunctionComponent<{
  params: { section: keyof typeof data };
}> = ({ params: { section } }) => {
  const { title, contents } = data[section];
  return (
    <>
      <DoorHeader position="bottom" direction="up" title={title} />
      <CardsContainer>
        {Object.entries(contents).map(([id, content]) => (
          <Card key={id} href={`/${section}/${id}`} {...content} />
        ))}
      </CardsContainer>
    </>
  );
};

export default SectionPages;
