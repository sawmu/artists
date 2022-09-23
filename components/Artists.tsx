import React from 'react';
import Artists_list from '../components/Artists_list';
import { motion } from "framer-motion";

type Props = {}

function Artists({}: Props) {
  return (
    <div className='h-full p-3'>
      <div className="flex  justify-center">
        <h1 className='font-bold mb-2 text-white text-2xl md:text-3xl lg:text-4xl text-center'>
          #MONOCREATORS #GOPLAY
        </h1>
      </div>
      <div className="max-w-7xl mx-auto my-10">
        <Artists_list />
      </div>
    </div>
  )
}

export default Artists