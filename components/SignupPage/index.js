// Import Library
import React, { useState } from "react";
import { useRouter } from "next/router";

// Import Components
import Button from "../Button";
import TextInput from "../TextInput";

export default function Signup() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", role: "" }),
    router = useRouter();

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = () => {};

  return (
    <section class="login header bg-navy">
      <div class="container">
        <div class="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero">
          <div class="col-md-6">
            <div class="hero-headline text-start">
              Expand Your <br class="d-none d-md-block" />
              Knowledge & Skills
            </div>
            <p class="hero-paragraph text-start">
              Kami menyediakan berbagai acara terbaik untuk membantu <br class="d-none d-lg-block" />
              anda dalam meningkatkan skills di bidang teknologi
            </p>
          </div>
          <div class="col-md-6">
            <form class="form-login d-flex flex-column mt-4 mt-md-0">
              {/* <!-- First Name --> */}
              <TextInput label="First Name" type="text" value={form.firstName} placeholder="First name here" onChange={handleChange} />

              {/* <!-- Last Name --> */}
              <TextInput label="Last Name" type="text" value={form.lastName} placeholder="Last name here" onChange={handleChange} />

              {/* <!-- Email --> */}
              <TextInput label="Email" type="email" value={form.email} placeholder="semina@bwa.com" onChange={handleChange} />

              {/* <!-- Password --> */}
              <TextInput label="Password (6 characters)" type="password" value={form.password} placeholder="Type your password" onChange={handleChange} />

              {/* <!-- Role --> */}
              <TextInput label="Role" type="text" value={form.role} placeholder="ex: Product Designer" onChange={handleChange} />

              <div class="d-grid mt-2">
                <Button className="btn-green" children="Sign Up" action={() => handleSubmit()} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
