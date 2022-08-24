import React from "react";

const AnlageInfo = () => {
  return (
    <section className="container">
      <div className="row pr-5 pl-5  mt-5 mb-5">
        <div className="col-lg-6 col-12 ">
          <img className="w-100" src="https://cdn-djgbe.nitrocdn.com/aexqLNkCYpLucHGfDgNbHjSJwfoJxIwc/assets/static/optimized/rev-8ec7905/wp-content/themes/conliving-theme-2-2/assets/images/wohncontainer-fuer-arbeiter.jpg" />
        </div>
        <div className="col-lg-6 col-12  pt-4 ">
          <h3 className="mb-4 mt-5">
            {" "}
            <b>
              Wohncontainer für Arbeiter: Sie benötigen mehr Platz für Ihre
              Mitarbeiter?
            </b>{" "}
          </h3>
          <p>
            Mit der Wohncontaineranlage W7 bieten Sie Ihren Mitarbeitern und
            Partnern die optimale Raumlösung für einen kurzen oder dauerhaften
            Aufenthalt
          </p>
          <button className="button-dark mt-4">Zur Wohncontaineranlage</button>
        </div>
      </div>
    </section>
  );
};

export default AnlageInfo;
