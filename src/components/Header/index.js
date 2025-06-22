'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import Button from './Button'
import { AnimatePresence, delay, motion } from 'framer-motion'
import Nav from './Nav'

export default function index() {

  const variants = {
    open: {
      width: "35vw",
      height: "80vh",
      top: "-25px",
      right:"-25px",
      transition:{duration: 0.77, ease: [0.76,0,0.24,1]}
    },
    closed: {
      width: 100,
      height: 40,
      top: "0px",
      right:"0px",
      transition:{duration: 0.77,delay: 0.3, ease: [0.76,0,0.24,1]}
    }
  }

  const [isActive, setisActive] = useState(false);

  return (
    <div className={styles.header}>
      <motion.div 
      className={styles.menu}
      variants={variants}
      animate={isActive ? "open" : "closed"}
      initial="closed"
      >
        <AnimatePresence>
        {isActive && <Nav />}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setisActive={setisActive} />
    </div>
  )
}
