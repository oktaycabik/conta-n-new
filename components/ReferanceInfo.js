import React from "react";
import Link from "next/link"
const ReferanceInfo = () => {
  return (
    <section className="container">
      <div className="row mt-5 pr-5 pl-5 img-reverse mb-4">
      

        <div className="col-lg-6 col-12 ">
          <img className="w-100 shadow" src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/3086590a-97d7-49d5-099c-b9774e2f4b00/public" />
        </div>
        <div className="col-lg-6 col-12 pt-4 ">
          <h3 className="mb-4 mt-4">
            <b>Preise für Bürocontainer</b>
          </h3>
          <p>
            Container von Contain Haus wurden mit Spitzentechnologie entworfen
            und haben ihre ideale Form mit statischen Berechnungen erhalten. Bei
            der Herstellung von Containern stehen Langlebigkeit,
            Materialqualität und Ästhetik im Vordergrund. Auch wenn Schall- und
            Wärmedämmung, Langlebigkeit und Sicherheit im Vordergrund stehen,
            sind Containerpreise im Vergleich zu anderen Bauweisen deutlich
            preisgünstiger. Für den Ankauf von und gebrauchten können Sie sich
            an unsere Kundenberater wenden.
          </p>
          <Link href="/referenzen">
          <a className="button-dark mt-3 mb-3">Referenzen</a>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default ReferanceInfo;
