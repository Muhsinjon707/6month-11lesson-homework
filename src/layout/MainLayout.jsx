import React from 'react';
import { Link } from 'react-router-dom';

function MainLayout({ children }) {
    return (
        <div className='font-sans max-w-[1440px] max-h-screen bg-white mx-auto'>
            <div className='w-11/12 h-full rounded-lg shadow-lg shadow-slate-300 mx-auto flex flex-col items-center justify-between px-5 py-4'>
                <header className='w-full flex justify-between items-center pb-3 border-b-2 border-slate-100'>
                    <div>
                        <Link className='font-bold text-lg uppercase'>Muhsinjon.</Link>
                    </div>
                    <ul className='flex items-center justify-center gap-5'>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/about'>About</Link>
                        </li>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/register'>Register</Link>
                        </li>
                    </ul>
                </header>
                <main className='min-w-full min-h-screen flex flex-col justify-center items-center'>
                    {children}
                </main>
                <footer className='w-full flex justify-between items-center pt-3 border-t-2 border-slate-100'>
                    <div>
                        <Link className='font-bold text-lg uppercase'>Muhsinjon.</Link>
                    </div>
                    <ul className='flex items-center justify-center gap-5'>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/about'>About</Link>
                        </li>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link className='font-medium hover:border-b-2 pb-2' to='/register'>Register</Link>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default MainLayout;