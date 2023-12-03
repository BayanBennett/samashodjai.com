import { FunctionComponent } from "react";

type DoorProps = {
  position: "top" | "bottom";
  direction: "up" | "down";
};

export const Door: FunctionComponent<DoorProps> = ({ position, direction }) => {
  const positionClass = position === "top" ? "-top-11" : "-bottom-1";
  return (
    <div className={`flex flex-col-reverse absolute -right-1 ${positionClass}`}>
      <div className="flex flex-row">
        <div className="w-10 border-t-4 border-white" />
        <div className="w-10 border-t-4" />
      </div>
      <div className="flex flex-row">
        <div className="w-10 h-10 border-t-2 border-l-2 rounded-tl-full border-dotted" />
        <div className="w-10 h-10 border-l-2 rounded-tr-full origin-bottom-left" />
      </div>
    </div>
  );
};

export const DoorHeader: FunctionComponent<DoorProps & { title?: string }> = ({
  position,
  direction,
  title,
}) => (
  <h2 className="border-b-4 sticky top-14 h-14 pl-6 bg-white z-10 flex justify-start items-end">
    <Door position={position} direction={direction} />
    {title}
  </h2>
);
