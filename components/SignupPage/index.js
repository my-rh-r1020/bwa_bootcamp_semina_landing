// Import Library
import React, { useState } from "react";
import { useRouter } from "next/router";
import { postData } from "../../utils/fetchData";
import { toast } from "react-toastify";

// Import Components
import SignupForm from "../SignupForm";

export default function Signup() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", role: "" }),
    router = useRouter();

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = async () => {
    try {
      const res = await postData(`api/v1/participants/auth/signup`, form);

      // router.push("/signin");

      toast.success("Registration Success. Please Sign In ...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {}
  };

  return (
    <section className="login header bg-navy">
      <div className="container">
        <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero">
          <div className="col-md-6">
            <div className="hero-headline text-start">
              Expand Your <br className="d-none d-md-block" />
              Knowledge & Skills
            </div>
            <p className="hero-paragraph text-start">
              Kami menyediakan berbagai acara terbaik untuk membantu <br className="d-none d-lg-block" />
              anda dalam meningkatkan skills di bidang teknologi
            </p>
          </div>
          <div className="col-md-6">
            <SignupForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}
