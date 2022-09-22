import React from 'react';
import BannerImage from '../public/banner.jpg';
import Image from 'next/image';

type Props = {}

function Hero({}: Props) {
  return (
    <div className='hero-backgorund  '>
        <div className="max-w-7xl mx-auto">
            <div className='h-screen flex items-center'>
                <div className="flex flex-col flex-wrap justify-end  items-center min-w-full">
                    <div className="text-left px-20 flex-initial text-center">
                        <h1 className="font-bold mb-2 text-white text-4xl md:text-5xl">FEATURED ARTISTS</h1> 
                        <p className='text-sm'>Adam Blackstone and Brian Frasier-Moore discuss Super Bowl 2020 and more.</p>
                        <div className='py-5'>
                            <a href="#" className="text-sm text-bold uppercase py-3 px-8 bg-[rgb(243,121,32)] hover:bg-[rgb(245,135,57)] text-white rounded-sm hover:shadow-xl transition duration-300">Read More</a>
                        </div>  
                    </div>
                </div>  
            </div>
        </div>
        

    </div>


 
    
  )
}



export default Hero