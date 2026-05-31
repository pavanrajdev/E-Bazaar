

import React from 'react'
import Navbar from '../Components/Navbar'
import Mobiles from '../Components/Mobiles'
import Computers from '../Components/Computers'
import Acs from '../Components/Acs'
import Books from '../Components/Books'
import Fridges from '../Components/Fridges'
import Kitchens from '../Components/Kitchens'
import Mens from '../Components/Mens'
import Speakers from '../Components/Speakers'
import Tvs from '../Components/Tvs'
import Womans from '../Components/Womens'
import Watches from '../Components/Watches'
import Furniture from '../Components/Furniture'

const LandingPage = () => {
  return (
    <>
     <Navbar />
      <Mobiles />
      <Computers />
      <Womans />
      <Acs/>
      <Fridges />
      <Kitchens />
      <Furniture />
      <Watches />
      <Mens />
      <Speakers />
      <Tvs />
      <Books />
      
    </>
  
  )
}

export default LandingPage