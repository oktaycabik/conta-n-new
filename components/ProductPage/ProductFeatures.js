import React from "react";

const ProductFeatures = ({product}) => {
  return (
    <div className="container">
      <div className="row mt-5 pr-5 pl-5 justify-content-center">
        <div className="col-lg-5 col-12 ">
            <img className="w-100" src="https://conliving.de/wp-content/uploads/2020/03/DoppelWaschbecken.jpg"/>
        </div>
        <div className="col-lg-5 col-12 mt-2 text-center my-auto">3x Doppel-Waschbecken</div>
      </div>
      <div className="row mt-5 pr-5 pl-5 justify-content-center img-reverse">
      <div className="col-lg-5 col-12 mt-2 text-center my-auto ">3x Doppel-Waschbecken</div>
        <div className="col-lg-5 col-12 ">
            <img className="w-100" src="https://conliving.de/wp-content/uploads/2017/01/Bad-toilette-dusche-waschbecken.jpg"/>
        </div>
       
      </div>
      <div className="row mt-5 pr-5 pl-5 justify-content-center">
        <div className="col-lg-5 col-12">
            <img className="w-100" src="https://conliving.de/wp-content/uploads/2020/04/SC-Toilette-Einzel.jpg"/>
        </div>
        <div className="col-lg-5 col-12 mt-2 text-center my-auto">3x Doppel-Waschbecken</div>
      </div>
    </div>
  );
};

export default ProductFeatures;
