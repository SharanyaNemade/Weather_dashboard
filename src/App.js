import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🌦️ React Weather App</h1>
      <Weather />
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
};

export default App;
