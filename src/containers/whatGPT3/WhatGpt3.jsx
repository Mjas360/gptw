import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'
import { motion } from "framer-motion"

const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

const WhatGpt3 = () => {
  return (
    <motion.div
      id='wgpt3'
      className="gpt3__whatgpt3 section__margin"
      initial={{ y: 300, opacity: 0, rotate: -5, }}
      whileInView={{
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
      }}}
      viewport={{ once: true, amount: 0.2 }}
    >

      <div >
        <div className='gpt3__whatgpt3-feature'>
          <Feature title="What is GPT-3"
            text="We so opinion friends me message as delight.
          Whole front do of plate heard oh ought. His defective nor convinced residence own.
          Connection has put impossible own apartments boisterous. At jointure ladyship an 
          insisted so humanity he. Friendly bachelor entrance to on by."/>
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>
            The possibilities are beyond your imagination
          </h1>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            whileTap={{ scale: 0.9 }}
          >
            <p>
              Explore The Library
            </p>
          </motion.a>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="Chatbots"
            text="We so opinion friends me message as delight.
         Whole front do of plate heard oh ought. " />
          <Feature title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. 
         Friendly bachelor entrance to on by.
         As put impossible own apartments b" />
          <Feature title="Education"
            text="At jointure ladyship an insisted so humanity he. 
        Friendly bachelor entrance to on by. 
        As put impossible own apartments b"/>
        </div>
      </div>
    </motion.div>
  )
}

export default WhatGpt3
