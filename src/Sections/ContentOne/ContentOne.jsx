import React, { useEffect } from 'react';
import img1 from "../../assets/img1.svg"
import img2 from "../../assets/img2.svg"
import card from "../../assets/card.svg"

const ContentOne = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <div className='flex justify-around'>
            <div className='flex flex-col  gap-9 '>
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



                <div className='flex flex-col  gap-9 '>
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


                <div className='flex flex-col  gap-9 '>


                    <h2 className='font-bold text-[1.3rem]'>
                        1. Information Gathering:
                    </h2>
                    <ul className='list-disc pl-9'>
                        <li>
                            Collected and reviewed all relevant documentation, including <br />
                            whitepaper, technical specifications, and design documents.
                        </li>
                        <li>
                            Obtained a clear understanding of the CDP platform's <br />
                            functionality, economic model, and intended user interactions.
                        </li>
                        <li>
                            Discussed client concerns and specific areas of focus for the <br />
                            audit.
                        </li>

                    </ul>


                    <h2 className='font-bold text-[1.3rem]'>
                        2. Manual Code Review:
                    </h2>
                    <ul className='list-disc pl-9'>
                        <li>
                            Vulnerability identification: Searching for known  <br />
                            vulnerabilities like reentrancy, front-running, integer <br />
                            overflows, and access control issues etc.
                        </li>
                        <li>
                            Logic flaws: Identifying inconsistencies or unintended <br />
                            behaviors in the code logic.
                        </li>
                        <li>
                            Tokenomics correctness: Verifying if the code <br />
                            accurately implements the intended economic model  <br />
                            and token distribution mechanisms.
                        </li>
                        <li>
                            Solidity best practices: Compliance with secure coding <br />
                            standards and adherence to established guidelines.
                        </li>
                    </ul>

                    <h2 className='font-bold text-[1.3rem]'>
                        3. Functional Testing:
                    </h2>
                    <ul className='list-disc pl-9'>
                        <li>
                            Developed and executed a comprehensive set of test cases <br />
                            covering various user interactions and edge cases.
                        </li>
                        <li>
                            Simulated different deposit, claim, and referral scenarios to <br />
                            assess functionality and uncover potential exploits.
                        </li>
                        <li>
                            Focused on scenarios identified during the manual review and <br />
                            client concerns (e.g., infinite minting, reward calculation errors).
                        </li>
                        <li>
                            Leveraged tools like Hardhat and Ganache to deploy and test <br />
                            the smart contract locally.
                        </li>
                    </ul>


                    <h2 className='font-bold text-[1.3rem]'>
                        4. Automated Testing:
                    </h2>
                    <ul className='list-disc pl-9'>
                        <li>
                            Employed static analysis tools like Slither to identify <br />
                            vulnerabilities through automated code scanning.
                        </li>
                        <li>
                            Utilized symbolic execution tools like Mythril to explore various <br />
                            code execution paths and uncover potential attack vectors.
                        </li>
                        <li>
                            Integrated unit tests are written by the CDP team to verify <br />
                            specific contract functions and their behaviour.
                        </li>
                    </ul>


                    <h2 className='font-bold text-[1.3rem]'>
                        5. Reporting & Remediation:
                    </h2>
                    <ul className='list-disc pl-9'>
                        <li>
                            Prepared a detailed report outlining all identified vulnerabilities, <br />
                            categorized by severity and potential impact.
                        </li>
                        <li>
                            Provided clear recommendations for fixing each vulnerability, <br />
                            including code snippets and best practices.
                        </li>
                        <li>
                            Collaborated with the CDP team to prioritize and address the <br />
                            identified issues.
                        </li>
                        <li>
                            Conducted additional verification testing after vulnerability fixes <br />
                            were implemented.
                        </li>
                    </ul>



                </div>

                <div className='flex flex-col  gap-9 '>
                    <h1 className='font-bold text-[1.6rem]'>
                        QuillAudits' Strategic Approach to CDP <br />
                        Security Audits
                    </h1>
                    <p>
                        We prioritize threat modeling based on platform-specific risks. <br />
                        Security-first, we identify and mitigate vulnerabilities beyond <br />
                        functionality testing. Using white-box and black-box tests, we <br />
                        conduct thorough vulnerability assessments. Maintaining <br />
                        transparency, we communicate openly with the CDP team. <br />
                        Emphasizing clarity, we present actionable insights for efficient <br />
                        issue resolution.
                    </p>


                </div>

                <div className='flex flex-col  gap-9 '>
                    <h1 className='font-bold text-[1.6rem]'>
                        Comprehensive Audit Discoveries and <br />
                        Remediation Strategies
                    </h1>
                    <p>
                        Throughout the audit process, we unearthed a total of 33 issues, <br />
                        spanning from minor concerns to critical vulnerabilities. Among <br />
                        these, some of the critical issues identified were: Here's how we <br />
                        remediated them :
                    </p>

                    <h2 className='font-bold text-[1.3rem]'>
                        1. Unauthorized Claim/Compound:
                    </h2>
                    <ul className=' pl-9'>
                        <li>
                            a.  Collected and reviewed all relevant documentation, including <br />
                            whitepaper, technical specifications, and design documents.
                        </li>
                    </ul>
                    <h2 className='font-bold text-[1.3rem]'>
                        2. Precision Loss in mintCDP():
                    </h2>
                    <ul className=' pl-9'>
                        <li>
                            a. Precision loss and unscaled values were identified while <br />
                            calculating rewardPerShare in the mintCDP() function.
                        </li>
                    </ul>
                    <h2 className='font-bold text-[1.3rem]'>
                        3. Multiplication Accuracy:
                    </h2>
                    <ul className=' pl-9'>
                        <li>
                            a.  Multiplication operations were prone to providing incorrect <br />
                            answers due to unscaled values, posing a potential risk to <br />
                            accurate calculations.
                        </li>
                    </ul>
                    <h2 className='font-bold text-[1.3rem]'>
                        4. Incorrect Share Allocation:
                    </h2>
                    <ul className=' pl-9'>
                        <li>
                            a.  The protocol was allocating shares for all days, even when <br />
                            there were no corresponding deposits, leading to inefficient <br />
                            use of resources.
                        </li>
                    </ul>
                    <h2 className='font-bold text-[1.3rem]'>
                        5. Logic Error in Referral Handling:
                    </h2>
                    <ul className=' pl-9'>
                        <li>
                            a. A logic error resulted in users always having their <br />
                            user.referral set to address(0), which could be exploited to <br />
                            trick the referral system
                        </li>
                    </ul>
                    <h2 className='font-bold text-[1.3rem]'>
                        6. Referral Exploitation:
                    </h2>
                    <ul className=' pl-9'>
                        <li>
                            a. Users could exploit the referral system to extract more CDP <br />
                            from the protocol, undermining its integrity.
                        </li>
                    </ul>
                </div>




                <div className='flex flex-col  gap-9 '>


                    <h2 className='font-bold text-[1.3rem]'>
                        Remediation & Impact:
                    </h2>
                    <p>
                        All identified vulnerabilities were addressed by the CDP team, <br />
                        significantly enhancing the smart contract's security posture. Key <br />
                        improvements include
                    </p>
                    <ul className='list-disc pl-9'>
                        <li>
                            Implementation of reentrancy protection mechanisms.
                        </li>
                        <li>
                            Accurate handling of decimal values using established libraries or <br />
                            best practices.
                        </li>
                        <li>
                            Revised calculations with proper scaling factors
                        </li>
                        <li>
                            Fixing logic errors to ensure deposits and waiting periods are <br />
                            enforced.
                        </li>
                        <li>
                            Addressing referral system vulnerabilities to prevent abuse.
                        </li>
                    </ul>
                </div>

                {/* Twitter Post  */}
                <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">Our smart contracts have been thoroughly audited by
                        <a href="https://twitter.com/QuillAudits?ref_src=twsrc%5Etfw">@QuillAudits</a>
                        ! They&#39;ve done an amazing job once again!<a href="https://t.co/R3vifYLirW">
                            https://t.co/R3vifYLirW
                        </a>
                        <br />
                        <br />
                        Follow them to learn more about
                        <a href="https://twitter.com/hashtag/Blockchain?src=hash&amp;ref_src=twsrc%5Etfw">
                            #Blockchain</a>
                        <a href="https://twitter.com/hashtag/Security?src=hash&amp;ref_src=twsrc%5Etfw">
                            #Security</a>
                        !
                        <br />
                        <br />🌐 Links in thread 🧵
                        <a href="https://twitter.com/hashtag/Pulsechain?src=hash&amp;ref_src=twsrc%5Etfw">
                            #Pulsechain</a>
                        <a href="https://twitter.com/hashtag/Pension?src=hash&amp;ref_src=twsrc%5Etfw">
                            #Pension</a>
                        <a href="https://twitter.com/hashtag/CarpeDiem?src=hash&amp;ref_src=twsrc%5Etfw">
                            #CarpeDiem</a>
                        <a href="https://twitter.com/hashtag/Audit?src=hash&amp;ref_src=twsrc%5Etfw">
                            #Audit</a>
                        <a href="https://twitter.com/hashtag/DeFi?src=hash&amp;ref_src=twsrc%5Etfw">
                            #DeFi</a>
                        <a href="https://t.co/ejxok7AqzJ">pic.twitter.com/ejxok7AqzJ
                        </a>
                    </p>&mdash; Carpe Diem (@CarpeDiemCDP)
                    <a href="https://twitter.com/CarpeDiemCDP/status/1742906560794296402?ref_src=twsrc%5Etfw">
                        January 4, 2024
                    </a>
                </blockquote>

                <p>
                    CDP smart contract audit revealed and fixed critical vulnerabilities, <br />
                    safeguarding funds and ensuring platform stability. This underscores <br />
                    the need for proactive security in blockchain projects, crucial for <br />
                    financial asset management. Through audits and issue resolution, <br />
                    CDP reinforces platform security, bolstering user trust.
                </p>

                <div>
                    <img src={card} alt="" />
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