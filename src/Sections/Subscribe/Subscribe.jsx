import React from 'react'
import subscribeImg from '../../assets/subscribeImg.svg'

const Subscribe = () => {
    return (
        <div className='bg-gradient-to-r from-[#EDF2FE] to-[#f7f7f7a2] my-5'>

            <div className='min-h-[40vh] container mx-auto sm:flex justify-center gap-[80px] items-center'>
                <div className='mt-9'>
                    <h3 className='font-medium text-[#407AFF]'>
                        NEWSLETTER
                    </h3>
                    <h1 className='text-[1.8rem] mt-4 font-bold text-[#14316C]'>
                        Security First News <br />
                        Letter by QuillAudits
                    </h1>
                    <p className='mt-6 text-[#2D3648]'>
                        Subscribe for the most Exclusive Weekly security <br />
                        based newsletter and covering all the  recent <br />
                        hacks up to date.
                    </p>
                </div>
                <div>
                    <img src={subscribeImg} alt="kunalborkar2001@gmail.com" />
                    <div className='flex justify-center relative mt-4'>
                        <input
                            className='px-4 py-2 w-[300px]'
                            type="text"
                            placeholder='vitalik@ethereum.org'
                        />
                        <button className="absolute right-0 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#6471c3] rounded-md text-white font-light transition duration-200 ease-linear">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe