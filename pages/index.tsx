import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Krono's NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-red-500 text-3xl font-semibold'>Welcome to Krono's NFT Drop!</h1>
      
    </div>
  )
}

export default Home
