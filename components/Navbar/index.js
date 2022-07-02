// Import Library
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// Libraries for SPA
import Link from "next/link";
import NavLink from "../NavLink";

// Import Components
import Button from "../Button";

// V1 - Signin
// export default function Navbar({ signin, authenticated }) {
//   if (signin) {
//     return (
//       <section className="bg-navy">
//         <nav className="container navbar navbar-expand-lg navbar-dark">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               <img src="/images/logo.svg" alt="semina" />
//             </a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div className="navbar-nav ms-auto my-3 my-lg-0">
//                 <NavLink href="/">Home</NavLink>
//                 <NavLink href="/browse">Browse</NavLink>
//                 <NavLink href="#stories">Stories</NavLink>
//                 <NavLink href="#about">About</NavLink>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </section>
//     );
//   } else if (authenticated) {
//     return (
//       <section className="bg-navy">
//         <nav className="container navbar navbar-expand-lg navbar-dark">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               <img src="/images/logo.svg" alt="semina" />
//             </a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div className="navbar-nav mx-auto my-3 my-lg-0">
//                 <NavLink href="/">Home</NavLink>
//                 <NavLink href="/browse">Browse</NavLink>
//                 <NavLink href="#stories">Stories</NavLink>
//                 <NavLink href="#about">About</NavLink>
//               </div>
//               <div className="navbar-nav ms-auto">
//                 <div className="nav-item dropdown d-flex flex-column flex-lg-row align-items-lg-center authenticated gap-3">
//                   <span className="text-light d-none d-lg-block">Hello, Shayna M</span>

//                   {/* <!-- START: Dropdown Toggler for Desktop --> */}
//                   <a className="nav-link dropdown-toggle mx-0 d-none d-lg-block" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     <img src="/images/avatar.png" alt="semina" width="60" />
//                   </a>
//                   {/* <!-- END: Dropdown Toggler for Desktop --> */}

//                   {/* <!-- START: Dropdown Toggler for Mobile --> */}
//                   <a className="d-block d-lg-none dropdown-toggle text-light text-decoration-none" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
//                     <img src="/images/avatar.png" alt="semina" width="60" />
//                   </a>
//                   {/* <!-- END: Dropdown Toggler for Mobile --> */}

//                   {/* <!-- START: Dropdown Menu for Desktop --> */}
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Dashboard
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Settings
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Rewards
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="/signin">
//                         Sign Out
//                       </a>
//                     </li>
//                   </ul>
//                   {/* <!-- END: Dropdown Menu for Desktop --> */}

//                   {/* <!-- START: Dropdown Menu for Mobile --> */}
//                   <div className="collapse" id="collapseExample">
//                     <ul className="list-group">
//                       <li>
//                         <a className="list-group-item" href="#">
//                           Dashboard
//                         </a>
//                       </li>
//                       <li>
//                         <a className="list-group-item" href="#">
//                           Settings
//                         </a>
//                       </li>
//                       <li>
//                         <a className="list-group-item" href="#">
//                           Rewards
//                         </a>
//                       </li>
//                       <li>
//                         <a className="list-group-item" href="signin.html">
//                           Sign Out
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* <!-- END: Dropdown Menu for Mobile --> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </section>
//     );
//   }
//   return (
//     <nav className="container navbar navbar-expand-lg navbar-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           <img src="/images/logo.svg" alt="semina" />
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav mx-auto my-3 my-lg-0">
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/browse">Browse</NavLink>
//             <NavLink href="#stories">Stories</NavLink>
//             <NavLink href="#about">About</NavLink>
//           </div>
//           <div className="d-grid">
//             <Link href="/signin">
//               <a className="btn-navy">Sign In</a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

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
export default function Navbar({ signin }) {
  const router = useRouter(),
    pathSignin = "/signin",
    // Use State
    [token, setToken] = useState("");

  useEffect(() => {
    return setToken(Cookies.get("token"));
  });

  // Handle Signout
  const handleSignout = () => {
    // Remove Token User From Signin
    Cookies.remove("token");

    toast.success("Successfully Sign Out", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Redirect to Signin Page
    router.push("/signin");
  };

  return (
    <nav className="container navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/images/logo.svg" alt="semina" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className={signin ? "navbar-nav ms-auto my-3 my-lg-0" : "navbar-nav mx-auto my-3 my-lg-0"}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/browse">Browse</NavLink>
            <NavLink href="#stories">Stories</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>
          {/* Cek router Signin */}
          {router.pathname !== pathSignin && (
            // <div className={token ? "navbar-nav ms-auto" : "d-grid"}>
            <div className={`d-grid ${token ? "ms-auto" : ""}`}>
              {token ? (
                <div className="navbar-nav">
                  <div className="nav-item dropdown d-flex flex-column flex-lg-row align-items-lg-center authenticated gap-3">
                    <span className="text-light d-none d-lg-block">Hello, Shayna M</span>

                    {/* <!-- START: Dropdown Toggler for Desktop --> */}
                    <a className="nav-link dropdown-toggle mx-0 d-none d-lg-block" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/avatar.png" alt="semina" width="60" />
                    </a>
                    {/* <!-- END: Dropdown Toggler for Desktop --> */}

                    {/* <!-- START: Dropdown Toggler for Mobile --> */}
                    <a className="d-block d-lg-none dropdown-toggle text-light text-decoration-none" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                      <img src="/images/avatar.png" alt="semina" width="60" />
                    </a>
                    {/* <!-- END: Dropdown Toggler for Mobile --> */}

                    {/* <!-- START: Dropdown Menu for Desktop --> */}
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link href="/dashboard">
                        <a className="dropdown-item">Dashboard</a>
                      </Link>
                      <Link href="#">
                        <a className="dropdown-item">Settings</a>
                      </Link>
                      <Link href="#">
                        <a className="dropdown-item">Rewards</a>
                      </Link>
                      <Button className="dropdown-item" children="Sign Out" action={handleSignout} />
                    </ul>
                    {/* <!-- END: Dropdown Menu for Desktop --> */}

                    {/* <!-- START: Dropdown Menu for Mobile --> */}
                    <div className="collapse" id="collapseExample">
                      <ul className="list-group">
                        <Link href="/dashboard">
                          <a className="list-group-item">Dashboard</a>
                        </Link>
                        <Link href="#">
                          <a className="list-group-item">Settings</a>
                        </Link>
                        <Link href="#">
                          <a className="list-group-item">Rewards</a>
                        </Link>
                        <li>
                          <Button className="list-group-item" children="Sign Out" action={handleSignout} />
                        </li>
                      </ul>
                    </div>
                    {/* <!-- END: Dropdown Menu for Mobile --> */}
                  </div>
                </div>
              ) : (
                <Link href="/signin">
                  <a className="btn-navy">Sign In</a>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
