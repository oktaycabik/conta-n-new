import React from 'react'
import Image from 'next/image'
const ProductsImage = ({pro}) => {
  return (
    <div className="row">
    <div className="col-lg-4 col-12 mt-2">
      <Image
        className="w-100 product-img"
        width={400}
        height={275}
        objectFit='cover'
        src={pro.image.ima5}
        alt=""
      />
    </div>
    <div className="col-lg-4 col-6 mt-2">
      <Image
        className="w-100 product-img"
        width={400}
        height={275}
        objectFit='cover'
        src={pro.image.ima4}
        alt=""
      />
    </div>
    <div className="col-lg-4 col-6 mt-2">
      <Image
        className="w-100 product-img"
        objectFit='cover'
        width={400}
        height={275}
        src={pro.image.ima3}
        alt=""
      />
    </div>
  </div>
  )
}

export default ProductsImage