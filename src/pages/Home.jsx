import React from 'react'
import AppBar from '../component/AppBar'
import CategoryHome from '../component/CategoryHome'
import ComponentHome from '../component/ComponentHome'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Home = () => {

  return (
    <div className='flex flex-col min-h-screen' > 
      <div className='flex-1 mb-4'>
        <AppBar />
        <Header />
        <CategoryHome />
         <ComponentHome />
     </div>
         <Footer />
        </div>
  )
}

export default Home