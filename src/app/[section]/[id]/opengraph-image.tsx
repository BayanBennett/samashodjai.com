import { ImageResponse } from "next/og";
import * as data from "@/data";
import Image from "next/image";
export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

type Props = {
  params: { id: string; section: keyof typeof data };
};
// Image generation
const OpenGraphImage = async ({ params }: Props): Promise<ImageResponse> => {
  const { section, id } = params;
  const { images } = data[section].contents[id];

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          width={size.width}
          height={size.height}
          src={images[0].image}
          alt=""
        />
      </div>
    ),
    {
      ...size,
    },
  );
};
export default OpenGraphImage;
