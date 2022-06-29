import React from "react";

// Import Components
import FormSignin from "../SigninForm";

export default function Signin() {
  return (
    <section className="login header bg-navy">
      <div className="container">
        <div className="d-flex flex-column align-items-center hero gap-5">
          <div>
            <div className="hero-headline text-start">Sign In</div>
          </div>
          <FormSignin />
        </div>
      </div>
    </section>
  );
}
