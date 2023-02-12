import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
import { motion } from "framer-motion"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='Possibility' />
      </div>
      <motion.div
        className='gpt3__possibility-content'
        initial={{ y: 300, opacity: 0, rotate: 5, }}
        whileInView={{
          y: 0,
          opacity: 1,
          rotate: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.4 }}
      >
     
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance
          indulgence unpleasing. Not thoughts all
          exercise blessing. Indulgence way everything
          joy alteration boisterous the attachment.
          Party we years to order allow asked of.
        </p>
        <h4>
          Request Early Access to Get Started
        </h4>
      </motion.div>
    </div>
  )
}

export default Possibility
