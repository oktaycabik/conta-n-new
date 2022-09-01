import React from "react";
import Link from "next/link"
const Banner = () => {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="row ">
          <div className="col-lg-5 col-12 hero-banner-content pt-5 ">
            <h1 className="banner-title">Bürocontainer</h1>
            <h2 className="banner-title2 text-color">Direkt ab Werk</h2>
            <div className="banner-card mt-4">
            
              <p>
              <strong>Contain Haus Container</strong>{" "} werden mit besonderer Spitzentechnologie hergestellt und sind
                mit seiner statischen Berechnungen zur idealem und modernsten
                Container-Baukonstruktion auf dem europäischen Markt geworden.
              
              </p>
              <p className="text-color">
                Bei der Herstellung von unseren Containern stehen Langlebigkeit,Materialqualität und Ästhetik im Vordergrund.
                </p>{" "}
                <p>
                  <b>Sie können sich jede Zeit auch an unsere Kundenberater wenden, um unsere Bürocontainer zu kaufen oder zu mieten.</b>
                </p>
            </div>
            <div className=" buttons-row mt-3">
            <Link href="/burocontainer">
              <a className="banner-btn">MEHR ERFAHREN</a>
              </Link>
              <Link href="/kontakt">
              <a className="banner-btn2 ms-5">KONTAKT</a>
              </Link>
            </div>
          </div>
          <div className="col-1 ">
            <div className="border-banner mx-auto"></div>
          </div>
          <div className="col-lg-6 ms-auto col-0 pt-5 test mt-5 ">
            <div className="row">
              <div className="banner-info-card me-2 mt-2">
                <span className="banner-card-text">Bürocontainer</span>
                <span className="banner-card-desc">
                  Mit der Entwicklung der Technologie ist die Notwendigkeit
                  entstanden, Strukturen zu verwenden, die schneller und
                  langlebiger installiert werden können.
                  <br></br>
                  <a
                    onClick={() => setShow2(show2 === false ? true : false)}
                    className="text-light cursor"
                  >
                    <b> Weiterlesen...</b>
                  </a>{" "}
                  <br></br>
                  {show2 && (
                    <>
                      Hightech-Materialien, die bei der Herstellung von
                      Containerbüros verwendet werden, haben die Büros
                      langlebiger gemacht. Container werden bevorzugt, weil sie
                      tragbar sind, wiederholt verwendet werden können und
                      kostengünstiger sind.
                    </>
                  )}
                </span>
              </div>
              <div className="banner-info-card mt-2">
                <span className="banner-card-text">
                  Preise für Bürocontainer
                </span>
                <span className="banner-card-desc">
                  Container von Contain Haus wurden mit Spitzentechnologie
                  entworfen und haben ihre ideale Form mit statischen
                  Berechnungen erhalten. Bei der Herstellung von Containern
                  stehen Langlebigkeit, Materialqualität und Ästhetik im
                  Vordergrund.
                  <a
                    onClick={() => setShow3(show3 === false ? true : false)}
                    className="text-light cursor"
                  >
                    <br></br>
                    <b> Weiterlesen...</b>
                  </a>{" "}
                  <br></br>
                  {show3 && (
                    <>
                      Auch wenn Schall- und Wärmedämmung, Langlebigkeit und
                      Sicherheit im Vordergrund stehen, sind Containerpreise im
                      Vergleich zu anderen Bauweisen deutlich preisgünstiger.
                      Für den Ankauf von Bürocontainern und gebrauchten
                      Bürocontainern können Sie sich an unsere Kundenberater
                      wenden.
                    </>
                  )}
                </span>
              </div>
              <div className="banner-info-card me-2 mt-2">
                <span className="banner-card-text">Technik im Büro</span>
                <span className="banner-card-desc">
                  Die Außenwände der Container bestehen aus Stahlblech. Türen
                  und Fenster bilden weitere Bestandteile des Containers. Ein
                  Standardcontainer hat eine Breite von 240 cm, eine Länge von
                  600 cm und eine Höhe von 2,5 Metern. <br></br>
                  <a
                    onClick={() => setShow(show === false ? true : false)}
                    className="text-light cursor"
                  >
                    <b> Weiterlesen...</b>
                  </a>{" "}
                  <br></br>
                  {show && (
                    <>
                      In den letzten Jahren haben sich andere Abmessungen der
                      Container als die Standardabmessungen
                      herauskristallisiert. Großes Interesse besteht auch an
                      Containern mit einer Breite von 300 cm und einer Länge von
                      700 cm. Bürocontainer werden aufgrund ihres attraktiven
                      Preisvorteils und ihres tragbaren modularen Aufbaus sehr
                      bevorzugt. Wenn Sie möchten, kaufen Sie gebrauchte
                      Bürocontainer.
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
