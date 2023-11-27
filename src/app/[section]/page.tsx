import { DoorHeader } from "@/components/Door";
import * as data from "@/data";

import { Card, CardsContainer } from "@/components/Card";
import { FunctionComponent } from "react";

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
