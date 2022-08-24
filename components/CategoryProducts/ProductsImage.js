import React from 'react'
import Image from 'next/image'
const ProductsImage = ({pro}) => {
  return (
    <div className="row pl-5 pr-5">
    <div className="col-lg-4 col-12 p-1 mt-2 ">
      <Image
      
        width={400}
        height={275}
        objectFit='cover'
        src={pro.image.ima5}
        alt=""
      />
    </div>
    <div className="col-lg-4 col-6 p-1 mt-2">
      <Image
        
        width={400}
        height={275}
        objectFit='cover'
        src={pro.image.ima4}
        alt=""
      />
    </div>
    <div className="col-lg-4 col-6  p-1 mt-2">
      <Image
      
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