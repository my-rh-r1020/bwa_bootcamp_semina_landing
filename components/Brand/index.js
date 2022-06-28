import React from "react";

export default function BrandSection({ landing }) {
  return (
    <section className={landing ? "brand-partner text-center" : "brand-partner pt-0 text-center bg-navy"}>
      <p>Events held by top & biggest global companies</p>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <img src="/images/apple-111.svg" alt="semina" />
        <img src="/images/Adobe.svg" alt="semina" />
        <img src="/images/slack-21.svg" alt="semina" />
        <img src="/images/spotify-11.svg" alt="semina" />
        <img src="/images/google-2015.svg" alt="semina" />
      </div>
    </section>
  );
}
