import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../App';

function Home() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [themeNew, setNewTheme] = useState();

    const changeBackground = (e) => {
        e.preventDefault();

        setTheme(themeNew);
    };

    return (
        <div className='flex flex-col items-center justify-center gap-9'>
            <h3>About sahifasi <b>uch tilga tarjima qilinishi mumkin.</b> <Link className='text-blue-600 hover:text-blue-800 hover:text-lg' to="/about">About Us</Link></h3>

            <div className='flex items-center justify-center gap-5'>
                Change the color here!
                <div className='flex items-center justify-center gap-5'>
                    <input type="color" value={themeNew} onChange={(e) => setNewTheme(e.target.value)} />
                    <button className='bg-blue-500 p-3 text-white rounded-md' onClick={changeBackground}>Change</button>
                </div>
            </div>
        </div>
    );
}

export default Home;