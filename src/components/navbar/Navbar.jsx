import React, { useState } from 'react'
import './navbar.css';
import { MdSegment, MdClear } from 'react-icons/md'
import logo from '../../assets/logo.svg';
import { motion } from "framer-motion"

const Menu = () => (
  <>
    <motion.a
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <p><a href='#home'>Home</a></p>
    </motion.a>
    <motion.a
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <p><a href='#wgpt3'>What is GPT3</a></p>
    </motion.a>
    <motion.a
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <p><a href='#possibility'>Open AI</a></p>
    </motion.a>
    <motion.a
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <p><a href='#features'>Case Studies</a></p>
    </motion.a>
    <motion.a
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <p><a href='#blog'>Library</a></p>
    </motion.a>
  </>
)

const Navbar = () => {
  // show or hide menu button
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-linkd'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <motion.a
          whileHover={{
            scale: 1.09,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <p>Sign in</p>
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.09,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <button type='button'> Sign up</button>
        </motion.a>
      </div>

      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <MdClear color='#FFFFFF' size={27} onClick={() => setToggleMenu(false)} />
          : <MdSegment color='#FFFFFF' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />

              <div className='gpt3__navbar-menu_container-links-sign'>
                <motion.a
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <p>Sign in</p>
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button type='button'> Sign up</button>
                </motion.a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
