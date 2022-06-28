import React from "react";
import HeroBanner from "../Hero";
import Navbar from "../Navbar";

export default function Header({ detail, signin, signup }) {
  if (detail || signup) {
    return (
      <section className="bg-navy">
        {/* Navbar */}
        <Navbar />
      </section>
    );
  } else if (signin) {
    return (
      <section className="bg-navy">
        {/* Navbar */}
        <Navbar signin />
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
