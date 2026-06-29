import { useState } from "react";

const spinnerStyles = `
  @keyframes spin {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse-ring {
    0%   { transform: rotate(0deg) scale(1);   opacity: 1; }
    50%  { transform: rotate(180deg) scale(1.05); opacity: 0.7; }
    100% { transform: rotate(360deg) scale(1);  opacity: 1; }
  }

  .spinner-track {
    border-radius: 50%;
    animation: spin 1s linear infinite;
    flex-shrink: 0;
  }

  .spinner-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

/**
 * Spinner component
 *
 * Props:
 *  - color   {string}  Hex/rgb/css color for the active arc. Default: #9D5CF6
 *  - size    {number}  Diameter in pixels.                   Default: 40
 *  - stroke  {number}  Border width in pixels.               Default: 4
 *  - speed   {string}  CSS animation-duration value.         Default: "0.9s"
 *  - label   {string}  Accessible aria-label.                Default: "Loading…"
 */
export default function Spinner({
  color = "#9D5CF6",
  size = 40,
  stroke = 4,
  speed = "0.9s",
  label = "Loading…",
}) {
  const trackColor = `${color}33`; // 20 % opacity of the accent

  return (
    <>
      <style>{spinnerStyles}</style>
      <span
        className="spinner-wrapper"
        role="status"
        aria-label={label}
        style={{ width: size, height: size }}
      >
        <span
          className="spinner-track"
          style={{
            width: size,
            height: size,
            border: `${stroke}px solid ${trackColor}`,
            borderTopColor: color,
            animationDuration: speed,
          }}
        />
      </span>
    </>
  );
}

// /* ─── Demo ────────────────────────────────────────────────────────────────── */

// const PRESETS = [
//   { label: "Padrão",   color: "#9D5CF6" },
//   { label: "Coral",    color: "#FF6B6B" },
//   { label: "Teal",     color: "#00C9A7" },
//   { label: "Âmbar",   color: "#F59E0B" },
//   { label: "Azul",     color: "#3B82F6" },
// ];

// export default function App() {
//   const [color, setColor]   = useState("#9D5CF6");
//   const [size, setSize]     = useState(48);
//   const [stroke, setStroke] = useState(5);
//   const [speed, setSpeed]   = useState("0.9s");

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         {/* Title */}
//         <h1 style={styles.title}>Spinner</h1>
//         <p style={styles.subtitle}>Componente React sem dependências externas</p>

//         {/* Live preview */}
//         <div style={styles.preview}>
//           <Spinner color={color} size={size} stroke={stroke} speed={speed} />
//         </div>

//         {/* Controls */}
//         <div style={styles.controls}>

//           {/* Color presets */}
//           <div style={styles.field}>
//             <label style={styles.label}>Cor</label>
//             <div style={styles.presetRow}>
//               {PRESETS.map((p) => (
//                 <button
//                   key={p.color}
//                   title={p.label}
//                   onClick={() => setColor(p.color)}
//                   style={{
//                     ...styles.swatch,
//                     background: p.color,
//                     outline: color === p.color ? `3px solid ${p.color}` : "none",
//                     outlineOffset: 2,
//                   }}
//                 />
//               ))}
//               <input
//                 type="color"
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//                 style={styles.colorPicker}
//                 title="Cor personalizada"
//               />
//             </div>
//           </div>

//           {/* Size */}
//           <div style={styles.field}>
//             <label style={styles.label}>
//               Tamanho <span style={styles.value}>{size}px</span>
//             </label>
//             <input
//               type="range" min={16} max={120} value={size}
//               onChange={(e) => setSize(Number(e.target.value))}
//               style={{ ...styles.range, accentColor: color }}
//             />
//           </div>

//           {/* Stroke */}
//           <div style={styles.field}>
//             <label style={styles.label}>
//               Espessura <span style={styles.value}>{stroke}px</span>
//             </label>
//             <input
//               type="range" min={2} max={16} value={stroke}
//               onChange={(e) => setStroke(Number(e.target.value))}
//               style={{ ...styles.range, accentColor: color }}
//             />
//           </div>

//           {/* Speed */}
//           <div style={styles.field}>
//             <label style={styles.label}>Velocidade</label>
//             <div style={styles.segmented}>
//               {[["Lenta","1.6s"], ["Normal","0.9s"], ["Rápida","0.45s"]].map(([lbl, val]) => (
//                 <button
//                   key={val}
//                   onClick={() => setSpeed(val)}
//                   style={{
//                     ...styles.seg,
//                     background: speed === val ? color : "transparent",
//                     color: speed === val ? "#fff" : "#94a3b8",
//                     borderColor: speed === val ? color : "#334155",
//                   }}
//                 >
//                   {lbl}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Code snippet */}
//         <div style={styles.codeBox}>
//           <span style={styles.codeLabel}>uso</span>
//           <code style={styles.code}>
//             {`<Spinner`}<br />
//             {`  color="${color}"`}<br />
//             {`  size={${size}}`}<br />
//             {`  stroke={${stroke}}`}<br />
//             {`  speed="${speed}"`}<br />
//             {`/>`}
//           </code>
//         </div>
//       </div>
//     </div>
//   );
// }

/* ─── Styles ──────────────────────────────────────────────────────────────── */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0A0F1E",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', system-ui, sans-serif",
    padding: "24px 16px",
  },
  card: {
    background: "#111827",
    border: "1px solid #1e293b",
    borderRadius: 20,
    padding: "36px 32px",
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
  },
  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 700,
    color: "#f1f5f9",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    margin: "4px 0 0",
    fontSize: 13,
    color: "#64748b",
  },
  preview: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 0",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    display: "flex",
    justifyContent: "space-between",
  },
  value: {
    fontWeight: 400,
    color: "#64748b",
    textTransform: "none",
    letterSpacing: 0,
  },
  presetRow: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  swatch: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.15s, outline 0.15s",
  },
  colorPicker: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "2px dashed #334155",
    background: "transparent",
    cursor: "pointer",
    padding: 0,
    overflow: "hidden",
  },
  range: {
    width: "100%",
    height: 4,
    borderRadius: 4,
    cursor: "pointer",
    background: "#1e293b",
    appearance: "none",
  },
  segmented: {
    display: "flex",
    borderRadius: 8,
    overflow: "hidden",
    border: "1px solid #334155",
  },
  seg: {
    flex: 1,
    padding: "7px 0",
    fontSize: 12,
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "background 0.15s, color 0.15s",
    letterSpacing: "0.02em",
  },
  codeBox: {
    marginTop: 24,
    background: "#0d1117",
    border: "1px solid #1e293b",
    borderRadius: 10,
    padding: "14px 16px",
    position: "relative",
  },
  codeLabel: {
    position: "absolute",
    top: -9,
    left: 12,
    background: "#0d1117",
    padding: "0 6px",
    fontSize: 11,
    color: "#475569",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  code: {
    display: "block",
    fontSize: 12.5,
    lineHeight: 1.7,
    color: "#7dd3fc",
    fontFamily: "'Fira Code', 'Courier New', monospace",
    whiteSpace: "pre",
  },
};
