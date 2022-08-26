import React from "react";

const ContainerIntro = () => {
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <section className="col-lg-8 col-12  text-center ofset-4 mt-5">
            <h1 className="intro-head">
              Conliving Container und mobile Raumsysteme
            </h1>
            <p className="intro-info">
              <b> Wir sind der richtige Partner,</b> wenn Sie smarte
              Raumlösungen mithilfe von Containern planen, kaufen oder leasen
              möchten Ihr Problemlöser und Helfer mit einem Rundumservice für
              eine kompetente und vollständige Planung für diverse
              Containeranlagen aber auch individuelle EInzelcontainer, wie auch
              herkömliche Baustellen- und Unterkunftscontainer (Wohncontainer).
            </p>
          </section>
        </div>

        <section>
          <div className="row justify-content-center mt-4 mb-5">
            <div className="col-lg-5 col-12 ">
              <img
                className="intro-img"
                src="https://conliving.de/wp-content/themes/conliving-theme-2-2/assets/images/1x1-conliving-w6-schnelleunterkunft.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-12 p-4 mt-3">
              <h3 className="text-center volle-head">
                {" "}
                <b>
                  {" "}
                  Wohncontainer - Die einfache alternative zu teuren
                  Unterkünften & volle Freiheit dazu{" "}
                </b>
              </h3>
              <p  className="info">
                Unsere Unterkünfte sind langfristig eine günstige und
                nachhaltige Alternative zu teuren Hotelunterkünften. Als
                Aufsteller profitieren Sie außerdem von der vollen
                Verfügungsfreiheit Ihrer Container und bleiben unabhängig von
                Hotel Formalitäten. <br /> Bei der Planung und Umsetzung eines oder
                mehrerer unserer Raumsysteme unterstützen wir Sie gerne.
                Außerdem profitieren Sie beim Leasing von Steuervorteilen, da
                die Containeranlage hierbei nicht in die Bilanz kommt und somit
                die Leasingraten als Betriebsausgaben steuerlich sofort und voll
                abzugsfähig sind. Mit uns können Sie durch die enge
                Partnerschaft mit einem der größten deutschen
                Finanzdienstleister von äußerst attraktiven
                Finanzierungsangeboten profitieren.
              </p>
              <div className="d-flex mt-2">
              <button className="button-dark m-auto">Wonhcontainer</button>
              </div>
           
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
};

export default ContainerIntro;
