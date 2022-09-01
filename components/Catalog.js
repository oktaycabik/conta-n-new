import React from "react";

const Catalog = () => {
  return (
    <section className="container">
      <div className="row pr-5 pl-5 mt-5 mb-5">
        <div className="col-lg-9 col-12">
          <span>
            Conliving Raumlösung - Container kaufen - Container mieten
          </span>
          <p className="catalog-text">
            Die Conliving GmbH bietet Ihnen zahlreiche Variationen und
            Kombinationen an Containern. Von Einzelcontainern bis zu Mehrfach–
            und Bürocontainern, bieten wir eine umfangreiche Auswahl an
            Angeboten. Darüber hinaus kümmern wir uns, um die Sicherheit, den
            Transport und die Montage von Containern.
          </p>
          <p className="catalog-text">
            Die Conliving GmbH ist ein modernes und dynamisches Unternehmen, das
            sich mit der kompletten Herstellung, von industriellen Objekten,
            Stahlkonstruktionen, Containern und Modulbauten beschäftigt, d.h.
            von ihrem Design und Entwicklung bis auf die Herstellung und
            Montage. Wir bieten Ihnen preiswerte Produkte, eine schnelle
            Lieferung und große Kapazitäten. Egal, ob Sie kurzfristig neue
            Räumlichkeiten benötigen, oder die Auslagerung Ihres Geschäftes
            planen, wir sind der ideale Partner bei der Umsetzung Ihrer Wünsche
            und Ziele.
          </p>
          <p className="catalog-text">
            Durch eine schnelle Abwicklung und geringe Lieferzeit sind die
            Kauflösungen von der Conliving GmbH die ideale Lösung um schnell
            neuen Wohnraum zu schaffen.
          </p>
          <div className="row mt-5">
            <div className="col-lg-3 col-6 mt-2">
              <div className="text-center cerifica"> EN 1090-1</div>
              <div className="text-center">LL-C (Certifaction)</div>
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <div className="text-center cerifica">EN 1090-1</div>
              <div className="text-center">LL-C (Certifaction)</div>
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <div className="text-center cerifica">EN 1090-1</div>
              <div className="text-center">LL-C (Certifaction)</div>
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <div className="text-center cerifica">EN 1090-1</div>
              <div className="text-center">LL-C (Certifaction)</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6 m-auto mt-3">
          <img
            className="w-100"
            src="/assets/img/katalog.webp"
          />
          <div className="d-flex justify-content-center">
            {" "}
            <a href="https://www.containhaus.de/assets/img/KATALOG.pdf" target="blank" className="button-dark mt-2">Download Katalog</a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
