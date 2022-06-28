import React from "react";

// Libraries for SPA
import Link from "next/link";
import NavLink from "../NavLink";
import { useRouter } from "next/router";

// V1 - Signin
export default function Navbar({ signin }) {
  if (signin) {
    return (
      <section className="bg-navy">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/images/logo.svg" alt="semina" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto my-3 my-lg-0">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/browse">Browse</NavLink>
                <NavLink href="#stories">Stories</NavLink>
                <NavLink href="#about">About</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </section>
    );
  }
  return (
    <nav className="container navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.svg" alt="semina" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto my-3 my-lg-0">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/browse">Browse</NavLink>
            <NavLink href="#stories">Stories</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>
          <div className="d-grid">
            <a className="btn-navy" href="/signin">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// V2 - Signin
// export default function Navbar({ signin }) {
//   return (
//     <nav className="container navbar navbar-expand-lg navbar-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           <img src="/images/logo.svg" alt="semina" />
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         {signin ? (
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav ms-auto my-3 my-lg-0">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/browse">Browse</NavLink>
//               <NavLink href="#stories">Stories</NavLink>
//               <NavLink href="#about">About</NavLink>
//             </div>
//           </div>
//         ) : (
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav mx-auto my-3 my-lg-0">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/browse">Browse</NavLink>
//               <NavLink href="#stories">Stories</NavLink>
//               <NavLink href="#about">About</NavLink>
//             </div>
//             <div className="d-grid">
//               <a className="btn-navy" href="/signin">
//                 Sign In
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// V3 Signin
// export default function Navbar() {
//   const router = useRouter(),
//     pathSignin = "/signin";

//   return (
//     <nav className="container navbar navbar-expand-lg navbar-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           <img src="/images/logo.svg" alt="semina" />
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         {router.pathname === pathSignin ? (
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav mx-auto my-3 my-lg-0">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/browse">Browse</NavLink>
//               <NavLink href="#stories">Stories</NavLink>
//               <NavLink href="#about">About</NavLink>
//             </div>
//           </div>
//         ) : (
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav mx-auto my-3 my-lg-0">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/browse">Browse</NavLink>
//               <NavLink href="#stories">Stories</NavLink>
//               <NavLink href="#about">About</NavLink>
//             </div>
//             <div className="d-grid">
//               <a className="btn-navy" href="/signin">
//                 Sign In
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
