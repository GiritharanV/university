import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Navbar/Programs/Programs'
import Title from './Components/Navbar/Title/Title'
import About from './Components/Navbar/About/About'
import Campus from './Components/Navbar/Campus/Campus'
import Testimonials from './Components/Navbar/Testimonials/Testimonials'
import Contact from './Components/Navbar/Contact/Contact'
import Footer from './Components/Navbar/Footer/Footer'
import Videoplayer from './Components/Navbar/Videoplayer/Videoplayer'

const App = () => {


  const [playState,setPlayState]=useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='OUR PROGRAM' title='What we offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title=' What students says'/>
        <Testimonials/>
        <Title subtitle='Contact us' title='Get in touch'/>
        <Contact/>
        <Footer/>

        </div>
        <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
