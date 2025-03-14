import React, { Fragment } from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/Content'
import Sidebar from './components/Sidebar'
import SideBaar from './components/Custom-sidebar'

const App = () => {
  return (
   <div>
    <Navbar />
    {/* <SideBaar /> */}
    <MainContent />
    <Footer />
   </div>
  )
}

export default App