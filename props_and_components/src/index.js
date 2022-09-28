import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const students = [
  { id: 1, name: "Abdurakhmon" },
  { id: 2, name: "Abdulloh" },
  { id: 1, name: "Abdurakhmon" },
  { id: 2, name: "Abdulloh" },
];
root.render(
  <React.StrictMode>
    {students.map((value) => (
      <App data={value} />
    ))}
  </React.StrictMode>
);
