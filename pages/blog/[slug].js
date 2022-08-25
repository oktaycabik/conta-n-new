import React from "react";
import Catalog from "../../components/Catalog";
import ImportantQuestions from "../../components/ImportantQuestions";
const blog = () => {
  return (
    <>
      <section className="container">
        <div className="row pl-5 pr-5 justify-content-center">
          <div>
            <h2 className="blog-page-title">Wohncontainer und Bürocontainer</h2>
            <p className="blog-page-text mt-4">
              Es gibt verschiedene Situationen, in denen Wohn- oder
              Bürocontainer benötigt werden. Beim Containertyp Standard kann
              eine komfortable und gemütliche Ausstattung vorausgesetzt werden.
              Schließlich sollen sich hier Menschen über einen längeren Zeitraum
              hinweg wohlfühlen und sogar darin leben. Wohn- und Bürocontainer
              können, je nach Ausführung, unterschiedlich gedämmt sein. Zudem
              besteht die Möglichkeit, alle Leitungen und Anschlüsse versteckt
              zu verlegen. Wie die Innenausstattung am Ende aussieht, hängt
              stark vom Wunsch der Kunden ab. Möchten Sie mehr über die
              unterschiedlichen Ausführungen unserer Container erfahren? In
              einem separater Blogartikel zeigen wir Ihnen die Unterschiede
              zwischen unseren Basis und Standard Containern auf.
            </p>
            <p className="blog-page-text mt-2">
              <b> Bürocontainer</b> werden beispielsweise dann benötigt, wenn
              ein Unternehmen schnell wächst, jedoch noch kein neues Bürogebäude
              gefunden hat. Die Mitarbeiter, die keinen Platz mehr im alten Büro
              finden, können in einem Bürocontainer, der sehr komfortabel
              ausgestattet werden kann, untergebracht werden. Unsere
              Bürocontainer kommen in folgenden Bereichen zum Einsatz:
            </p>
            <ul className="mb-3">
              <li className="mt-2">
                In Form einer Büroanlage als dauerhaftes Büro
              </li>
              <li className="mt-2">Für Vereine als Mannschaftscontainer</li>
              <li className="mt-2">Als Aufenthalts- und Pausencontainer</li>
              <li className="mt-2">Als Umkleide für Mitarbeitende</li>
            </ul>
            <div className="row">
              <div className="col-lg-6 col-12">
                <img
                  className="w-100"
                  src="https://conliving.de/wp-content/uploads/2022/03/db2-2-individual-Conliving-doppelfenster-bodentief-aussen.jpg"
                />
              </div>
              <div className="col-lg-6 col-12">
                <img
                  className="w-100"
                  src="https://conliving.de/wp-content/uploads/2022/03/db2-2-individual-Conliving-doppelfenster-bodentief-aussen.jpg"
                />
              </div>
            </div>
            <p className="blog-page-text mt-5 mb-5">
              <b>Wohncontainer</b> können als dauerhafte oder kurzfristige
              Unterkunft eingesetzt werden. Aufgrund ihrer langen Lebensdauer
              bieten sie sich ideal als dauerhafte Unterkunft an. Dafür können
              Sie individuell ausgestattet werden, beispielsweise mit TV- oder
              Internetanschluss. Als schnell umzusetzende Lösung finden sie
              beispielsweise auf Langzeitbaustellen Verwendung, auf denen das
              Personal einen Platz zum Wohnen benötigt. Auch Flüchtlinge werden
              sehr oft in Containern untergebracht.
            </p>
            <div className="row   ">
              <div className="col-lg-6 col-12">
                <img
                  className="w-100"
                  src="https://conliving.de/wp-content/uploads/2022/03/db2-2-individual-Conliving-doppelfenster-bodentief-aussen.jpg"
                />
              </div>
              <div className="col-lg-6 col-12">
                <img
                  className="w-100"
                  src="https://conliving.de/wp-content/uploads/2022/03/db2-2-individual-Conliving-doppelfenster-bodentief-aussen.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <ImportantQuestions />
      </section>
      <section>
        <Catalog />
      </section>
    </>
  );
};

export default blog;
