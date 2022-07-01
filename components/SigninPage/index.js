// Import Libraries
import { useRouter } from "next/router";
import React, { useState } from "react";
import { postData } from "../../utils/fetchData";
import Cookies from "js-cookie";

// Import Components
import FormSignin from "../SigninForm";

export default function Signin() {
  const [form, setForm] = useState({ email: "", password: "" }),
    router = useRouter();

  // Handle Router
  const handleRouter = () => {
    router.push("/signup");
  };

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = async () => {
    try {
      const res = await postData(`api/v1/participants/auth/signin`, form);

      Cookies.set("token", res.data.token, { expires: 3 });

      router.push("/");

      // toast("🦄 Wow so easy!", {
      //   position: "top-right",
      //   autoClose: 2500,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    } catch (err) {}
  };

  return (
    <section className="login header bg-navy">
      <div className="container">
        <div className="d-flex flex-column align-items-center hero gap-5">
          <div>
            <div className="hero-headline text-start">Sign In</div>
          </div>
          <FormSignin form={form} handleChange={handleChange} handleSubmit={handleSubmit} handleRouter={handleRouter} />
        </div>
      </div>
    </section>
  );
}
