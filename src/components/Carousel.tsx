"use client";

import {
  FunctionComponent,
  MouseEventHandler,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import { JSX } from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;
import Image, { StaticImageData } from "next/image";
import { Overlay } from "@/components/Overlay";
import { create } from "node:domain";

export const CarouselContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [] = useState(0);

  return (
    <div className="relative">
      {/*<aside className="absolute top-0 bottom-0 left-0 flex flex-col justify-center">*/}
      {/*  <button className="text-4xl">〈</button>*/}
      {/*</aside>*/}
      <div className="carousel carousel-center p-4 space-x-4  rounded-box overflow-x-scroll">
        {children}
      </div>
      {/*<aside className="absolute top-0 bottom-0 right-0 flex flex-col justify-center">*/}
      {/*  <button className="text-4xl">〉</button>*/}
      {/*</aside>*/}
    </div>
  );
};

export const CarouselItem: FunctionComponent<PropsWithChildren> = ({
  children,
}) => <div className="carousel-item w-full">{children}</div>;

export const Carousel: FunctionComponent<{ images: StaticImageData[] }> = ({
  images,
}) => {
  const [currentImage, setCurrentImage] = useState<StaticImageData | null>(
    null,
  );
  const overlayRef = useRef<HTMLDialogElement | null>(null);
  const createOpenModal = (src: StaticImageData) => () => {
    setCurrentImage(src);
    // @ts-ignore
    overlayRef.current?.showModal();
  };
  return (
    <>
      <Overlay ref={overlayRef} src={currentImage} />
      <CarouselContainer>
        {images.map((src) => (
          <CarouselItem key={src.src}>
            <Image
              onClick={createOpenModal(src)}
              className="object-contain mx-auto"
              placeholder="blur"
              height={360}
              src={src}
              alt={""}
            />
          </CarouselItem>
        ))}
      </CarouselContainer>
    </>
  );
};
