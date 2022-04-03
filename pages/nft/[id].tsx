import Image from "next/image"
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const NFTDropPage = () => {
    
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();
    //console.log(address);
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-10 min-h-screen bg-background">
        <div className="relative lg:col-span-4">
            <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen bg-surface">
                <img src="/Crypto.gif" className="w-44 object-cover lg:h-96 lg:w-96" />
                <div className="text-center p-5 space-y-2">
                    <h1 className="text-4xl font-bold text-white">Krono's NFT Place</h1>
                    <h2 className="text-xl text-onSurface">A Collection of apes who live and breathe react</h2>
                </div>
            </div>
        </div>
            

        
        <div className="lg:col-span-6  px-10 pb-20 lg:pb-0 relative">
            <header className=" border-b border-onSurface flex flex-col  lg:flex-row items-center justify-between p-4">
                  <h3 className="w-52 cursor-pointer text-xl font-extralight sm:w-80 text-white">The <span className="font-extrabold"> Krono  </span> NFT Market Place</h3>
                  <button onClick={() => address ? disconnect() : connectWithMetamask()} className="text-white px-4 py-1 rounded-2xl bg-primary lg:px-5 lg:py-2 lg:text-base lg:rounded-3xl" >
                      {  address === undefined ? 'Sign In' : 'Sign Out'}
                  </button>
            </header>

              {address && <p className="text-onSurface text-sm mt-4 text-center">You are logged in with wallet: {address.substring(0, 5)}...{ address.substring(address.length - 5) }</p> }

            <div className="mt-10 flex flex-col flex-1 items-center space-y-6 text-center lg:justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:px-10 w-full">
                  <img src="https://links.papareact.com/bdy" className="w-80 object-cover pb-10 lg:h-40" />
                  
                  <h1 className="text-3xl text-white font-bold lg:text-5xl lg:font-extrabold">The Krono NFT Coding Camp</h1>

                  <p className="pt-2 text-xl text-onSurface text-center my-10">13/21 NFT's claimed</p>

              <button className="h-12 bg-primary w-max px-20 text-white rounded-full my-24 font-bold">Mint NFT</button>
              </div>  
              
              
        </div>
    </div>
  )
}

export default NFTDropPage