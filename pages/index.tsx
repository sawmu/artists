import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(10,10,10)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Artists</title>
        <meta name="description" content="Artists Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      {/* <Header /> */}

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

     
    </div>
  )
}

export default Home
