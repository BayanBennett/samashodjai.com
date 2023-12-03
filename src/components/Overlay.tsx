import {
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import Image, { StaticImageData } from "next/image";

export const Overlay: ForwardRefExoticComponent<
  PropsWithoutRef<{ src: StaticImageData | null }> &
    RefAttributes<HTMLDialogElement | null>
> = forwardRef(({ src }, ref) => (
  <dialog ref={ref} className="modal">
    <div className="modal-box h-full max-w-full max-h-full">
      {src && (
        <Image
          className="object-contain p-4 rounded"
          fill={true}
          src={src}
          alt={""}
          placeholder="blur"
        />
      )}
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
    </div>

    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
));

Overlay.displayName = "Overlay";
