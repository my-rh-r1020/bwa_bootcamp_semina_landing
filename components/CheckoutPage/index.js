import moment from "moment";
import React from "react";
import Button from "../Button";

import CheckoutForm from "../CheckoutForm";

export default function Checkout({ authenticated, data }) {
  return (
    <section className="bg-navy">
      <div className="checkout container">
        <div className="text-center checkout-title">{data.title}</div>

        <div className="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5">
          <img src={`${process.env.NEXT_PUBLIC_API_COVER_EVENT}/${data.cover}`} className="event-image" alt="semina" />
          <div className="d-flex flex-column gap-3">
            <h5>{data.tagline}</h5>

            <div className="d-flex align-items-center gap-3">
              <img src="/icons/ic-marker-white.svg" alt="" />
              <span>{data.venueName}</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src="/icons/ic-time-white.svg" alt="" />
              <span>{moment(data.date).format("H:mm")} WIB</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src="/icons/ic-calendar-white.svg" alt="" />
              <span>{moment(data.date).format("DD MMMM YYYY")}</span>
            </div>
          </div>
          <div className="total-price">{data.price === 0 ? "Free" : `Rp ${data.price}`}</div>
        </div>

        <CheckoutForm data={data} />
      </div>
    </section>
  );
}
