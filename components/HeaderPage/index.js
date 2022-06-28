import React from "react";
import HeroBanner from "../Hero";
import Navbar from "../Navbar";

export default function Header({ detail }) {
  if (detail) {
    return (
      <section className="bg-navy">
        {/* Navbar */}
        <Navbar />
      </section>
    );
  }
  return (
    <header className="header bg-navy">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner />
    </header>
  );
}
