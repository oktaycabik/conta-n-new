
import React from 'react'
import AnlageInfo from '../components/AnlageInfo'
import Banner from '../components/Banner'
import Catalog from '../components/Catalog'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import ContainerIntro from '../components/ContainerIntro'
import ImportantQuestions from '../components/ImportantQuestions'
import KurzesAngebot from '../components/KurzesAngebot'
import Referance from '../components/Referance'
import ReferanceInfo from '../components/ReferanceInfo'
import WhyWeComponent from '../components/WhyWeComponent'

const index = () => {
  return (
    <>
      <Banner/>
      <ContainerIntro/>
      <WhyWeComponent/>
      <KurzesAngebot/>
      <Referance/>
      <Categories/>
      <Contact/>
      <ReferanceInfo/>
      <AnlageInfo/>
      <ImportantQuestions/>
      <Catalog/>
    </>
  )
}

export default index