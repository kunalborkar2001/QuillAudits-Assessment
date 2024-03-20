import React from 'react'

const BeforeAfter = () => {
    return (
        <div className='border md:flex md:justify-center md:flex-row  mx-auto w-full flex flex-col items-center gap-10 '>
            <div className='w-[370px] flex flex-col gap-4 '>
                <h1 className='font-bold text-[1.2rem] bg-[#ffabc9] px-2'>
                    Before QuillAudits
                </h1>
                <p>
                    Exploits like reentrancy and front-running <br />
                    can let attackers withdraw extra funds and <br />
                    manipulate transaction timing for unfair <br />
                    gains
                </p>
                <p>
                    Vulnerabilities could allow users to mint CDP <br />
                    tokens or pension shares indefinitely, <br />
                    disrupting the system's economic balance.
                </p>
            </div>

            <hr className="h-[200px] border border-[gray] m-10 md:block hidden" />

            <div className='w-[370px] flex flex-col gap-4'>
                <h1 className='font-bold text-[1.2rem] bg-[#ABCDFF] px-2'>
                    After QuillAudits
                </h1>
                <p>
                    Implementation of reentrancy protection <br />
                    mechanisms.
                </p>
                <p>
                    Ensure precision in decimal handling with <br />
                    standard libraries, recalculate accurately, fix <br />
                    logic errors, and secure referral systems <br />
                    against exploitation.
                </p>
            </div>
        </div>
    )
}

export default BeforeAfter