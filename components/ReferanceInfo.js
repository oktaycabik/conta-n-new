import React from "react";

const ReferanceInfo = () => {
  return (
    <section className="container">
      <div className="row mt-5 pr-5 pl-5 img-reverse mb-4">
        <div className="col-lg-6 col-12 pt-4 ">
          <h3 className="mb-4 mt-4">
            <b>
              Sie benötigen eine individuelle Lösung? Bei uns sind Sie richtig.
            </b>
          </h3>
          <p>
            Ob Einzelcontainer oder Mehrfachcontainer unsere preiswerten,
            herkömmlich, errichteten Wohngebäude beinhalten vollständig alle
            derzeitig gegebenen Anforderungen. Nach Wunsch können wir unsere
            Experten eine visuelle Darstellung Ihrer Wunschcontainer erstellen.
          </p>
          <button className="button-dark mt-3">Zu den Referzen</button>
        </div>

        <div className="col-lg-6 col-12 ">
          <img className="w-100" src="https://cdn-djgbe.nitrocdn.com/aexqLNkCYpLucHGfDgNbHjSJwfoJxIwc/assets/static/optimized/rev-8ec7905/wp-content/themes/conliving-theme-2-2/assets/images/referenzen-view.png" />
        </div>
      </div>
    </section>
  );
};

export default ReferanceInfo;
