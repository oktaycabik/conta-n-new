
import React from 'react'
import AnlageInfo from '../components/AnlageInfo'
import Categories from '../components/Categories'
import ContainerIntro from '../components/ContainerIntro'
import ReferanceInfo from '../components/ReferanceInfo'

const index = () => {
  return (
    <>
      <ContainerIntro/>
      <Categories/>
      <ReferanceInfo/>
      <AnlageInfo/>
    </>
  )
}

export default index