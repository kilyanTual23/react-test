// App.jsx
import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚧 Site en maintenance 🚧</h1>
      <p style={styles.text}>
        Nous procédons actuellement à une mise à jour. <br />
        Le site sera de retour très bientôt.
      </p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.1rem",
  },
};
