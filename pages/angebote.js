import React from "react";
import products from "../data/products.json";
import ProductsImage from "../components/CategoryProducts/ProductsImage";
import ProductDetails from "../components/CategoryProducts/ProductDetails";

const Angebote = () => {
  const filterAngebot = products.filter((pro) => pro.isInStock);

  return (
    <div className="container pl-5 pr-5">
      <div className="col-12">
        <div className=" pl-5 pr-5 justify-content-center">
          <div className="pages-head mt-3 ">
            <span className="">Angebote</span>
          </div>
        </div>
      </div>
    
      {filterAngebot.map((pro) => (
        <div className="mt-5" key={pro.id}>
          <ProductsImage pro={pro} />
          <ProductDetails pro={pro} />
        </div>
      ))}
    </div>
  );
};

export default Angebote;
