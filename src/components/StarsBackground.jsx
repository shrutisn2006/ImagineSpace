export default function StarsBackground() {
  const stars = Array.from({ length: 100 });
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        background: "radial-gradient(circle at 50% 50%, #001d3d, #000)",
      }}
    >
      {stars.map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            width: "2px",
            height: "2px",
            background: "#fff",
            borderRadius: "50%",
            opacity: Math.random(),
            animation: `blink ${2 + Math.random() * 3}s infinite`,
          }}
        ></span>
      ))}
      <style>
        {`@keyframes blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }`}
      </style>
    </div>
  );
}
