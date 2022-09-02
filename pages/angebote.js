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
  );
};

export default Angebote;
