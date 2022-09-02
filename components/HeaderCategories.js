import React from 'react'
import categories from "../data/category.json"
import Link from 'next/link'
const HeaderCategories = () => {
  return (
    <section className="container">
    <div className="row mt-3 ">
      {categories.map((category) => (
        <Link key={category.id} href={`/${category.slug}`}>
          <div className="col-lg-3 col-md-6 col-12 mb-3 category-list ">
            <div className=" mt-2">
              <img className="product-img" src={`https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/${category.image}/public`} alt="" />
              <div className="badge-cat">gehe zur Kategorie</div>
              <div className="card-body text-center">
                <div className="category-title mt-2">{category.category}</div>
               
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
  )
}

export default HeaderCategories