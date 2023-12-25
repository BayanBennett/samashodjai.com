import { FunctionComponent, PropsWithChildren } from "react";
import { Content, Contents } from "@/shared-types";
import Link from "next/link";
import Image from "next/image";

export const Card: FunctionComponent<Content & { href: string }> = ({
  title,
  subtitle,
  href,
  thumbnail,
  placeholder,
}) => {
  const LinkComponent = placeholder
    ? ({ children }: PropsWithChildren) => (
        <a className="cursor-not-allowed" aria-disabled={true}>
          {children}
        </a>
      )
    : ({ children }: PropsWithChildren) => (
        <Link
          className="cursor-pointer transition-filter duration-100 filter grayscale hover:grayscale-0"
          href={href}
        >
          {children}
        </Link>
      );
  return (
    <LinkComponent>
      <div className="card card-compact rounded-none">
        <figure className="border">
          <Image
            width={700}
            height={700}
            className="w-full aspect-square object-cover"
            src={thumbnail}
            alt={title}
            placeholder="blur"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </LinkComponent>
  );
};

export const CardsContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-20 px-10">
    {children}
  </section>
);
