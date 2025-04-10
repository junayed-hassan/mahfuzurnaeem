import * as React from 'react';
import Button from '@mui/material/Button';

function Header() {
    return (
        <div className='flex fixed top-0 w-full z-99 justify-between items-center bg-white px-6 py-4 shadow-md'>
            <img className='w-40' src="/mahfuzurLogo.webp" alt="logo" />
            <ul className='flex items-center gap-4 text-gray-600 font-semibold'>
                <li><Button>Home</Button></li>
                <li><Button>Transition & Transformation</Button></li>
                <li><Button>Portfolio</Button></li>
                <li><Button>Blog</Button></li>
                <li><Button variant="contained">Contact</Button></li>
            </ul>
        </div>
    )
}

export default Header