// Import Libraries
import React from "react";
import Link from "next/link";
import moment from "moment";

// Import Components
import CardTitle from "../CardTitle";

export default function CardEventSection({ data, title, subtitle }) {
  return (
    <section className="grow-today">
      <div className="container">
        <CardTitle subtitle={subtitle} title={title} />
        <div className="mt-5 row gap">
          {/* <!-- CARD 1 --> */}
          {data.map((data, i) => (
            <div className="col-lg-3 col-md-6 col-12" key={i}>
              <div className="card-grow h-100">
                <span className="badge-pricing">{data.price === 0 ? "Free" : `Rp ${data.price}`}</span>
                <img src={`${process.env.NEXT_PUBLIC_API_STORAGE_DEV}/cover_event/${data.cover}`} alt="semina" />
                <div className="card-content">
                  <div className="card-title">{data.title}</div>
                  <div className="card-subtitle">{data.category.name}</div>
                  <div className="description">
                    {data.venueName} <br /> {moment(data.date).format("DD MMM YYYY, H:mm")} WIB
                  </div>
                  <Link href={`/detail/${data._id}`}>
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
