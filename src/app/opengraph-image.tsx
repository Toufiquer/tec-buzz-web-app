/*
|-----------------------------------------
| setting up opengraph-image.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/

import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "TecBuzz — smart digital solutions for businesses in Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "Logo.png"));

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "55px 65px",
        background: "#F5F8FC",
        color: "#172232",
        borderBottom: "14px solid #0755EA",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {/* ImageResponse renders a bitmap; next/image is unavailable in this renderer. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="TecBuzz" src={`data:image/png;base64,${logo.toString("base64")}`} width={145} height={145} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 36, fontWeight: 700 }}>TecBuzz</span>
          <span style={{ color: "#0755EA", fontSize: 20 }}>IDEAS · INNOVATION · IMPACT</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
          Smart digital solutions for your business.
        </div>
        <div style={{ fontSize: 26, color: "#475569" }}>Web development · E-commerce · CRM · Digital marketing</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
        <span>Built for businesses in Bangladesh</span>
        <span style={{ color: "#0755EA" }}>tecbuzz.bd</span>
      </div>
    </div>,
    size,
  );
}
