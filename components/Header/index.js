import React from "react";
import HeroBanner from "../Hero";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className="header bg-navy">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner />
    </header>
  );
}
