import React from 'react'
import img1 from "../../assets/img1.svg"
import img2 from "../../assets/img2.svg"

const ContentOne = () => {
    return (
        <div className='flex justify-around'>
            <div className='flex flex-col items-center gap-9 '>
                <p>
                    Carpe Diem Pension, on Pulse blockchain, redefines retirement with <br />
                    a self-managed, inclusive, globally portable fund. Unique for its <br />
                    token burn mechanism, it ensures a sustainable 4.32% inflation <br />
                    payout. With $143.11k and 41.06% of CDP already burned, it serves 35  <br />
                    users globally.
                </p>
                <h1 className='font-bold text-[2rem]'>
                    CarpeDiem Pension's Flexible,  <br />
                    Blockchain-Enabled Future
                </h1>
                <p>
                    CarpeDiem Pension redefines retirement planning with a unique <br />
                    approach that deviates from traditional pension funds. With no <br />
                    minimum age for retirement, it offers flexibility and freedom, <br />
                    ensuring all genders receive equal treatment. CarpeDiem Pension  <br />
                    ensures blockchain transparency, anonymity, and global <br />
                    accessibility, safeguarding pensions during international relocation. <br />
                    Easily transfer pensions to loved ones; share wallet access. <br />
                    Re-deposit payouts for increased future benefits. Importantly,<br />
                    CarpeDiem Pension prioritizes deposit security by avoiding utilizing <br />
                    client funds for internal investments. To become a part of this <br />
                    forward-thinking pension scheme, one simply needs to install and <br />
                    configure a blockchain wallet.
                </p>
                <img
                    src={img1}
                    alt="kunalborkar2001@gmail.com"
                    className='sm:w-[500px] w-full sm:p-0 px-2'
                />



                <div className='flex flex-col items-center gap-9 '>
                    <h1 className='font-bold text-[1.6rem]'>
                        CarpeDiem Pension's Challenges: <br />
                        Enhancing Security Against Reentrancy, <br />
                        Front-Running, and Infinite Minting
                    </h1>
                    <p>
                        CarpeDiem Pension confronts critical security challenges, including <br />
                        the risks of reentrancy and front-running exploits.Malicious <br />
                        actors may exploit contract vulnerabilities, withdrawing excess <br />
                        funds or manipulating transaction timing for unfair advantages. <br />
                        System faces infinite minting threats, risking economic <br />
                        stability with endless creation of CDP tokens or pension shares.  <br />
                        Addressing these challenges is paramount to safeguarding <br />
                        the integrity and security of CarpeDiem Pension.
                    </p>

                    <img
                        src={img2}
                        alt="kunalborkar2001@gmail.com"
                        className='sm:w-[500px] w-full sm:p-0 px-2'
                    />
                </div>


                <div className='flex flex-col items-center gap-9 '>
                    <h1 className='font-bold text-[1.6rem]'>
                        CarpeDiem Pension's Journey Through <br />
                        our Audit Process
                    </h1>

                    

                </div>




            </div>



            {/* Company location */}
            <div className='h-[150px] w-[342px] border sm:flex flex-col pl-4 gap-4 justify-center rounded-md border-purple-900 hidden ' style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <div>
                    <p className='text-[gray]'>Headquarters</p>
                    <p className='font-medium'>Switzerland</p>
                </div>
                <div>
                    <p className='text-[gray]'>Chain</p>
                    <p className='font-medium'>Pulse Blockchain</p>
                </div>
            </div>
        </div>
    )
}

export default ContentOne