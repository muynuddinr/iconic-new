import Navbar from './Components/Navbar'
import Homesection from './Components/Hero'
import Servicesection from './Components/Service'
import Customersection from './Components/Customers'
import WhatWeAchieve from './Components/Whatweachiev'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Homesection />
      <Servicesection />
      <Customersection />
      <WhatWeAchieve />
      <Footer />
    </>

  )
}
