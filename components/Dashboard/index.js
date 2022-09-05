import React from "react";
import moment from "moment";

export default function DashboardPage({ data }) {
  return (
    <section className="bg-navy">
      <div className="checkout container">
        {data.map((data) => (
          <>
            <div className="text-center checkout-title" key={data._id}>
              {data.historyEvent.title}
            </div>
            <div className="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5">
              <img src={`${process.env.NEXT_PUBLIC_API_STORAGE_DEV}/cover_event/${data.historyEvent.cover}`} className="event-image" alt="semina" />
              <div className="d-flex flex-column gap-3">
                <h5>{data.historyEvent.tagline}</h5>

                <div className="d-flex align-items-center gap-3">
                  <img src="/icons/ic-marker-white.svg" alt="" />
                  <span>{data.historyEvent.venueName}</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src="/icons/ic-time-white.svg" alt="" />
                  <span>{moment(data.historyEvent.date).format("H:mm")} WIB</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src="/icons/ic-calendar-white.svg" alt="" />
                  <span>{moment(data.historyEvent.date).format("DD MMMM YYYY")}</span>
                </div>
              </div>
              <div className="total-price">{data.historyEvent.price === 0 ? "Free" : `Rp ${data.historyEvent.price}`}</div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
