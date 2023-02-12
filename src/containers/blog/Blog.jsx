import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      className='gpt3__blog section__padding' 
      id='blog'
      initial={{ y: 200, opacity: 0, rotate: 0, }}
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
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening,
          We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </motion.div>
  )
}

export default Blog
