import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Artists from '../components/Artists'
import Brands from '../components/Brands'



const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(10,10,10)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Artists</title>
        <meta name="description" content="Artists Description" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" rel="stylesheet" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" rel="stylesheet" />
      </Head>
   
      <Header />

      <section id='hero' className='-mt-20'>
        <Hero />
      </section>

      <section id='artists' className='max-w-7xl mx-auto'>
        <Artists />
        
      </section>

      <section id='brand' className='bg-slate-50'>
        <Brands />
      </section>

     
    </div>
  )
}

export default Home
