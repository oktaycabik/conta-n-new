import Layout from "../components/Layout";
import Script from "next/script"
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/catalog.css";
import "../styles/angebote.css";
import "../styles/contact.css";
import "../styles/referenzen.css";
import "../styles/category-image.css";
import "../styles/container-intro.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      ></link>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      />
      <Layout> 
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
