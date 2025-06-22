import React from 'react'
import { Links } from './Data'
import styles from './navstyle.module.css'
import { motion } from 'framer-motion'

export default function index() {
    const perspective = {
        initial:{
            opacity: 0,
            rotateX: 90,
            translateX: 100
        },
        enter: (i)=>({
            opacity: 1,
            rotateX: 0,
            translateX: 0,
            transition: {
                duration: 0.6,
                opacity: {
                    duration: 0.2
                },
                delay: 0.5 + (i*0.15),
                ease: [.215,.31,.355,1]
            }
        }),
        exit:{
            opacity: 0,
            transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    }
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {
            Links.map( (link, i) => {
                return (
                <div key={i} className={styles.link}>
                <motion.div 
                variants={perspective}
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                whileHover="hover"
                >
                
                    <a href={link.href}>{link.title}</a>

                </motion.div>
                 </div>
                )
            })
        }

      </div>
    </div>
  )
}
