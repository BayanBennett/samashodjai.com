import { FunctionComponent, PropsWithChildren } from "react";
import Image, { ImageProps } from "next/image";

export const Icon: FunctionComponent<ImageProps> = ({ src, alt }) => (
  <div className="tooltip tooltip-bottom" data-tip={alt}>
    <div className="avatar">
      <div className="w-10 rounded">
        <Image src={src} alt={alt} />
      </div>
    </div>
  </div>
);
