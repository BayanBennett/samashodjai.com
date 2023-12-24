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
    <div className="card card-compact rounded-none">
      <figure className="p-5 border">
        <Image
          width={700}
          height={700}
          className="w-full aspect-square object-cover scale-[2] transition-filter duration-100 filter grayscale hover:grayscale-0"
          src={images[0].image}
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
  <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-20 px-10">
    {children}
  </section>
);
