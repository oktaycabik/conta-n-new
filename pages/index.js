
import React from 'react'
import AnlageInfo from '../components/AnlageInfo'
import Categories from '../components/Categories'
import ContainerIntro from '../components/ContainerIntro'
import ImportantQuestions from '../components/ImportantQuestions'
import KurzesAngebot from '../components/KurzesAngebot'
import Referance from '../components/Referance'
import ReferanceInfo from '../components/ReferanceInfo'

const index = () => {
  return (
    <>
      <ContainerIntro/>
      <KurzesAngebot/>
      <Referance/>
      <Categories/>
      <ReferanceInfo/>
      <AnlageInfo/>
      <ImportantQuestions/>
    </>
  )
}

export default index