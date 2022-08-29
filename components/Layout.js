import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Header2 from './Header2'

const Layout = ({children}) => {
  return (
    <div>
   
        <Header2/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout