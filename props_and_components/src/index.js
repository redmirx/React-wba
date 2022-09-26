import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const students = [
  { id: 1, name: "Abdurakhmon" },
  { id: 2, name: "Abdulloh" },
  { id: 1, name: "Abdurakhmon" },
  { id: 2, name: "Abdulloh" },
  { id: 1, name: "Abdurakhmon" },
  { id: 2, name: "Abdulloh" },
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
