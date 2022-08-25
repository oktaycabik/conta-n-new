import React from 'react'
import Image from 'next/image'
const ProductsImage = ({pro}) => {
  const myLoader = ({ src, width, quality }) => {
    return `${pro.image.ima5}?w=${400}&q=${quality || 85}&?fm=webp`  };
    const myLoader1 = ({ src, width, quality }) => {
      return `${pro.image.ima4}?w=${400}&q=${quality || 85}&?fm=webp`  };
      const myLoader2 = ({ src, width, quality }) => {
        return `${pro.image.ima3}?w=${400}&q=${quality || 85}&?fm=webp`  };
  return (
    <div className="row pl-5 pr-5">
    <div className="col-lg-4 col-12 p-1 mt-2 ">
      <Image
      priority
      loader={myLoader}
        width={400}
        height={275}
        objectFit='cover'
        src={pro.image.ima5}
        alt=""
      />
    </div>
    <div className="col-lg-4 col-6 p-1 mt-2">
      <Image
       priority
        loader={myLoader1}
        width={400}
        height={275}
        objectFit='cover'
        src={pro.image.ima4}
        alt=""
      />
    </div>
    <div className="col-lg-4 col-6  p-1 mt-2">
      <Image
       priority
      loader={myLoader2}
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