// Import Libraries
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";
import Cookies from "js-cookie";

// Import Components
import Button from "../Button";

export default function DetailPage({ data }) {
  const router = useRouter(),
    token = Cookies.get("token");

  // Handle Submit
  const handleSubmit = (id) => {
    // Cek Token User
    if (!token) return router.push("/signin");

    router.push("/checkout");
  };

  return (
    <>
      <div className="preview-image bg-navy text-center">
        <img src={`${process.env.NEXT_PUBLIC_API_COVER_EVENT}/${data.cover}`} className="img-content" alt="cover" />
      </div>

      <div className="details-content container">
        <div className="d-flex flex-wrap justify-content-lg-center gap">
          {/* <!-- Left Side Description --> */}
          <div className="d-flex flex-column description">
            <div className="headline">{data.title}</div>
            <div className="event-details">
              <h6>Event Details</h6>
              <p className="details-paragraph">{data.about}</p>
            </div>
            <div className="keypoints">
              {/* <!-- Key 1 --> */}
              {data.keypoint.map((keypoint, i) => (
                <div className="d-flex align-items-start gap-3" key={i}>
                  <img src="/icons/ic-check.svg" alt="semina" />
                  <span>{keypoint}</span>
                </div>
              ))}
            </div>
            <div className="map-location">
              <h6>Event Location</h6>
              <div className="map-placeholder">
                <div className="maps">
                  <img src="/images/maps.png" alt="" />
                  <div className="absolute d-flex justify-content-center align-items-center" id="hoverMe">
                    <a href="#" className="btn-navy" id="btn-maps">
                      View in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Card Event --> */}
          <div className="d-flex flex-column card-event">
            {/* <!-- Speaker Information --> */}
            <h6>Your Speaker</h6>
            <div className="d-flex align-items-center gap-3 mt-3">
              <img src={`${process.env.NEXT_PUBLIC_API_AVATAR}/${data?.speaker?.avatar}`} alt="avatar" width="60" />
              <div>
                <div className="speaker-name">{data?.speaker?.name}</div>
                <span className="occupation">{data?.speaker?.role}</span>
              </div>
            </div>
            <hr />
            {/* <!-- Ticket Information --> */}
            <h6>Get Ticket</h6>
            <div className="price my-3">
              {data.price === 0 ? "Free" : `Rp ${data.price}`}
              <span>/person</span>
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-marker.svg" alt="semina" /> {data.venueName}
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-time.svg" alt="semina" /> {moment(data.date).format("H:mm")} WIB
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/icons/ic-calendar.svg" alt="semina" /> {moment(data.date).format("DD MMMM YYYY")}
            </div>

            {data.stock !== 0 && <Button className="btn-green" children="Join Now" action={() => handleSubmit()} />}
          </div>
        </div>
      </div>
    </>
  );
}
