import React from 'react'
import { Brand, CTA, Navbar, } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGpt3 } from './containers';
import './App.css';

// import { motion, Variants } from "framer-motion";

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGpt3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App

 // const cardVariants: Variants = {
  //   offscreen: {
  //     y: 300
  //   },
  //   onscreen: {
  //     y: 50,
  //     rotate: -10,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.8
  //     }
  //   }
  // };
  // <motion.div
  //   className="card-container"
  //   initial="offscreen"
  //   whileInView="onscreen"
  //   viewport={{ once: true, amount: 0.8 }}
  // >
  // </motion.div>