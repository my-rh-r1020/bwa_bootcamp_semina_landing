// Import Library
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Import Components
import Button from "../Button";
import TextInput from "../TextInput";

export default function FormSignin() {
  const [form, setForm] = useState({ email: "", password: "" }),
    router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    try {
    } catch (err) {}
  };

  return (
    <form action="" className="form-login d-flex flex-column mt-4 mt-md-0 p-30">
      {/* <!-- Email --> */}
      <TextInput label="Email" type="email" value={form.email} placeholder="semina@bwa.com" onChange={handleChange} />
      {/* <!-- Password --> */}
      <TextInput label="Password (6 characters)" type="password" value={form.password} placeholder="Type your password" onChange={handleChange} />

      <div className="d-grid mt-2 gap-4">
        <Button className="btn-green" action={handleSubmit} children="Sign In" />

        <Button action={() => router.push("/signup")} className="btn-navy" children="Create New Account" />

        {/* <Link href="/signup">
          <a className="btn-navy">Create New Account</a>
        </Link> */}
      </div>
    </form>
  );
}
