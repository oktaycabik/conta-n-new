import React from "react";
import referenzen from "../data/referenzen.json";
const Referenzen = () => {
  return (
    <div className="container pl-5 pr-5">
      <div className="row pl-5 pr-5 justify-content-center">
        <div className="p-2 bg-dark mt-3  col-12">
          <h1 className="text-light">Referenzen</h1>
        </div>
      </div>
      <div className="row pl-5 pr-5 mt-3 mb-4">
 
        {referenzen.map((refe) => (
         
          <div className="col-lg-6 col-12  ">
            <img
              className="w-100"
              src={refe.image.ima1}
            />
            <h3 className="referenzen-title">
              {refe.title}
            </h3>
            <span className="referenzen-info">
              Ludwigsburg Lindenberger Container- und Entsorgungsservice GmbH
            </span>
            <p className="referenzen-text">
              Moderne Containeranlage als Büro für die Baumfäller Truppe
            </p>
            <button className="mt-2 button-dark-small mb-4">Zur Referenz</button>
            </div>
    
        ))}
     
      </div>
    </div>
  );
};

export default Referenzen;
