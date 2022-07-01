// Import Library
import React from "react";

// Import Components
import Button from "../Button";
import TextInput from "../TextInput";

export default function FormSignin({ form, handleChange, handleSubmit, handleRouter }) {
  return (
    <form className="form-login d-flex flex-column mt-4 mt-md-0 p-30">
      {/* <!-- Email --> */}
      <TextInput label="Email" type="email" name="email" value={form.email} placeholder="semina@bwa.com" onChange={handleChange} />
      {/* <!-- Password --> */}
      <TextInput label="Password (6 characters)" type="password" name="password" value={form.password} placeholder="Type your password" onChange={handleChange} />

      <div className="d-grid mt-2 gap-4">
        <Button className="btn-green" action={handleSubmit} children="Sign In" />

        <Button action={handleRouter} className="btn-navy" children="Create New Account" />
      </div>
    </form>
  );
}
