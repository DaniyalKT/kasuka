import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Intruduce from "./Intruduce";
import Box from "./Box";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-nav">
        <Navbar />
      </div>

      <div className="intruduce">
        <Intruduce />
      </div>

      <div className="box">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
