import React, { useState } from "react";
import Catalog from "../../components/Catalog";
import ImportantQuestions from "../../components/ImportantQuestions";
import TechnicalDetails from "../../components/ProductPage/ TechnicalDetails";
import Description from "../../components/ProductPage/Description";
import FilterInfo from "../../components/ProductPage/FilterInfo";
import ProductFeatures from "../../components/ProductPage/ProductFeatures";
import SmilarProducts from "../../components/SmilarProducts";
import products from "../../data/products.json";
import Image from "next/image";
const Container = ({ product }) => {
  const [filter, setFilter] = useState(1);
  return (
    <>
      <div className="container">
        <div className="row pr-5 pl-5 mt-5 justify-content-center">
          <div className="col-lg-5 pr-5 col-12">
            <span>{product?.content?.text2}</span>
            <h1 className="mt-3 product-page-title">
              ({product?.content?.text1}!) {product?.title} (
              {product.description?.Area?.split(":")[1]})
            </h1>
            <div className="price-info mt-3">
              <span className="kaufpreis">
                {" "}
                <strong>Kaufpreis:</strong>{" "}
              </span>{" "}
              <span className="cutprice">{product.content.cutprice}</span>{" "}
              <span className="price">{product.content.price} </span>
            </div>
            <div className="price-info mt-3">
              <span className="kaufpreis">
                {" "}
                <strong>Kaufpreis:</strong>{" "}
              </span>{" "}
              <span className="price">{product?.content?.price} </span>
            </div>

            <div className="product-card-color col-12  mt-3">
              <span className="d-block pt-4 head">Container Ausführung</span>
              <select className="mt-2 mb-2" name="cars" id="cars">
                <option value="volvo">Standard</option>
                <option value="saab">Flatpack</option>
              </select>
              <div className="border mt-3 mb-3"></div>
              <div className="mt-2 mabe">Maße der Basis Ausstattung</div>
              <div className="mt-2">
                <span className="area">Größe: </span>
                <span className="area-info">{product?.content?.text3}</span>
              </div>
              <div className="mt-3 info-text">
                Produkt ist sofort erhältlich.
              </div>

              <div className="border mt-3 mb-3"></div>
              <div>
                <span className="info-desc">Info: </span>{" "}
                <span className="info-desc-text">
                  {" "}
                  Die Ausstattung kann individuell verändert werden, wodurch die{" "}
                  <br></br> Darstellung der Ausstattung abweichen kann.
                </span>
              </div>
              <div className="mt-3 info-desc-text">
                Verfügt über keine Mögliche EnEV 2016
              </div>
              <button className="button-dark-small mt-4 mb-3">Kontakt</button>
            </div>
          </div>

          <div className="col-lg-7 col-12 ">
            <img
            
              height="450"
              objectFit="cover"
              className="w-100 "
              src={product?.image?.ima1}
            />
            <div className="d-flex justify-content-between mt-2">
              <Image
                width="168"
                height="135"
                objectFit="cover"
                className="w-100"
                src={product?.image?.ima1}
              ></Image>

              <Image
                width="168"
                height="105"
                objectFit="cover"
                className="w-100"
                src={product?.image?.ima2}
              ></Image>

              <Image
                width="168"
                height="105"
                objectFit="cover"
                className="w-100"
                src={product?.image?.ima3}
              ></Image>

              <Image
                width="168"
                height="105"
                objectFit="cover"
                className="w-100"
                src={product?.image?.ima5}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <FilterInfo setFilter={setFilter} filter={filter} />
      {filter === 1 && <Description />}
      {filter === 2 && <TechnicalDetails product={product} />}
      {filter === 3 && <ProductFeatures product={product} />}
      {filter === 4 && <>asdasd</>}
      <SmilarProducts product={product} />
      <ImportantQuestions product={product} />
      <Catalog />
    </>
  );
};

export default Container;

export async function getStaticProps(context) {
  // Fetch data from external API
  const product = products.find(
    (product) => product.slug === context.params.slug
  );

  // Pass data to the page via props
  return { props: { product } };
}
export async function getStaticPaths(context) {
  const paths =products.map(pro=>({
    params:{slug:pro.slug}
  }))
  return {paths,fallback:false}
}