import React, { useEffect } from "react";
import { getData } from "../../utils/fetchData";
import Button from "../Button";

// Import Components
import TextInput from "../TextInput";

export default function CheckoutForm({ form, data, handleChange, handleSubmit }) {
  // Fetch Data Payments
  useEffect(() => {
    const fetchData = async () => {
      const res = await getData("api/v1/payments");
      console.log(res);
    };
  });

  return (
    <form className="container form-semina">
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
            <label className="form-label">First Name</label>
            <input type="text" placeholder="First name here" className="form-control" id="first_name" />
          </div>
          {/* <!-- Last Name --> */}
          <div className="mb-4 col-lg-4">
            <label className="form-label">Last Name</label>
            <input type="text" placeholder="Last name here" className="form-control" id="last_name" />
          </div>
        </div>
        <div className="row row-cols-lg-8 row-cols-md-2 row-cols-12 justify-content-center">
          {/* <!-- Email --> */}
          <div className="mb-4 col-lg-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="email_address" placeholder="semina@bwa.com" />
          </div>
          {/* <!-- Role --> */}
          <div className="mb-4 col-lg-4">
            <label className="form-label">Role</label>
            <input type="text" className="form-control" id="role" placeholder="Product Designer" />
          </div>
        </div>
      </div>

      {/* <!-- Payment Method --> */}
      {data.price === 0 ? (
        ""
      ) : (
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
      )}

      <div className="d-flex flex-column align-items-center footer-payment gap-4">
        {/* <button type="submit" className="btn-green">
              Pay Now
            </button> */}
        <Button className="btn-green" children="Pay Now" action={handleSubmit} />
        <div>
          <img src="/icons/ic-secure.svg" alt="" />
          <span>Your payment is secure and encrypted</span>
        </div>
      </div>
    </form>
  );
}
