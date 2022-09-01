import React from "react";
import Link from "next/link";
const ContainerIntro = () => {
  return (
    <>
      <div className="container ">
        <section>
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-5 col-12 ">
              <Link href="/burocontainer">
                <img
                  className="intro-img"
                  src="/assets/img/ShopDeutsch/BLACKDIAMOND/2.webp"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-6 col-12  mt-2">
              <h3 className="text-start volle-head ps-2">
                {" "}
                <b>Hohe Materialqualität und hochwertige Verarbeitung</b>
              </h3>
              <p className="info ps-2">
                Contain Haus Bürocontainer werden mit ihrem stilvollen Design
                bevorzugt. Sie werden auf eine Verarbeitungsqualität stoßen, die
                Sie und Ihre Mitarbeiter vergessen werden, dass Sie sich im
                Container befinden. Sie können Ihren Bürocontainer nach Ihren
                Wünschen gestalten und die gewünschte Farbe wählen. Unsere
                erfahrenen und freundlichen Verkaufsberater unterstützen Sie
                gerne bei der Erstellung Ihres Wunschdesigns. <br/> 
                Auf Wunsch können Sie Contain Haus Bürocontainer als Flatpack
                kaufen und selbst herstellen. Auf diese Weise können Sie sparen
                und zu günstigeren Kosten installieren. Darüber hinaus können
                Sie durch die Gestaltung Ihres eigenen Containers Teile wie WC,
                Glas, Türen platzieren, wo Sie möchten, große Bereiche öffnen
                und Ihren Container auf Wunsch mit Glaswänden individualisieren.
              </p>

              <div className="d-flex mt-2">
                <Link href="/burocontainer">
                  <a className="button-dark m-auto">Bürocontainer</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContainerIntro;
