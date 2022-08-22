import React from "react";
import products from "../data/products.json";
import Image from "next/image";
import ProductsImage from "../components/CategoryProducts/ProductsImage";
import ProductDetails from "../components/CategoryProducts/ProductDetails";
const Categories = ({ product }) => {
  return (
    <div className="container ps-5 pe-5">
      <div className="row justify-content-center">
        <div className="p-2 bg-dark mt-3  col-12">
          <h1 className="text-light">{product[0].category}</h1>
        </div>
      </div>

      {product.map((pro) => (
        <>
          <div className="row mt-3">
            <div className="col-lg-7 col-12  ps-0 pe-2">
              <img
                className="w-100 product-img"
               
                src={pro.image.ima1}
                alt=""
              />
            </div>
            <div className="col-lg-5 col-12  pe-0 ps-2">
              <img
                className="w-100 product-img"
               
                src={pro.image.ima2}
                alt=""
              />
            </div>
          </div>
          <div className="border-bot mt-4 mb-4"></div>
          <ProductsImage pro={pro} />
          <ProductDetails pro={pro} />
        </>
      ))}
    </div>
  );
};

export default Categories;

export async function getServerSideProps(context) {
  // Fetch data from external API

  const product = products.filter(
    (pro) => pro.category === context.params.slug
  );
  // Pass data to the page via props
  return { props: { product } };
}
