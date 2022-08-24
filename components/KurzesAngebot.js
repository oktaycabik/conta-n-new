import React from "react";

const KurzesAngebot = () => {
  return (
    <section className="container">
      <div className="row pr-5 pl-5   text-center">
        <h3 className="angebote">
          <span className="text-danger">Kurzes Angebot:</span> <br></br>
          Nur für kurze Zeit! Bürocontainer Lieferbar innerhalb von 5-7
          Werktagen
        </h3>
      </div>
      <div className="row  pr-5 pl-5  text-center mt-5">
        <div className="col-lg-6 col-12">
          <div className="card angebote-card">
            <img
              className="w-100"
              src="https://conliving.de/wp-content/uploads/2020/10/wohncontainer_w1_angebot.jpg"
            />
            <div className="card-body">
              <h2 className="text-start angebote-head">
                {" "}
                (NEU!) Angebot Wohncontainer W1(14,7M²)
              </h2>

              <div className="d-flex justify-content-between">
                <div className="text-angebote">
                  14.500,00€ 13.200,00 € exkl. 19% MwSt zzgl.
                </div>
                <div className="text-angebote">sofort erhältlich</div>
              </div>
              <p className="text-start desc-angebote">
                Sofort lieferbar. Der Wohncontainer W1 ist neu! inkl. einer
                Teeküche und Wohninterieur wie Bett, Tische und einem
                Badezimmer.
              </p>
              <p className="text-start desc-angebote">
                Hat Ihnen unser Produkt gefallen? Wir freuen uns auf
                IhreBewertung!
              </p>
            
              <div className="d-flex justify-content-center">
                <button className="button-dark-small">Jezt sparen</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className="card angebote-card">
            <img
              className="w-100"
              src="https://conliving.de/wp-content/uploads/2021/10/w1_aussen_5_web_angebot.jpg"
            />
          <div className="card-body">
              <h2 className="text-start angebote-head">
                {" "}
                (NEU!) Angebot Wohncontainer W1(14,7M²)
              </h2>

              <div className="d-flex justify-content-between">
                <div className="text-angebote">
                  14.500,00€ 13.200,00 € exkl. 19% MwSt zzgl.
                </div>
                <div className="text-angebote">sofort erhältlich</div>
              </div>
              <p className="text-start desc-angebote">
                Sofort lieferbar. Der Wohncontainer W1 ist neu! inkl. einer
                Teeküche und Wohninterieur wie Bett, Tische und einem
                Badezimmer.
              </p>
              <p className="text-start desc-angebote">
                Hat Ihnen unser Produkt gefallen? Wir freuen uns auf
                IhreBewertung!
              </p>
            
              <div className="d-flex justify-content-center">
                <button className="button-dark-small">Jezt sparen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KurzesAngebot;
