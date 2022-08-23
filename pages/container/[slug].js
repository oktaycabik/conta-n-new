import React from 'react'
import ImportantQuestions from '../../components/ImportantQuestions'
import TechnicalDetails from '../../components/ProductPage/ TechnicalDetails'
import Description from '../../components/ProductPage/Description'
import SmilarProducts from '../../components/SmilarProducts'
import products from "../../data/products.json"
const Container = ({product}) => {
  return (
    <> 
    <div className='container'>
  <div className='row mt-5 justify-content-center'>
   <div className='col-lg-4 col-12'>
    <span>{product.content.text2}</span>
<h1 className='mt-3'>({product.content.text1}!) {product.title}</h1>
    <span className='mt-4'> <b> Kaufpreis:</b> </span>
    <span>{product.content.price}</span>
    <div className='mt-3'> <b>Beschreibung</b> </div>
    <p className='mt-2'>{product.content.text6}</p>
    <div className='mt-3'> <b>Maße</b> </div>
    <p className='mt-2'>{product.content.text3}</p>
    <div className='mt-3'> <b>Maße</b> </div>
    <p className='mt-2'>{product.content.text3}</p>
    <div className='mt-3'> <b>Maße</b> </div>
    <p className='mt-2'>{product.content.text3}</p>
   </div>
   
   <div className='col-lg-6 col-12'>
   <img height={470} className="w-100" src={product.image.ima1}></img>
   </div>
  </div>
  

    </div>
    <Description/>
    <TechnicalDetails product={product}/>
    <SmilarProducts product={product}/> 
      <ImportantQuestions/>

      </>
  )
}

export default Container

export async function getServerSideProps(context) {
    // Fetch data from external API
  const product=products.find(product=>product.slug===context.params.slug)
  
    // Pass data to the page via props
    return { props: { product } };
  }