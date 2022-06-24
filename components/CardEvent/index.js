// Import Libraries
import React from "react";
import Link from "next/link";

// Import Components
import CardTitle from "../CardTitle";

export default function CardEventSection({ data, title, subtitle }) {
  return (
    <section className="grow-today">
      <div className="container">
        <CardTitle subtitle={subtitle} title={title} />
        <div className="mt-5 row gap">
          {/* <!-- CARD 1 --> */}
          {["", "", "", ""].map((data, i) => (
            <div className="col-lg-3 col-md-6 col-12" key={i}>
              <div className="card-grow h-100">
                <span class="badge-pricing">$229</span>
                <img src="/images/card-1.png" alt="semina" />
                <div class="card-content">
                  <div class="card-title">Learn Jira for Sprint Design Venture</div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Bandung, 22 Jan 2022</div>
                  <Link href={`/detail/${1}`}>
                    <a className="stretched-link"></a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
