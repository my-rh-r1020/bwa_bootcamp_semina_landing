import React from "react";
import HeroBanner from "../Hero";
import Navbar from "../Navbar";

export default function Header({ detail, signin, signup, checkout, authenticated }) {
  // if (checkout) {
  //   return (
  //     <section className="bg-navy">
  //       {/* Navbar */}
  //       <Navbar />
  //     </section>
  //   );
  // }
  // else if (signin) {
  //   return (
  //     // Navbar
  //     <Navbar signin />
  //   );
  // }
  // else if (authenticated) {
  //   return (
  //     // Navbar
  //     <Navbar authenticated />
  //   );
  // }
  return (
    <header className="header bg-navy">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner />
    </header>
  );
}
