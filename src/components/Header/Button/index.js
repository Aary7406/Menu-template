import React from 'react'
import styles from './style.module.css'
import { motion } from 'framer-motion'


export default function index({isActive, setisActive}) {

  return (
    <div onClick={()=> {setisActive(!isActive)}} className={styles.button}>

        <motion.div 
        className={styles.slider}
        animate={{top: isActive ? "-100%" : "0"}}
        transition={{duration: 0.6, ease: [0.76,0,0.24,1]}}
        >

            <div className={styles.el}>
                <PerspText label="Menu" />
            </div>


            <div className={styles.el}>
                <PerspText label="Close" />
            </div>  

        </motion.div>
    </div>
  )
}


function PerspText({label}){
    return(
        <div className={styles.PerspText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}