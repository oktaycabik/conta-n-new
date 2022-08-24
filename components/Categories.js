import React from "react";
import categories from "../data/category.json";
import Image from "next/image"
import Link from "next/link"
const Categories = () => {
  return (
    <section className="container">
      <div className="row pr-5 pl-5 justify-content-center">
        <div className="col-lg-8 col-12">
        <h2 className="text-center category-head"> <b>Übersicht</b>  unserer Container Raumlösungen</h2>
        <h4 className="text-center category-head-2 mt-2 ">Egal, ob Sie kurzfristig neue Räumlichkeiten benötigen oder die Auslagerung Ihres Geschäfts planen
Conliving ist der Ideale Partner bei der Umsetzung Ihrer Wünsche und Ziele.</h4>
        </div>
        
         </div>
      <div className="row mt-5">
        {categories.map((category) => (
            <Link key={category.id} href={category.slug}>
          <div   className="col-lg-4 col-md-6 col-12 mb-3 category-list">
            <div className=" mt-2">
              <Image objectFit="cover" height={261} width={370} className="card-img-top" src={category.image} alt="" />
              <div className="card-body text-center">
                <div  className="category-title mt-2">{category.category}</div>
                <div className="category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores nemo corrupti consequuntur</div>
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
