import { FunctionComponent, PropsWithChildren } from "react";
import { Content, Contents } from "@/shared-types";
import Link from "next/link";
import Image from "next/image";

export const Card: FunctionComponent<Content & { href: string }> = ({
  title,
  subtitle,
  href,
  images,
}) => (
  <Link className="cursor-pointer" href={href}>
    <div className="card">
      <figure className="p-3">
        <Image
          className="w-full aspect-square object-cover border transition-filter duration-100 filter grayscale hover:grayscale-0"
          src={images[0]}
          alt={title}
          placeholder="blur"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  </Link>
);

export const CardsContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
    {children}
  </section>
);