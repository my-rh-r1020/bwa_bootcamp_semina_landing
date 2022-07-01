import Head from "next/head";

import "../styles/globals.css";
import "../styles/main.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Bootstrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

        {/* SASS CSS */}
        {/* <link rel="stylesheet" href="main.css" /> */}
        {/* <link rel="stylesheet" href={styles} /> */}

        {/* Script Responsive View */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
      </Head>
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default MyApp;
