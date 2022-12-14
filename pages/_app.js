import Layout from "../components/Layout";
import Script from "next/script"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/blog.css";
import "../styles/catalog.css";
import "../styles/angebote.css";
import "../styles/whywe.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/banner.css";
import "../styles/product-page.css";
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
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"
      />
      <Layout> 
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
