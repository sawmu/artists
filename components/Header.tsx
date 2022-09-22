import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
  return (
    <header className='top-0 p-3 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
         initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
         }}
         animate={{
            x: 0,
            opacity: 1,
            scale: 1,
         }}
         transition={{
            duration: 1.5,
         }}
         className='flex flex-row items-center'>

            <SocialIcon 
                url="https://www.youtube.com/c/DinaWanderlust" 
                fgColor=' rgb(243,121,32)' 
                bgColor='transparent' 
                target='_blank' 
                rel='noopener noreferrer' 
            />

            <SocialIcon 
                url="https://www.facebook.com/sawmuka.hbawaye.3" 
                fgColor=' rgb(243,121,32)' 
                bgColor='transparent' 
                target='_blank' 
                rel='noopener noreferrer' 
            />
           
            <SocialIcon 
                url="https://www.linkedin.com/in/mukahbaw/" 
                fgColor=' rgb(243,121,32)' 
                bgColor='transparent' 
                target='_blank' 
                rel='noopener noreferrer' 
            />

           

            
        </motion.div>

        <motion.div
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
         }}
         animate={{
            x: 0,
            opacity: 1,
            scale: 1,
         }}
         transition={{
            duration: 1.5,
         }}
         className='flex flex-row items-center text-gray-200 cursor-pointer'>
            <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor=' rgb(243,121,32)' 
                bgColor='transparent' 
                target='_blank' 
                rel='noopener noreferrer'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
    </header>
  )
}

export default Header