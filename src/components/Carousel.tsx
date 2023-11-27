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
import Link from "next/link";

export const CarouselContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [] = useState(0);

  return (
    <div className="relative">
      {/*<aside className="absolute top-0 bottom-0 left-0 flex flex-col justify-center">*/}
      {/*  <button className="text-4xl">〈</button>*/}
      {/*</aside>*/}
      <div className="carousel carousel-center p-4 space-x-4 rounded-box">
        {children}
      </div>
      {/*<aside className="absolute top-0 bottom-0 right-0 flex flex-col justify-center">*/}
      {/*  <button className="text-4xl">〉</button>*/}
      {/*</aside>*/}
    </div>
  );
};

export const CarouselItem: FunctionComponent<
  PropsWithChildren<{ id?: string }>
> = ({ children, id }) => (
  <div id={id} className="carousel-item w-full">
    {children}
  </div>
);

export const Carousel: FunctionComponent<{ images: StaticImageData[] }> = ({
  images,
}) => {
  const [currentImage, setCurrentImage] = useState<StaticImageData | null>(
    null,
  );
  const overlayRef = useRef<HTMLDialogElement | null>(null);
  const createOpenModal = (src: StaticImageData) => () => {
    setCurrentImage(src);
    console.log(src);
    // @ts-ignore
    overlayRef.current?.showModal();
  };
  return (
    <>
      <Overlay ref={overlayRef} src={currentImage} />
      <CarouselContainer>
        {images.map((src, index) => (
          <CarouselItem id={`image-${index}`} key={src.src}>
            <Image
              onClick={createOpenModal(src)}
              className="object-contain mx-auto aspect-video"
              placeholder="blur"
              src={src}
              alt={""}
            />
          </CarouselItem>
        ))}
      </CarouselContainer>
      <div className="flex flex-row flex-wrap justify-center w-full p-1 gap-1">
        {images.map((src, index) => (
          <Link href={`#image-${index}`} key={src.src} scroll={false}>
            <button className="btn btn-circle btn-xs overflow-hidden">
              <Image
                className="object-cover"
                src={src}
                width={24}
                height={24}
                alt={""}
              />
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};
