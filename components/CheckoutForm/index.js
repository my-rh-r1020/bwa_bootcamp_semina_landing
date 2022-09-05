import React, { useEffect, useState } from "react";
import { getData, postData } from "../../utils/fetchData";
import { useRouter } from "next/router";

import Button from "../Button";

// Import Components
import TextInput from "../TextInput";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function CheckoutForm({ data }) {
  const router = useRouter(),
    // Use State
    [form, setForm] = useState({ firstName: "", lastName: "", email: "", role: "", payment: "", event: router.query.id }),
    [payments, setPayments] = useState([]);

  // UseEffect Data Payments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData("api/v1/participants/payments");

        // Radio Button Checked
        res.data.forEach((res) => {
          res.isChecked = false;
        });

        setPayments(res.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  // UseEffect Payment Id
  useEffect(() => {
    let paymentId = "";

    payments.filter((payment) => {
      if (payment.isChecked) paymentId = payment._id;
    });

    setForm({ ...form, payment: paymentId });
  }, [payments]);

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Change Payment
  const handleChangePayment = (e, i) => {
    // Change Status True - Selected Radio Button
    const _temp = [...payments];
    _temp[i].isChecked = e.target.checked;

    // Change Status False - After Selected Radio Button
    _temp.forEach((temp) => {
      if (temp._id !== e.target.value) temp.isChecked = false;
    });

    setPayments(_temp);

    // console.log("Temp?", _temp);
    // console.log("Temp [i]", _temp[i]);
  };

  // Handle Submit
  const handleSubmit = async () => {
    try {
      let payload = {
        event: form.event,
        payment: form.payment,
        personalDetail: { firstName: form.firstName, lastName: form.lastName, email: form.email, role: form.role },
      };

      const res = await postData("api/v1/participants/checkout", payload, Cookies.get("token"));

      if (res.data) {
        // Message Toast
        toast.success("Checkout Event is Success. Thank You", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Redirect to Landing Page
        router.push("/dashboard");
      }
    } catch (err) {}
  };

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
            <input type="text" placeholder="First name here" className="form-control" name="firstName" value={form.firstName} onChange={handleChange} id="first_name" />
          </div>
          {/* <!-- Last Name --> */}
          <div className="mb-4 col-lg-4">
            <label className="form-label">Last Name</label>
            <input type="text" placeholder="Last name here" className="form-control" name="lastName" value={form.lastName} onChange={handleChange} id="last_name" />
          </div>
        </div>
        <div className="row row-cols-lg-8 row-cols-md-2 row-cols-12 justify-content-center">
          {/* <!-- Email --> */}
          <div className="mb-4 col-lg-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="email_address" placeholder="semina@bwa.com" name="email" value={form.email} onChange={handleChange} />
          </div>
          {/* <!-- Role --> */}
          <div className="mb-4 col-lg-4">
            <label className="form-label">Role</label>
            <input type="text" className="form-control" id="role" placeholder="Product Designer" name="role" value={form.role} onChange={handleChange} />
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
        {data.price === 0 ? (
          ""
        ) : (
          <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center gy-4 gy-md-0">
            {payments.map((payment, i) => (
              <div className="mb-4 col-lg-8" key={payment._id}>
                <label className="payment-radio h-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-4">
                    <img src={`${process.env.NEXT_PUBLIC_API_PAYMENTS}/${payment.imageUrl}`} alt="" width="25%" />
                    <div>{payment.type}</div>
                  </div>
                  <input type="radio" checked={payment.isChecked} name="radio" value={payment._id} onChange={(e) => handleChangePayment(e, i)} />
                  <span className="checkmark"></span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="d-flex flex-column align-items-center footer-payment gap-4">
        <Button className="btn-green" action={() => handleSubmit()}>
          Pay Now
        </Button>
        <div>
          <img src="/icons/ic-secure.svg" alt="" />
          <span>Your payment is secure and encrypted</span>
        </div>
      </div>
    </form>
  );
}
