export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #000000, #111827)",
        color: "#fff",
        fontFamily: "montserrate",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          padding: "60px 30px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "15px",
            letterSpacing: "2px",
          }}
        >
          Sable Mesa
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            color: "#9CA3AF",
            marginBottom: "30px",
          }}
        >
          Digital Infrastructure for Manufacturing/D2C Brands
        </p>

        <p
          style={{
            display: "inline-block",
            padding: "12px 25px",
            borderRadius: "10px",
            background: "#fff",
            color: "#000",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Elevate • Innovate • Scale
        </p>

        <div style={{ marginTop: "40px", fontSize: "0.9rem", color: "#6B7280" }}>
          🚀 Website Coming Soon...
        </div>
      </div>
    </div>
  );
}
