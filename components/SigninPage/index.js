import Link from "next/link";
import React from "react";

export default function Signin() {
  return (
    <section className="login header bg-navy">
      <div className="container">
        <div className="d-flex flex-column align-items-center hero gap-5">
          <div>
            <div className="hero-headline text-start">Sign In</div>
          </div>
          <form action="" className="form-login d-flex flex-column mt-4 mt-md-0 p-30">
            {/* <!-- Email --> */}
            <div className="d-flex flex-column align-items-start">
              <label for="email_address" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email_address" placeholder="semina@bwa.com" />
            </div>
            {/* <!-- Password --> */}
            <div className="d-flex flex-column align-items-start">
              <label for="password" className="form-label">
                Password (6 characters)
              </label>
              <input type="password" className="form-control" id="password" placeholder="Type your password" />
            </div>
            <div className="d-grid mt-2 gap-4">
              <Link href="/checkout-authenticated">
                <a className="btn-green">Sign In</a>
              </Link>
              <Link href="/signup">
                <a className="btn-navy">Create New Account</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
