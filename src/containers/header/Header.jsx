import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <motion.div
        className='gpt3__header-content'
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
      >
        <h1 className='gradient__text'>
          Let’s Build Something
          amazing with GPT-3
          OpenAI
        </h1>



        <p>
          Yet bed any for travelling assistance
          indulgence unpleasing. Not thoughts all
          exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment.
          Party we years to order allow asked of.
        </p>


        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <button type='button'>Get Started</button>
          </motion.button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />

          <p>
            1,600 people requested access a
            visit in last 24 hours
          </p>
        </div>
      </motion.div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='AI' />
      </div>
    </div>
  )
}

export default Header
