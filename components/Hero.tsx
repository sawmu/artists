import React from 'react';
import BannerImage from '../public/banner/hero_banner.png';


type Props = {}

function Hero({}: Props) {
  return (
    <div className="bg-[url('../public/banner/hero_banner.png')] bg-center bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto">
       
            <div className='h-screen flex items-center'>
                <div className="flex flex-wrap justify-center lg:justify-end  min-w-full">
                    <div className="px-20 text-center lg:text-left ">
                        <h1 className="font-bold mb-2 text-white text-4xl md:text-7xl lg:w-min">FEATURED ARTISTS</h1> 
                        <p className='text-sm lg:max-w-full lg:w-3/5 '>Adam Blackstone and Brian Frasier-Moore discuss Super Bowl 2020 and more .</p>
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