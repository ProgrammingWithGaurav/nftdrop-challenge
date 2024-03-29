import React from 'react';
import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react';

function NFTDropPage() {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();
    return (
        <div className='flex flex-col h-screen lg:grid lg:grid-cols-10'>
            <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                    <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                        <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src='https://links.papareact.com/8sg' alt='' />
                    </div>
                    <div className='space-y-2 text-center py-5'>
                        <h1 className="text-4xl font-bold text-white">PAPAFAM Apes</h1>
                        <h2 className='text-xl text-gray-300'>A collection of PAPAFAM Apes whoe lives and breathe React !</h2>
                    </div>
                </div>
            </div>

            <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
                <header className='flex items-center justify-between'>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The
                        {' '}
                        <span className='font-extrabold decoration-pink-600/50 underline'>PAPAFAM</span>
                        {' '}
                        NFT Market Place</h1>
                    <button className='rounded-full bg-rose-400 text-x lg:px-5 lg:py-3 lg:text-base px-4 py-2 font-bold text-white' onClick={() => address ? disconnect() : connectWithMetamask()}>{address ? 'Sign Out' : 'Sign In'}</button>
                </header>

                <hr className='border my-2' />
                {address && (
                    <p className='text-smm text-center text-rose-400'>You are logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
                )}
                
                <div className='mt-10 flex flex-1 items-center flex-col space-y-6 text-center lg:space-y-0 lg:justify-center'>
                    <img src="https://links.papareact.com/bdy" alt="" className="w-80 object-cover pb-10 lg:h-40" />
                    <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The PAPAFAM Coding Club | NFT Drop</h1>
                    <p className='pt-2 text-xl text-green-500'>
                        13/21 NFT claimed
                    </p>
                </div>

                <button className='h-16 bg-red-600 text-white rounded-full mt-10 font-bold'>MINT NFT (0.01 ETH)</button>
            </div>
        </div>
    )
}

export default NFTDropPage
