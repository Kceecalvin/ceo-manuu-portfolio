import { ImageResponse } from "next/og";
export const alt =
  "CEO Manuu — Building what comes next. Manuu Spaces / Seroxide / SeroTix.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f8f7f3",
        color: "#192532",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "65px 80px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 20, letterSpacing: 4 }}>
        CEO MANUU / FOUNDER & ENTREPRENEUR
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 100,
          letterSpacing: -5,
          lineHeight: 1.05,
        }}
      >
        <span>Building what</span>
        <span style={{ color: "#244ce5" }}>comes next.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 20,
          color: "#626970",
          borderTop: "1px solid #dddeda",
          paddingTop: 24,
        }}
      >
        MANUU SPACES · SEROXIDE · SEROTIX
      </div>
    </div>,
    { ...size },
  );
}
