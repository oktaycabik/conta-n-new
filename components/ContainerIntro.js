import React from "react";
import Link from "next/link";
const ContainerIntro = () => {
  return (
    <>
      <div className="container ">
        <section className="pl-5 pr-5">
          <div className="row justify-content-center mt-5 mb-5   border">
            <div className="col-lg-6 col-12 p-0">
              <Link href="/burocontainer">
                <img
                  className="intro-img"
                  src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/04905a31-0dab-485e-b847-ed6fccd1ea00/public"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-6 col-12 p-4 mt-2 ">
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
                gerne bei der Erstellung Ihres Wunschdesigns. 
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
