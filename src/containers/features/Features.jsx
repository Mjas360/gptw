import React from 'react';
import { Feature } from '../../components';
import './features.css';
import { motion } from "framer-motion"

const featuresData = [
  {
    title: 'Improving end distrusts instantly ',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
  }
]

const Features = () => {
  return (
    <motion.div
      className='gpt3__feature section__padding' id='features'
      initial={{ y: 200, opacity: 0, rotate: 0, }}
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
    
      <div className='gpt3__feature-heading'>
        <h1 className='gradient__text'>
        The Future is Now and You Just Need To Realize It.
         Step into Future Today & Make it Happen.
        </h1>
        <p>
        Request Early Access to Get Started
        </p>
      </div>
      <div className='gpt3__feature-container'>
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Features
