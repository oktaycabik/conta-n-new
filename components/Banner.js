import React from "react";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-0 pt-5 test">
            <div className="banner-info-card ">
                <div className="banner-border"></div>
                <span className="banner-card-text">Container Kaufen</span>
                <span className="banner-card-desc">Finanzierung ohne Eigenkapital. LEASING AB 48 MONATEN</span>
            </div>
            <div className="banner-info-card mt-3">
                <div className="banner-border"></div>
                <span className="banner-card-text">Container Kaufen</span>
                <span className="banner-card-desc">Finanzierung ohne Eigenkapital. LEASING AB 48 MONATEN</span>
            </div>
            <div className="banner-info-card mt-3">
                <div className="banner-border"></div>
                <span className="banner-card-text">Container Kaufen</span>
                <span className="banner-card-desc">Finanzierung ohne Eigenkapital. LEASING AB 48 MONATEN</span>
            </div>
          </div>
          <div className="col-lg-6 col-12 hero-banner-content pt-5 pl-5">
            <h1 className="banner-title">Bürocontainer</h1>
            <h2 className="banner-title text-color">Kaufen</h2>
            <div className="banner-card mt-4">
              <p>
                {" "}
                <strong>
                  Containeranlagen: Individuelle Gestaltung und Aufteilung nach
                  Ihren Wünschen
                </strong>{" "}
              </p>
              <p>
                Mit unseren Containeranlagen haben Sie die Möglichkeit flexiblen
                und schnelle Arbeitsraum zu schaffen, welcher sich von
                herkömmlichen Firmengebäuden nicht unterscheidet.{" "}
                <span className="text-color">
                  Gestalten Sie zusammen mit unseren Experten Ihre
                  Containeranlage.
                </span>{" "}
              </p>
            </div>
            <div className=" buttons-row mt-3">
              <button className="banner-btn">MEHR ERFAHREN</button>
              <button className="banner-btn2 ms-5">KONTAKT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
