import React from 'react';
import footerbg from "../../assets/footerbg.svg";
import footerlogo from "../../assets/footerlogo.svg";
import footerpromotions from '../../assets/footerpromotions.svg'
import footersocial from "../../assets/footersocial.svg"

const Footer = () => {
    return (
        <div className="py-5 min-h-[30vh]" style={{ backgroundImage: `url(${footerbg})` }}>
            <div className='container mx-auto'>
                <img
                    src={footerlogo}
                    alt="kunalborkar2001@gmail.com"
                />

                <div className='flex text-white mt-10 flex-wrap justify-evenly gap-3'>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <h3>More About Quill</h3>
                            <hr className='border-[#2D83EE] border-t-[3px] mt-1 w-[100px]' />
                        </li>
                        <li>About Us</li>
                        <li>FAQs</li>
                        <li>Blockchains We Audit</li>

                        <br />

                        <li>
                            Contact Us: <br />
                            audits@quillhash.com
                        </li>
                        <li>
                            t.me/quillaudits
                        </li>

                        <br />

                        <li>
                            Our Location:
                        </li>
                        <li>
                            Office 104/105 Level 1, <br />
                            Emaar Square, Building 4 <br />
                            Sheikh Mohammed Bin Rashid <br />
                            Boulevard Downtown Dubai, <br />
                            United Arab Emirates <br />
                            P.O box: 416654 <br />
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-2'>
                        <li>
                            <h3>Audit Services</h3>
                            <hr className='border-[#2D83EE] border-t-[3px] mt-1 w-[100px]' />
                        </li>
                        <li>Ethereum Audit</li>
                        <li>Polygon Audit</li>
                        <li>BSC Audit</li>
                        <li>Solana Audit</li>
                        <li>NEAR Audit</li>
                        <li>Algorand Audit</li>
                        <li>Tezos Audit</li>
                        <li>Hyperledger Fabric Audit</li>
                        <li>L1 Audit</li>
                        <li>Polkadot Audit</li>
                        <li>Wallet Audit</li>
                        <li>ZkSync Audit</li>
                        <li>Starknet Audit</li>
                    </ul>


                    <ul className='flex flex-col gap-2'>
                        <li>
                            <h3>Quill Ecosystem</h3>
                            <hr className='border-[#2D83EE] border-t-[3px] mt-1 w-[100px]' />
                        </li>
                        <li>QuillAI</li>
                        <li>QuillCheck</li>
                        <li>QuillShield</li>
                        <li>QuillAcademy</li>
                        <li>QuillMonitor</li>
                        <li>Web3Suggest</li>
                        <li>Explore All Tools</li>

                    </ul>

                    <ul className='flex flex-col gap-2'>
                        <li>
                            <h3>Other Services</h3>
                            <hr className='border-[#2D83EE] border-t-[3px] mt-1 w-[100px]' />
                        </li>
                        <li>Red Teaming</li>
                        <li>dApp Pentesting</li>
                        <li>DeFi Diligence</li>
                        <li>NFT Due Diligence</li>
                        <li>Rug Pull Due Diligence</li>
                        <li>Security Consultation</li>
                        <li>Blockchain Forensics</li>
                        <li>KYC (Know Your Customer)</li>

                    </ul>

                    <ul className='flex flex-col gap-2'>
                        <li>
                            <h3>Quick Links</h3>
                            <hr className='border-[#2D83EE] border-t-[3px] mt-1 w-[100px]' />
                        </li>
                        <li>Pricing</li>
                        <li>Audit Process</li>
                        <li>Our Audits</li>
                        <li>Testimonials</li>
                        <li>Security Synopsis</li>
                        <li>Blog</li>
                        <li>Clients</li>
                        <li>Careers</li>

                    </ul>
                </div>

                <div className='container mx-auto  mt-6 text-white flex justify-around'>
                    <img src={footerpromotions} alt="kunalborkar2001@gmail.com" />

                    <div className='md:flex flex-col gap-4 flex-wrap hidden '>
                        <h3>More About Quill</h3>
                        <hr className='border-[#2D83EE] border-t-[3px] mt-1 w-[100px] mb-4' />

                        <div className='flex gap-3 flex-wrap'>
                            <button className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-3 py-2  bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-purple-900">
                                    Refer-Earn-Secure
                                </div>
                            </button>
                            <button className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-3 py-2  bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-purple-900">
                                    WAGSI Grants
                                </div>
                            </button>
                            <button className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-3 py-2  bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-purple-900">
                                    Ambassador Program
                                </div>
                            </button>
                            <button className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-3 py-2  bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-purple-900">
                                    Partnership Program
                                </div>
                            </button>

                        </div>
                        <img src={footersocial} alt="" />
                    </div>


                </div>
            </div>
            <hr className='w-[80vw] mx-auto mt-10' />
            <div className='container mx-auto text-[#FFFFFF] flex justify-between py-3'>
                <div>
                    <p>
                        All Rights Reserved. © Copyright 2023. QuillAudits - LLC
                    </p>
                </div>
                <div>
                    Privacy Policy
                </div>
            </div>
        </div>
    );
};

export default Footer;
