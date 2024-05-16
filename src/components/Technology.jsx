import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs} from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import {animate, motion} from 'framer-motion';

const Technology = () => {
    const inconvarints = (duration) =>({
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }

    })
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technology</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={inconvarints(2.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={inconvarints(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className="text-7xl text-White"/>
            </motion.div>
            <motion.div 
            variants={inconvarints(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
            variants={inconvarints(6)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div
            variants={inconvarints(3.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className="text-7xl text-green-900"/>
            </motion.div>
            <motion.div
            variants={inconvarints(4.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiPostgresql className="text-7xl text-blue-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technology