import React from "react";
import angebots from "../data/topAngebot.json";
import Link from "next/link";
const KurzesAngebot = () => {
  return (
    <>
      <div className="container py-3 pl-5 pr-5">
        {
          angebots.map(angebot=>(
            <div key={angebot.id} className="angebot-info mb-4">
            <div className="row ">
              <div className="col-md-7">
                <div className="card-block px-6 p-5">
                  <h2 className="card-title">
                  {angebot.title}
                  </h2>
                  <h5 className="card-title pt-3">
                  {angebot.price}
                  </h5>
                  <p className="card-text pt-3">
                  {angebot.desc}
                  </p>
                
                  <br />
                  <Link href="/angebote">
              
                  <a  className="mt-auto button-dark  ">
                    Angebote
                  </a>
                  </Link>
                </div>
              </div>
  
              <div className="col-md-5">
                <div
                  id="CarouselTest"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="w-100 "
                        height={280}
                        src={angebot.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
        }
       
      </div>
    </>
  );
};

export default KurzesAngebot;
