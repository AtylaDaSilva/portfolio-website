import { useState } from "react";

const SIZES = {
  md: 96,
  lg: 144,
  xl: 200,
};

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Round avatar picture.
 *
 * Props:
 *  - src:         image URL
 *  - alt:         alt text (defaults to `name`)
 *  - name:        used for the initials fallback
 *  - size:        "md" (96px) | "lg" (144px) | "xl" (200px) | any number in px
 *  - borderColor: color of the round frame
 *  - borderWidth: thickness of the frame in px
 */
export default function Avatar({
  src,
  alt,
  name = "",
  size = "lg",
  borderColor = "#e2e8f0",
  borderWidth = 4,
  style,
  ...rest
}) {
  const [failed, setFailed] = useState(false);
  const px = typeof size === "number" ? size : SIZES[size] ?? SIZES.lg;
  const showImage = src && !failed;

  return (
    <div
      role={showImage ? undefined : "img"}
      aria-label={showImage ? undefined : alt || name || "Avatar"}
      style={{
        width: px,
        height: px,
        flexShrink: 0,
        borderRadius: "50%",
        overflow: "hidden",
        boxSizing: "border-box",
        border: `${borderWidth}px solid ${borderColor}`,
        background: "#cbd5e1",
        color: "#334155",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        fontWeight: 600,
        fontSize: px * 0.36,
        userSelect: "none",
        ...style,
      }}
      {...rest}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || name || "Avatar"}
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}