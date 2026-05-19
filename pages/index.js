function Home() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #3c1053 100%)",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#d1d1d1",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        margin: 0,
      }}
    >
      <h1
        style={{
          fontWeight: 400,
          fontSize: "2.25rem",
          letterSpacing: "-0.025em",
        }}
      >
        Building something meaningful_
      </h1>
    </div>
  );
}

export default Home;
