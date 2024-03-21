import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import miniImg from '../../assets/miniImg.png'
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'


const Landing = () => {
    return (
        <div className='bg-gradient-to-r from-[#232f74] to-[#091039]'>
            <Navbar />
            <div className='container mx-auto flex  mt-20 text-white flex-col  sm:flex-row'>
                <div className=' w-full h-[520px]  sm:w-[555px] bg-gradient-to-r from-black to-[#116211] flex items-center justify-center mx-auto'>

                    <div className='flex  w-full items-center justify-center flex-col relative h-full'>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/7f05/53d8/7f3ddcce107256b4e74af14e8104b759?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X~NfvQWNdnbw8Poh~bWDc3vWO5SgEf9jWnyQ64qWI-~LZOha2pjIbvQQTyDUsBnUw8uRHfDd5bG~YQW3mKUx5xdFEP-hZJbfP-6N8OT282l4H8xmG9Fx-9LmjP3gSsSaLncq2Gh5bgPw113KxnpGpA2Sgxp53QLQW00L6xPA2f9GaLVbcJ4NN7Qh9p~TAqUOPsGeBni-R9rxR3XBAic77z-~1KcRJHtOXtEG8AW3~FkkQY4c3wbdWxTYTDIErUhTDp2zCETWKorXwK3wK5jKdjlYC22QLUwylPV~iRQi9nOITpVv7fI~1I3djqBQ4p5qcqIxv5B6DQDv41k8utBQ~A__"
                            alt="kunalborkar2001@gmail.com"
                            className='h-[140px] mb-20'
                        />
                        <p className='absolute bottom-3 left-8  text-gray-300 hidden md:block'>
                            Carpe Diem Pension, a blockchain-based <br /> retirement fund, offers permanent <br /> payouts through CDP deposits, with a <br />4.32% annual inflation claimable by <br /> depositors.
                        </p>
                        <div className='h-[50px] w-[152px] border absolute bottom-[-20px] right-12 md:right-[-50px] md:top-[15%] bg-white rounded-md'>
                            <img
                                src={miniImg}
                                alt="kunalborkar2001@gmail.com"
                            />
                        </div>
                    </div>
                </div>
                <div className=' h-[50vh]  flex justify-center ml-3 flex-col p-2'>
                    <h1 className='text-[2.5rem] '>Securing Trust : Boosting <br /> Security and Strengthening <br /> Trust at Carpe Diem Pension</h1>
                    <p className='text-[gray] text-[1.2rem] mt-2'>QuillAudits enhances Carpe Diem Pension by <br />addressing 33 vulnerabilities on the Pulse blockchain,<br /> boosting security and user trust in digital pensions.</p>
                </div>
            </div>
            <div className='container mx-auto w-full  my-5 py-5'>
                <BreadCrumbs />
            </div>
        </div>
    )
}

export default Landing

