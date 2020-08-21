import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-gray-800 text-white w-full'>
            <div className='flex justify-around p-2'>
                <p className='ml-2 mr-auto'>Hello</p>
                <button className='mr-2 ml-auto focus:outline-none hover:text-gray-600'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    { isOpen ? <AiOutlineCloseCircle size={25} /> : <GiHamburgerMenu size={25}/> }
                </button>
            </div>
            {
                isOpen && (
                    <div className='flex flex-wrap w-full bg-gray-700'>
                        <p className='w-full hover:bg-gray-600 rounded m-2 px-2'>Blog</p>
                        <p className='w-full hover:bg-gray-600 rounded m-2 px-2'>Blog</p>
                        <p className='w-full hover:bg-gray-600 rounded m-2 px-2'>Blog</p>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar;
