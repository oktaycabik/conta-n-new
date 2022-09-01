import React from "react";
import angebots from "../data/topAngebot.json";
import Link from "next/link";
const KurzesAngebot = () => {
  return (
    <section className="container">
    
      <div className="row  pr-5 pl-5  text-center mt-3">
        <>
          <section className="dark">
            <div className="container py-4">
              <article className="postcard dark blue">
                <Link href="/angebote">
                  <a className="postcard__img_link" href="#">
                    <img
                      className="postcard__img"
                      src="/assets/img/ShopDeutsch/SPECIALGLASS/masarawi/2.webp"
                      alt="Image Title"
                    />
                  </a>
                </Link>
                <div className="postcard__text">
                  <h1 className="postcard__title">
                    <a className="text-dark" >Black Panter(38,40m²)</a>
                  </h1>
                  <div className="postcard__subtitle ">29.000,00 €</div>
                  <div className="postcard__bar" />
                  <div className="postcard__preview-txt">
                    <p>
                      Bürocontainer können Sie sowohl mieten als auch kaufen. Es
                      kann in den von Ihnen gewünschten Abmessungen hergestellt
                      werden. Contain Haus, das führende Unternehmen auf dem
                      Containermarkt, bietet Qualität zum günstigen Preis.
                    </p>
                    <p>
                      3 x Zimmer, 1x Glas Eingangstür, 1x Standard
                      Eingangstür,2x Fenster, 4 x Bodentiefe Fenster, Standard
                      Fenster, 2 x Kleines Fenster
                    </p>
                    <Link href="/angebote">
                    
                    <a className="button-white text-dark mt-3">Angebote</a>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="postcard dark red">
                <Link href="/angebote">
                  <a className="postcard__img_link" href="#">
                    <img
                      className="postcard__img"
                      src="/assets/img/ShopDeutsch/BLACKDIAMOND/1.webp"
                      alt="Image Title"
                    />
                  </a>
                </Link>
                <div className="postcard__text">
                  <h1 className="postcard__title ">
                    <a className="text-dark" >Black Diamond(12,00m²)</a>
                  </h1>
                  <div className="postcard__subtitle ">8.500,00 €</div>
                  <div className="postcard__bar" />
                  <div className="postcard__preview-txt">
                    <p>
                      Bürocontainer sind hinsichtlich Haltbarkeit und
                      Wärmedämmung vorteilhafter als Stahlbetonkonstruktionen.
                      Während die Lebensdauer einer durchschnittlichen
                      Stahlbetonkonstruktion 50–60 Jahre beträgt, wird die
                      Lebensdauer von Stahlsystemen auf 200–300 Jahre geschätzt.
                    </p>
                    <p>
                    1x Grossraum, 1x Glass Eingangstür, 1x Standard Fenster, 1x
                    Bodentiefe Fenster
                    </p>
                   <Link href="/angebote">
                  
                    <a className="button-white text-dark mt-3">Angebote</a>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </>
      </div>
    </section>
  );
};

export default KurzesAngebot;
