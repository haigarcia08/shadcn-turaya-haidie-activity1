import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Example } from "@/types/example";
import data from "@/app/(site)/[slug]/data.json";

export const size = {
  width: 1200,
  height: 630
};

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const binary = String.fromCharCode(...new Uint8Array(buffer));
  return `data:image/png;base64,${Buffer.from(binary, "binary").toString("base64")}`;
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exampleData: Example | undefined = data.find((item) => item.href === slug);

  const interSemiBold = await readFile(
    join(process.cwd(), "assets/Inter/static/Inter_28pt-SemiBold.ttf")
  );

  const logoSrc = await fetch(new URL("logo.png", process.env.BASE_URL)).then((res) =>
    res.arrayBuffer()
  );

  const logoBase64 = arrayBufferToBase64(logoSrc);

  if (!exampleData) return null;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          backgroundColor: "#ffc2df",
          background:
            "radial-gradient(circle,rgba(255, 194, 223, 1) 0%, rgba(190, 206, 230, 1) 100%)"
        }}>
        <div
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            top: 30,
            left: 30,
            gap: 20
          }}>
          <div style={{ display: "flex" }}>
            <img width={48} height={48} src={logoBase64} />
          </div>
          <span style={{ fontSize: 28 }}>Shadcn Examples</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontStyle: "normal",
            color: "black",
            marginTop: 30,
            lineHeight: 1.8,
            whiteSpace: "pre-wrap"
          }}>
          <b>{exampleData.meta.title}</b>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontStyle: "normal",
            color: "#666",
            lineHeight: 1.8,
            whiteSpace: "pre-wrap"
          }}>
          <b>{exampleData.info.description}</b>
        </div>
        <div tw="ml-3 mt-6 flex">
          <a tw="flex gap-3 items-center justify-center rounded-md bg-black px-7 py-4 text-base font-medium text-white">
            View Demo <span style={{ display: "flex", marginLeft: "10px" }}>&#62;</span>
          </a>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400
        }
      ]
    }
  );
}
