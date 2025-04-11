import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';

function About() {
    
    return (
        <div className="mt-28 px-28 pb-10">
            <h4 className="text-center text-[#3f51b5] text-xl font-semibold uppercase mb-2">7+ Years of Experience</h4>
            <h2 className="text-center text-[40px] font-bold text-gray-600">Transition & Transformation</h2>
            <ul className="flex justify-between items-center gap-2 mt-10 mb-5 text-gray-600 text-lg">
                <li className="bg-gray-200 rounded-md w-full text-center py-5 font-bold hover:bg-[#3f51b5] hover:text-white transition duration-500 ease-in-out">
                    Entrepreneurial Journey
                </li>
                <li className="bg-gray-200 rounded-md w-full text-center py-5 font-bold hover:bg-[#3f51b5] hover:text-white transition duration-500 ease-in-out">
                    Professional Experience
                </li>
                <li className="bg-gray-200 rounded-md w-full text-center py-5 font-bold hover:bg-[#3f51b5] hover:text-white transition duration-500 ease-in-out">
                    Education & Certifications
                </li>
                <li className="bg-gray-200 rounded-md w-full text-center py-5 font-bold hover:[#3f51b5] hover:text-white transition duration-500 ease-in-out">
                    Leadership & Involvement
                </li>
            </ul>

            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        4 September 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Optilius
                        </Typography>
                        <Typography>Optilius is a digital software company that empowers startups and SMEs with scalable SaaS solutions, custom web design, and app development to optimize operations and drive growth.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        11 December 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Insightica Consulting
                        </Typography>
                        <Typography>Insightica Consulting provides tailored solutions for startups and SMEs, including go-to-market strategies, MVP planning, financial modeling, and pitch decks, helping businesses grow and succeed.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        2 March 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Scoperr
                        </Typography>
                        <Typography>Scoperr is a career enhancement program offering expert guidance to shape and elevate your career. We provide tailored solutions for professional development, strategic planning, and unlocking your full potential.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        January 2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Intenss Digital
                        </Typography>
                        <Typography>Itenss Digital offers web development, digital marketing, creative services, and business strategy, delivering tailored solutions for startups and businesses to drive digital growth and success.</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </div>
    )
};

export default About;