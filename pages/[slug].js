import React from "react";
import products from "../data/products.json";
import ProductsImage from "../components/CategoryProducts/ProductsImage";
import ProductDetails from "../components/CategoryProducts/ProductDetails";
import categories from "../data/category.json";
const Categories = ({ product }) => {
  return (
    <div className="container pl-5 pr-5">
      <div className=" pl-5 pr-5 justify-content-center">
        <div className="pages-head mt-3  col-12">
          <span className="text-light">{product[0]?.category}</span>
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
  );
};

export default Categories;

export async function getStaticProps(context) {
  // Fetch data from external API

  const product = products.filter(
    (pro) => pro.category === context.params.slug
  );
  // Pass data to the page via props
  return { props: { product } };
}
export async function getStaticPaths(context) {
  const paths = categories.map((cate) => ({
    params: { slug: cate.slug },
  }));
  return { paths, fallback: false };
}
