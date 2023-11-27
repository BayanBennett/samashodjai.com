"use client";

import {
  forwardRef,
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
}) => (
  <div className="p-3">
    <div className="carousel carousel-center space-x-4 aspect-video shadow rounded w-full">
      {children}
    </div>
  </div>
);

export const CarouselItem: FunctionComponent<
  PropsWithChildren<{ id?: string }>
> = ({ children, id }) => (
  <div
    id={id}
    className="flex relative carousel-item w-full place-items-center"
  >
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
  const scrollRef = useRef<HTMLElement | null>(null);
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
              fill={true}
              onClick={createOpenModal(src)}
              className="object-contain mx-auto"
              placeholder="blur"
              src={src}
              alt={""}
            />
          </CarouselItem>
        ))}
      </CarouselContainer>
      <div className="flex flex-row flex-wrap justify-center w-full p-3 gap-1">
        {images.map((src, index) => (
          <button
            key={src.src}
            className="btn btn-circle btn-sm overflow-hidden"
            onClick={() => {
              document
                .getElementById(`image-${index}`)
                ?.scrollIntoView({ block: "nearest", inline: "nearest" });
            }}
          >
            <Image
              className="object-cover w-8 h-8"
              src={src}
              width={24}
              height={24}
              alt={""}
            />
          </button>
        ))}
      </div>
    </>
  );
};
