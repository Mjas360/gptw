import React from 'react'
import './cta.css';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <motion.div
      className='gpt3__cta'
      initial={{ opacity: 0, y: 200 }}
      whileInView={{
        opacity: 1,
        y:0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }
      }}
      viewport={{ once: true, amount: 0.03 }}
    >
    
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <motion.a
          whileHover={{
            scale: 1.09,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <button type='button'>
            Get Started
          </button>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default CTA