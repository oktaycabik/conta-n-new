import React from "react";
import categories from "../data/category.json";
import Image from "next/image"
import Link from "next/link"
const Categories = () => {
  return (
    <section className="container">
      <div className="row ps-5 pe-5">
        {categories.map((category) => (
            <Link href={category.slug}>
          <div  key={category.id} className="col-4 category-list">
            <div className="p-3 mt-2">
              <Image objectFit="cover" height={261} width={370} className="card-img-top" src={category.image} alt="" />
              <div className="card-body text-center">
                <div  className="category-title mt-2">{category.category}</div>
                <div className="category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores nemo corrupti consequuntur facere quod, reprehenderit vel optio harum recusandae!</div>
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
