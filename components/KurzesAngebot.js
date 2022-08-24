import React from "react";
import angebots from "../data/topAngebot.json";
import Link from "next/link"
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
        {angebots.map((angebot) => (
          <div key={angebot.id} className="col-lg-6 col-12">
            <div className="card angebote-card">
              <img
                className="w-100"
                src="https://conliving.de/wp-content/uploads/2020/10/wohncontainer_w1_angebot.jpg"
              />
              <div className="card-body">
                <h2 className="text-start angebote-head"> {angebot.title}</h2>

                <div className="d-flex justify-content-between">
                  <div className="text-angebote">{angebot.price}</div>
                  <div className="text-angebote">sofort erhältlich</div>
                </div>
                <p className="text-start desc-angebote">{angebot.desc}</p>
                <p className="text-start desc-angebote">{angebot.text}</p>

                <div className="d-flex justify-content-center">
                <Link href="/angebote">
              
                  <button className="button-dark-small">
                    {angebot.button}
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KurzesAngebot;
