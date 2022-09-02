import React from "react";

import Image from "next/image";

const ProductsImage = ({ pro }) => {
  return (
    <>
      <div className="mt-3">
        <img height={466} width={584} objectFit="cover"  className="w-100" src={pro.image.Product1} alt="" />
      </div>
    </>
  );
};

export default ProductsImage;
