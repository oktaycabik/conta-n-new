import React from "react";
import categories from "../data/category.json";
import Image from "next/image";
import Link from "next/link";
const Categories = () => {
  return (
    <section className="container">
      <div className="row mt-5 pr-5 pl-5">
        {categories.map((category) => (
          <Link key={category.id} href={category.slug}>
            <div className="col-lg-4 col-md-6 col-12 mb-3 category-list border">
              <div className=" mt-2">
                <img className="product-img" src={category.image} alt="" />
                <div className="badge-cat">gehe zur Kategorie</div>
                <div className="card-body text-center">
                  <div className="category-title mt-2">{category.category}</div>
                  <div className="category-text">{category.desc}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
