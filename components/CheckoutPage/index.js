import React from "react";

export default function Checkout({ authenticated }) {
  if (authenticated) {
    return (
      <section className="bg-navy">
        <div className="checkout container">
          <div className="text-center checkout-title">Invest In Yourself</div>

          <div className="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5">
            <img src="/images/details-image.png" className="event-image" alt="semina" />
            <div className="d-flex flex-column gap-3">
              <h5>
                Start Your Design Career <br className="d-none d-md-block" />
                With Design Sprint
              </h5>

              <div className="d-flex align-items-center gap-3">
                <img src="/icons/ic-marker-white.svg" alt="" />
                <span>Gowork, Bandung</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src="/icons/ic-time-white.svg" alt="" />
                <span>15.00 PM WIB</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src="/icons/ic-calendar-white.svg" alt="" />
                <span>22 Agustus 2022</span>
              </div>
            </div>
            <div className="total-price">$2,980</div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-navy">
      <div className="checkout container">
        <div className="text-center checkout-title">Invest In Yourself</div>

        <div className="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5">
          <img src="/images/details-image.png" className="event-image" alt="semina" />
          <div className="d-flex flex-column gap-3">
            <h5>
              Start Your Design Career <br className="d-none d-md-block" />
              With Design Sprint
            </h5>

            <div className="d-flex align-items-center gap-3">
              <img src="/icons/ic-marker-white.svg" alt="" />
              <span>Gowork, Bandung</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src="/icons/ic-time-white.svg" alt="" />
              <span>15.00 PM WIB</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src="/icons/ic-calendar-white.svg" alt="" />
              <span>22 Agustus 2022</span>
            </div>
          </div>
          <div className="total-price">$2,980</div>
        </div>

        <form action="" className="container form-semina">
          {/* <!-- Personal Details --> */}
          <div className="personal-details">
            <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center">
              <div className="form-title col-lg-8">
                <h4>Personal Details</h4>
              </div>
            </div>
            <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center">
              {/* <!-- First Name --> */}
              <div className="mb-4 col-lg-4">
                <label for="first_name" className="form-label">
                  First Name
                </label>
                <input type="text" placeholder="First name here" className="form-control" id="first_name" />
              </div>
              {/* <!-- Last Name --> */}
              <div className="mb-4 col-lg-4">
                <label for="last_name" className="form-label">
                  Last Name
                </label>
                <input type="text" placeholder="Last name here" className="form-control" id="last_name" />
              </div>
            </div>
            <div className="row row-cols-lg-8 row-cols-md-2 row-cols-12 justify-content-center">
              {/* <!-- Email --> */}
              <div className="mb-4 col-lg-4">
                <label for="email_address" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email_address" placeholder="semina@bwa.com" />
              </div>
              {/* <!-- Role --> */}
              <div className="mb-4 col-lg-4">
                <label for="exampleFormControlInput1" className="form-label">
                  Role
                </label>
                <input type="text" className="form-control" id="role" placeholder="Product Designer" />
              </div>
            </div>
          </div>

          {/* <!-- Payment Method --> */}
          <div className="payment-method mt-4">
            <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center">
              <div className="form-title col-lg-8">
                <h4>Payment Method</h4>
              </div>
            </div>
            <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center gy-4 gy-md-0">
              <div className="col-lg-4">
                <label className="payment-radio h-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-4">
                    <img src="/icons/ic-mastercard.svg" alt="" />
                    <div>Mastercard</div>
                  </div>
                  <input type="radio" checked="checked" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="col-lg-4">
                <label className="payment-radio h-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-4">
                    <img src="/icons/ic-sewallet.svg" alt="" />
                    <div className="d-flex flex-column gap-1">
                      Sewallet
                      <span className="balance">Balance: $50,000</span>
                    </div>
                  </div>
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center footer-payment gap-4">
            <button type="submit" className="btn-green">
              Pay Now
            </button>
            <div>
              <img src="/icons/ic-secure.svg" alt="" />
              <span>Your payment is secure and encrypted</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
