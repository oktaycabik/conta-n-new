import React from "react";
import products from "../data/products.json";
import ProductsImage from "../components/CategoryProducts/ProductsImage";
import ProductDetails from "../components/CategoryProducts/ProductDetails";

const Angebote = () => {
  const filterAngebot = products.filter((pro) => pro.isInStock);

  return (
    <div className="container pl-5 pr-5">
      <div className="row pl-5 pr-5 justify-content-center">
        <div className="p-2 bg-dark mt-3  col-12">
          <h1 className="text-light">Angebote</h1>
        </div>
      </div>
      <div className="row pl-5 pr-5 mt-3 mb-4">
        <div className="col-lg-7 col-12 mb-3 p-0 ">
          <img
            className="w-100 product-img"
            src="https://conliving.de/wp-content/uploads/2022/05/BC1-Standard-Hof-Aussen-4-web.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-5 col-12 p-0 ">
          <img
            className="w-100 product-img"
            src="https://conliving.de/wp-content/uploads/2022/05/BC1-Standard-Hof-Innen-2-web.jpg"
            alt=""
          />
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
