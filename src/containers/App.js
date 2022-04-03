import React from 'react'
import Cards from '../components/Cards'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import HowFyloWorks from '../components/HowFyloWorks'
import NavBar from '../components/NavBar'
import Start from '../components/Start'


const App = () => {
  return (
    <div>
      <NavBar />
      <Start />
      <Cards />
      <HowFyloWorks />
      <Comments />
      <Footer />
    </div>

  )
}

export default App