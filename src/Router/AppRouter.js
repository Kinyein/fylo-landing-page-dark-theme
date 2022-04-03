import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cards from '../components/Cards'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import HowFyloWorks from '../components/HowFyloWorks'
import NavBar from '../components/NavBar'
import Start from '../components/Start'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Start />
            <Cards />
            <HowFyloWorks />
            <Comments />
            <Footer />

            <Routes>
                <Route path="/features" element={<Cards />} />
                <Route path="/team" element={<Comments />} />
                <Route path="/signin" element={<Footer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter