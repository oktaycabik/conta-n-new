import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRouter } from "next/router";

const Contact = () => {
  const form = useRef();
  const name = useRef();
  const mail = useRef();
  const adress = useRef();
  const info = useRef();

  const router = useRouter();

  const handleSubmit = (e) => {
    const validate =
      name.current.value.length > 0 &&
      mail.current.value.length > 0 &&
      adress.current.value.length > 0 &&
      info.current.value.length > 0;
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h3vossg",
        "template_1511ijd",
        form.current,
        "rcXGSNcChmM6BMPmu"
      )
      .then(
        (result) => {
          console.log("result.text", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (validate) {
      router.push("/danke");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mb-4">
          <h2 className="text-center contact-title">Kontaktformular ausfüllen & Preisübersicht erhalten</h2>
          <p className="text-center mt-2 contact-text">
            Sie benötigen kurzfristig eine Lösung für Wohn- oder Lagerraum?
            Egal, ob Sie kurzfristig neue Räumlichkeiten benötigen, oder die
            Auslagerung Ihres Geschäfts planen, Conliving ist der Ideale Partner
            bei der Umsetzung Ihrer Wünsche und Ziele.
          </p>
        </div>
      </div>
      <div className="contact mb-5">
        <div className="container py-4">
          <div className="row align-items-center  border">
            <div className="col-lg-4 col-md-12 mx-auto col-12 ">
              <h2 className="">Kontaktieren Sie uns</h2>
              <div className="d-flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <h5 className="ms-4">
                  {" "}
                  <a href="tel:+4923028894880" className="contact-info text-dark">
                    +49 2302 889 4880
                  </a>
                </h5>
              </div>
              <div className="d-flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <h5 className="ms-4">
                  {" "}
                  <div className="contact-info ">
                    Am Huchtert 44, 58456 Witten Deutschland
                  </div>
                </h5>
              </div>
              <div className="d-flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <h5 className="ms-4">
                  {" "}
                  <a href="mailto:info@containhaus.de" className="contact-info text-dark">
                    info@containhaus.de
                  </a>
                </h5>
              </div>
              <div className="d-flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-box-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                  />
                </svg>
                <h5 className="ms-3">
                  <Link href="/assets/img/KATALOG.pdf">
                    <a
                      className="contact-info-btn text-dark"
                      id="PdfDetail"
                      target="_blank"
                    >
                      <span className="text-dark">Katalog herunterladen</span>
                    </a>
                  </Link>
                </h5>
              </div>
              <div className="mt-4 text-dark">
                <div className="footer-head text-dark">
                  Inhaber:<span className="footer-color text-dark">Abraham Wach </span>{" "}
                </div>
                <div className="footer-head text-dark">
                  BANKNAME:
                  <span className="footer-color text-dark">
                    Volksbank Sprockhövel
                  </span>{" "}
                </div>
                <div className="footer-head text-dark">
                  SWIFTCODE:<span className="footer-color text-dark">GENODEM1SPO </span>
                </div>
                <div className="footer-head text-dark">
                  KONTOINHABER:
                  <span className="footer-color text-dark">
                    CONTAIN HAUS CONTAINER
                  </span>{" "}
                </div>
                <div className="footer-head text-dark">
                  IBAN:
                  <span className="footer-color text-dark">
                    DE4145 2615 4700 1398 6200
                  </span>{" "}
                </div>
                <div className="footer-head text-dark">
                  Steuernummer. :
                  <span className="footer-color text-dark">348/5203/3253</span>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12 me-5">
              <div className="card mt-4 mb-4 ">
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <label className="row">
                    Name Nachname
                    <input
                      required
                      ref={name}
                      type="text"
                      name="name"
                      className="contact-input"
                    />
                  </label>
                  <label className="row">
                    Telefon (Pflichtfeld)
                    <input type="tel" name="number" className="contact-input" />
                  </label>
                  <label className="row">
                    E-mail
                    <input
                      ref={mail}
                      required
                      type="email"
                      name="email"
                      className="contact-input"
                    />
                  </label>
                  <label className="row">
                    Liefeadresse
                    <input
                      ref={adress}
                      required
                      type="text"
                      name="lieferadresse"
                      className="contact-input"
                    />
                  </label>
                  <label className="row">
                    Nachrict
                    <textarea
                      ref={info}
                      required
                      name="Message"
                      type="text"
                      cols="40"
                      rows="5"
                      className="contact-textarea"
                    />
                  </label>
                  <div className="d-flex justify-content-center">
                    <button type="submit" value="Send" className="button-dark">
                      Senden
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
