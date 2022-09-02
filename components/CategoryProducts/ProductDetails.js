import Link from "next/link";
import React from "react";

const ProductDetails = ({ pro }) => {
  return (
    <div>
   
      <h2 className="mt-3 pe-4 ps-3   product-page-banner ">{pro.title}</h2>
      <div className="">
        <div className="category-detail ">
          <span className="mb-1">
            <b>Dieser Container steht bereit auf unserem Gelände zum Liefern</b>
          </span>
          <ul className="mb-4 mt-4">
            <li className="mt-2">{pro?.description?.Features}</li>
            <li className="mt-2">{pro?.description?.Isolation}</li>
            <li className="mt-2">{pro?.description?.strength}</li>
            <li className="mt-2">{pro?.description?.CraneSlot}</li>
            <li className="mt-2">{pro?.description?.TransportCost}</li>
          </ul>
          <b className="mt-3">Kaufpreis</b>
          <div className="d-flex justify-content-between mb-4">
          <div  className="mt-2">{pro.content.price}</div>
          <Link href={`/container/${pro.slug}`}>
          <button className="button-dark">Produkt Zum</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
