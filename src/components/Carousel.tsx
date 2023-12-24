"use client";

import {
  forwardRef,
  FunctionComponent,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { JSX } from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;
import Image, { StaticImageData } from "next/image";
import { Overlay } from "@/components/Overlay";
import { create } from "node:domain";
import Link from "next/link";
import { Content } from "@/shared-types";

export const CarouselContainer = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => (
    <div
      ref={ref}
      className="carousel carousel-center space-x-4 shadow rounded w-full overflow-hidden"
    >
      {children}
    </div>
  ),
);

export const CarouselItem: FunctionComponent<
  PropsWithChildren<{ id?: string }>
> = ({ children, id }) => (
  <figure
    id={id}
    className="flex flex-col carousel-item w-full place-items-center items-stretch"
  >
    {children}
  </figure>
);

export const Carousel: FunctionComponent<{ images: Content["images"] }> = ({
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const overlayRef = useRef<HTMLDialogElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const createOpenModal = (index: number) => () => {
    setCurrentImageIndex(index);
    overlayRef.current?.showModal();
  };
  return (
    <>
      <Overlay ref={overlayRef} src={images[currentImageIndex].image} />
      <div className="p-3 relative">
        {currentImageIndex > 0 ? (
          <button
            className="absolute btn btn-sm glass btn-circle text-3xl/3 z-10 left-0 inset-y-0 my-auto mx-4"
            onClick={() => {
              const prevImageIndex = currentImageIndex - 1;
              document
                .getElementById(`image-${prevImageIndex}`)
                ?.scrollIntoView({ block: "nearest", inline: "nearest" });
              setCurrentImageIndex(prevImageIndex);
            }}
          >
            <svg
              className="h-6 w-6 fill-current md:h-8 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
            </svg>
          </button>
        ) : null}
        <CarouselContainer ref={scrollRef}>
          {images.map(({ image, caption }, index) => (
            <CarouselItem id={`image-${index}`} key={image.src}>
              <picture className="flex-1 relative aspect-video">
                <Image
                  priority={true}
                  fill={true}
                  onClick={createOpenModal(index)}
                  className="object-contain mx-auto"
                  placeholder="blur"
                  src={image}
                  alt={""}
                />
              </picture>
              <figcaption className="text-center">
                <small>{caption}</small>
              </figcaption>
            </CarouselItem>
          ))}
        </CarouselContainer>
        {currentImageIndex < images.length - 1 ? (
          <button
            className="absolute btn btn-sm glass btn-circle text-3xl/3 z-10 right-0 inset-y-0 my-auto mx-4"
            onClick={() => {
              const nextImageIndex = currentImageIndex + 1;
              document
                .getElementById(`image-${nextImageIndex}`)
                ?.scrollIntoView({ block: "nearest", inline: "nearest" });
              setCurrentImageIndex(nextImageIndex);
            }}
          >
            <svg
              className="h-6 w-6 fill-current md:h-8 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
            </svg>
          </button>
        ) : null}
      </div>
      <div className="flex flex-row flex-wrap justify-center w-full p-3 gap-1">
        {images.map(({ image }, index) => (
          <button
            key={image.src}
            className={`btn btn-circle btn-sm overflow-hidden ${
              currentImageIndex === index ? "btn-outline" : ""
            }`}
            onClick={() => {
              document
                .getElementById(`image-${index}`)
                ?.scrollIntoView({ block: "nearest", inline: "nearest" });
              setCurrentImageIndex(index);
            }}
          >
            <Image
              className="object-cover w-8 h-8"
              src={image}
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
