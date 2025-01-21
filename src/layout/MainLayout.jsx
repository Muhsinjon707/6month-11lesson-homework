import React from 'react';
import { Link } from 'react-router-dom';

function MainLayout({ children }) {
    return (
        <div className='font-sans max-w-[1440px] max-h-screen bg-white mx-auto'>
            <div className='w-11/12 h-full rounded-lg shadow-lg shadow-slate-300 mx-auto flex flex-col items-center justify-between px-5 py-4'>
                <header className='w-full pb-3 border-b-2 border-slate-100'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='bg-blue-400 py-2 px-4 text-white rounded-lg outline-none border-none hover:bg-blue-500'>
                            <Link className='font-bold text-xl uppercase'>C</Link>
                        </div>
                        <ul className='flex items-center justify-center gap-10'>
                            <li className='bg-black py-2 px-4 text-white rounded-md'>
                                <Link className='font-medium hover:border-b-2 pb-2' to='/'>Home</Link>
                            </li>
                            <li className='hover:bg-slate-200 hover:px-4 hover:py-2'>
                                <Link className='font-medium hover:border-b-2 pb-2' to='/about'>About</Link>
                            </li>
                            <li className='hover:bg-slate-200 hover:px-4 hover:py-2'>
                                <Link className='font-medium hover:border-b-2 pb-2' to='/contact'>Contact</Link>
                            </li>
                            <li className='hover:bg-slate-200 hover:px-4 hover:py-2'>
                                <Link className='font-medium hover:border-b-2 pb-2' to='/login'>Login</Link>
                            </li>
                            <li className='hover:bg-slate-200 hover:px-4 hover:py-2'>
                                <Link className='font-medium hover:border-b-2 pb-2' to='/register'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className='min-w-full min-h-screen flex flex-col justify-center items-center'>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;