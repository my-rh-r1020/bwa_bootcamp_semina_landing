import React from "react";
import Button from "../Button";

// Import Components
import TextInput from "../TextInput";

export default function SignupForm({ form, handleChange, handleSubmit }) {
  return (
    <form className="form-login d-flex flex-column mt-4 mt-md-0">
      {/* <!-- First Name --> */}
      <TextInput label="First Name" type="text" name="firstName" value={form.firstName} placeholder="First name here" onChange={handleChange} />

      {/* <!-- Last Name --> */}
      <TextInput label="Last Name" type="text" name="lastName" value={form.lastName} placeholder="Last name here" onChange={handleChange} />

      {/* <!-- Email --> */}
      <TextInput label="Email" type="email" name="email" value={form.email} placeholder="semina@bwa.com" onChange={handleChange} />

      {/* <!-- Password --> */}
      <TextInput label="Password (6 characters)" type="password" name="password" value={form.password} placeholder="Type your password" onChange={handleChange} />

      {/* <!-- Role --> */}
      <TextInput label="Role" type="text" name="role" value={form.role} placeholder="ex: Product Designer" onChange={handleChange} />

      <div className="d-grid mt-2">
        <Button className="btn-green" children="Sign Up" action={handleSubmit} />
      </div>
    </form>
  );
}
