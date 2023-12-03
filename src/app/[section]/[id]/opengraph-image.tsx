import { ImageResponse } from "next/og";
import * as data from "@/data";
import Image from "next/image";
export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

//export const contentType = "image/jpeg";

type Props = {
  params: { id: string; section: keyof typeof data };
};
// Image generation
const OpenGraphImage = async ({ params }: Props): Promise<ImageResponse> => {
  const { section, id } = params;
  const { images } = data[section].contents[id];

  return new ImageResponse(
    <Image width={size.width} height={size.height} src={images[0]} alt="" />,
    {
      ...size,
    },
  );
};
export default OpenGraphImage;
