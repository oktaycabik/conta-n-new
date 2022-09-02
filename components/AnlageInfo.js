import React from "react";
import Link from "next/link"
const AnlageInfo = () => {
  return (
    <section className="container">
      <div className="row pr-5 pl-5  mt-5 mb-5">
        <div className="col-lg-6 col-12  pt-4 ">
          <h3 className="mb-4 mt-2">
            {" "}
            <b>Raumschiffähnlicher XL-Lebenscontainer</b>{" "}
          </h3>
          <p>
            Wir möchten Ihnen mit unserem XL-Modell, das 3 x 7 Meter groß ist,
            ein völlig neues Erlebnis bieten. Wenn Sie einen Container suchen,
            in dem Sie Ihre Bedürfnisse wie Küche, Bad, WC erfüllen können, sind
            Sie bei uns an der richtigen Adresse. Darüber hinaus können Sie
            Ihren Container nach Ihren Wünschen gestalten und Dinge des
            täglichen Bedarfs wie Tische, Stühle, Betten problemlos
            unterbringen.
          </p>
          <Link href="/wohncontainer">
          <a className="button-dark mt-2 mb-3">Zur Wohncontaineranlage</a>
          </Link>
        </div>
        <div className="col-lg-6 col-12 ">
          <img
            className="w-100 shadow"
            src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/3f8d568a-657e-4683-fcff-f74faa05bd00/public"
          />
        </div>
      </div>
    </section>
  );
};

export default AnlageInfo;
