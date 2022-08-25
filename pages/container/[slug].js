import React, { useState } from "react";
import Catalog from "../../components/Catalog";
import ImportantQuestions from "../../components/ImportantQuestions";
import TechnicalDetails from "../../components/ProductPage/ TechnicalDetails";
import Description from "../../components/ProductPage/Description";
import FilterInfo from "../../components/ProductPage/FilterInfo";
import ProductFeatures from "../../components/ProductPage/ProductFeatures";
import SmilarProducts from "../../components/SmilarProducts";
import products from "../../data/products.json";

const Container = ({ product }) => {
  const [filter, setFilter] = useState(1);
  return (
    <>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-4 col-12">
            <span>{product.content.text2}</span>
            <h1 className="mt-3 product-page-title">
              ({product.content.text1}!) {product.title} (
              {product.description.Area.split(":")[1]})
            </h1>
            <div className="price-info mt-3"> 
            <span className="kaufpreis"> <strong>Kaufpreis:</strong> </span> <span className="cutprice">{product.content.cutprice}</span>{" "}
            <span className="price">9.100,00 € </span>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <img className="w-100" src={product.image.ima1}></img>
          </div>
        </div>
      </div>
      <FilterInfo setFilter={setFilter} filter={filter} />
      {filter === 1 && <Description />}
      {filter === 2 && <TechnicalDetails product={product} />}
      {filter === 3 && <ProductFeatures product={product} />}

      <SmilarProducts product={product} />
      <ImportantQuestions product={product} />
      <Catalog />
    </>
  );
};

export default Container;

export async function getServerSideProps(context) {
  // Fetch data from external API
  const product = products.find(
    (product) => product.slug === context.params.slug
  );

  // Pass data to the page via props
  return { props: { product } };
}
