import React from "react";
import spinner from "../Assets/spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "100%", maxWidth: "340px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}
