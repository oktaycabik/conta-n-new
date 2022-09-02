import { withRouter } from "next/router";
import React from "react";
import ProductDetails from "../components/CategoryProducts/ProductDetails"
import ProductsImage from "../components/CategoryProducts/ProductsImage"
import products from "../data/products.json";
const product = withRouter((props) => {
  const search = props.router.query.s;
  console.log('search', search)
const product = products.filter((item) => { 
 return item?.title?.toLowerCase().indexOf(search?.toLowerCase()) !== -1 ||  
 item?.category?.toLowerCase().indexOf(search?.toLowerCase()) !== -1;

  });
  return (
    <div>
      <div className="container pl-5 pr-5">
        <div className="row pl-5 pr-5 justify-content-center">
          <div className="pages-head mt-3  col-12">
            <h1 className="text-light">Suchergebnisse: {search}</h1>
          </div>
        </div>
       
        {product.map((pro) => (
        <div className=" row product-page-section" key={pro.id}>
        <div className="col-lg-6 col-12">
          <ProductDetails pro={pro} />
          <div className="row mt-3">
            <div className="col-lg-6 col-12">
              <img className="w-100 h-auto" src={pro.image.Thumb2} alt="" />
            </div>

            <div className="col-lg-6 col-6">
              <img className="w-100 h-auto" src={pro.image.Thumb3} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <ProductsImage pro={pro} />
          <div className="row mt-3">
            <div className="col-lg-6 col-6">
              <img className="w-100 h-auto" src={pro.image.Thumb4} alt="" />
            </div>
            <div className="col-lg-6 col-6">
              <img className="w-100 h-auto" src={pro.image.Thumb5} alt="" />
            </div>
          </div>
        </div>
      </div>
        ))}
      </div>
    </div>
  );
});

export default product;
