import React from "react";

function Main({ results }) {
  return (
    <main
      className="d-flex flex-column align-items-center"
      style={{
        minHeight: "400px",
        backgroundColor: "#f0f0f0",
        marginTop: "20px",
        padding: "20px",
      }}
    >
      {results.length > 0 ? (
        results.map((item) => (
          <div
            key={item.id}
            style={{
              width: "90%",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#add8e6",
              border: "1px solid #ccc",
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.contents}</p> {/* Display the content here */}
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </main>
  );
}

export default Main;
