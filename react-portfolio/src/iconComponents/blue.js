import React from "react";
import { motion } from "framer-motion";

export default function Blue() {
    const svgVariants = {
        hidden: {
            x: '-10vw',
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                delay: 0.1,
                damping: 20,
                mass: 0.4,
                ease: 'easeOut',
            }
        }
    }

    const rectVariants = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            duration: 2,
            ease: 'easeInOut'
          }
        }
      }
    
    return (
        <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.rect width="24" height="24" fill="#0050FF"
                variants={rectVariants}
            />
        </motion.svg>

    )
}