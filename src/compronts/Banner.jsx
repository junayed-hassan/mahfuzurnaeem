import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { FaMediumM } from "react-icons/fa";

function Banner() {
    return (
        <div className="flex justify-between items-end pt-28 px-28">
            <div>
                <h1 className="text-5xl font-bold font-Merriweathe">Hi, I’m
                    <p className="text-[#3f51b5] pt-1.5">Mahfuzur Naeem</p>
                    <span className='text-3xl text-[#3f51b5] pe-2.5'>a</span>
                    <span className='text-[16px]'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Business Analyst',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Strategic Consultant',
                                1000,
                                ' Startup & SME Solution Architect',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </span>
                </h1>
                <p className='text-gray-500 max-w-2xl italic mt-5 text-justify'>A Bangladeshi solutions architect, strategic consultant, and business analyst specializing in digital transformation, business consultancy, and management. I assist startups and SMEs with competitive analysis, market sizing, financial projections, SWOT analysis, market positioning, and other key services to drive growth and achieve market fit. </p>
                <p className='text-gray-500 max-w-2xl italic mt-5 text-justify'>As the Chief of Optilius, I lead innovative digital solutions, and through Insightica Consulting, I help founders develop efficient, impactful business strategies.</p>

                <ul className='flex gap-3 mt-5 text-white text-xl'>
                    <li className='p-3 rounded-lg bg-[#0e76a8] transition-transform transform duration-300 ease-in hover:scale-110'>
                        <FaLinkedinIn />
                    </li>
                    <li className='p-3 rounded-lg bg-[#3B5998] transition-transform transform duration-300 ease-in hover:scale-110'>
                        <FaFacebookF />
                    </li>
                    <li className='p-3 rounded-lg bg-black transition-transform transform duration-300 ease-in hover:scale-110'>
                        <FaXTwitter />
                    </li>
                    <li className='p-3 rounded-lg bg-[#25d366] transition-transform transform duration-300 ease-in hover:scale-110'>
                        <FaWhatsapp />
                    </li>
                    <li className='p-3 rounded-lg bg-[#309856] transition-transform transform duration-300 ease-in hover:scale-110'>
                        <FaMediumM />
                    </li>
                    <li className='p-3 rounded-lg bg-black transition-transform transform duration-300 ease-in hover:scale-110'>
                        <SiThreads />
                    </li>
                </ul>

                <div className='mt-5'>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined">Request for an appointment</Button>
                        <Button variant="outlined"> Threads: mahfuzurnaeem </Button>
                    </Stack>
                </div>

            </div>
            <div>
                <img className='object-cover' src="/Mahfuzur-Naeem-BB.webp" alt="Mahfuzur-Naeem" />
            </div>
        </div>
    )
}

export default Banner