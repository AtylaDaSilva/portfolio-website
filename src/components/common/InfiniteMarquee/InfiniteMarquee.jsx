import { useRef, useEffect, useState, ReactNode, CSSProperties } from "react";

/** Inject the @keyframes rule once into <head> — safe across Strict Mode double-renders. */
function useMarqueeKeyframe() {
  useEffect(() => {
    const id = "infinite-marquee-keyframes";
    if (document.getElementById(id)) return;

    const sheet = document.createElement("style");
    sheet.id = id;
    sheet.textContent = `
      @keyframes im-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(sheet);

    // No cleanup: the keyframe is global and reused by every instance.
  }, []);
}

/**
 * InfiniteMarquee
 *
 * A style-agnostic component that auto-scrolls its children left-to-right,
 * looping seamlessly. Renders two copies of children to create the infinite
 * loop — no JavaScript animation loop required.
 *
 * Usage:
 *   <InfiniteMarquee duration={30} pauseOnHover gap="16px">
 *     {items.map((item) => <MyCard key={item.id} {...item} />)}
 *   </InfiniteMarquee>
 */
export default function InfiniteMarquee({
  children,
  duration = 40,
  pauseOnHover = true,
  gap = "12px",
  fadeEdges = false,
  fadeWidth = 80,
  className = "",
  style,
}) {
  useMarqueeKeyframe();

  const [paused, setPaused] = useState(false);

  const wrapperStyle = {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    ...style,
  };

  const trackStyle = {
    display: "flex",
    width: "max-content",
    animation: `im-scroll ${duration}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };

  const groupStyle = {
    display: "flex",
    flexShrink: 0,
    gap,
    // Padding so the last item doesn't collide with the first on loop
    paddingRight: gap,
  };

  const edgeStyle = (side) => ({
    position: "absolute",
    top: 0,
    bottom: 0,
    [side]: 0,
    width: fadeWidth,
    zIndex: 2,
    pointerEvents: "none",
    background: `linear-gradient(to ${side === "left" ? "right" : "left"}, ${fadeEdges}, transparent)`,
  });

  return (
    <div
      className={className}
      style={wrapperStyle}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
    >
      {fadeEdges && <div aria-hidden="true" style={edgeStyle("left")} />}
      {fadeEdges && <div aria-hidden="true" style={edgeStyle("right")} />}

      {/* Track — two identical groups produce the seamless loop */}
      <div style={trackStyle}>
        <div style={groupStyle}>{children}</div>

        {/* Mirror group: visually fills the gap; hidden from assistive tech */}
        <div style={groupStyle} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
