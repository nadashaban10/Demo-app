import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import ServicesSection from './components/services'
import Products from './components/Products'
// import Discount from './components/Discount'
import Footer from './components/Footer'
function App() {
  return (
    <div className='App' dir='rtl' >
      <Nav />
      <Header />
 <ServicesSection />
      <Products />
      {/* <Discount /> */}
      <Footer /> 
      
    </div>
  )
}

export default App
