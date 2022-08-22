import React from 'react'

const ProductsImage = ({pro}) => {
  return (
    <div className="row">
    <div className="col-lg-4 col-12 mt-2">
      <img
        className="w-100 product-img"
      
        src={pro.image.ima5}
        alt=""
      />
    </div>
    <div className="col-lg-4 col-6 mt-2">
      <img
        className="w-100 product-img"
    
        src={pro.image.ima4}
        alt=""
      />
    </div>
    <div className="col-lg-4 col-6 mt-2">
      <img
        className="w-100 product-img"
       
        src={pro.image.ima3}
        alt=""
      />
    </div>
  </div>
  )
}

export default ProductsImage