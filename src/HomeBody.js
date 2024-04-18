import React from 'react'
import Navbar from './Navbar.js'
import Background from './Background.js';
import Block2 from './Block2.js'
import Block3 from './Block3.js'
import Block4 from './Block4.js'
import Block5 from './Block5.js'
import Testomonials from './Testomonials.js'
import Footer from './Footer.js'

const HomeBody = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <Block2/>
      <Block3/>
      <Block4/>
      <Block5/>
      <Testomonials/>
      <Footer/>
    </div>
  )
}

export default HomeBody
