import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Artists</title>
        <meta name="description" content="Artists Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <Header />

      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>

     
    </div>
  )
}

export default Home
