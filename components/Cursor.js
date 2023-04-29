import React, { useRef } from 'react'
import { useFollowPointer } from './useFollowPointer';
import { motion } from 'framer-motion';

function Cursor() {
    const ref = useRef(null);
    const {x,y} = useFollowPointer(ref)
  return (
    <motion.div 
    animate={{x,y}}
    transition={{
        type:'spring',
        damping:20,
        stiffness:200,
    }}
    ref={ref} a id='circle__pointer' />
  )
}

export default Cursor