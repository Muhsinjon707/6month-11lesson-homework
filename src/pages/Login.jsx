import React, { useState, useEffect } from 'react';

import eyeIcon from "../assets/eye.png";
import hiddenEye from "../assets/hidden.png";

function Login() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        let user = {
            email,
            password
        };

        let copied = [...JSON.parse(localStorage.getItem("users"))];

        if (!copied.includes(user)) {
            return;
        }

        alert("User successfully authorized");
    };


    return (
        <div className='w-full flex flex-col gap-10 items-center justify-center m-10'>
            <form className='min-w-[600px] flex flex-col items-start justify-center gap-10 border-2 border-black rounded-md p-10'>
                <div className='w-full flex flex-col items-start justify-center gap-7'>
                    <label htmlFor="email" className='flex items-center justify-between w-full'>Email:
                        <input
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className='border-b-2 border-slate-100 p-3 w-2/4 hover:border-slate-600 transition-border duration-300 text-center outline-none'
                            type="text" id="email" name="email" placeholder='Enter your email:'
                            autoComplete='email' />
                    </label>
                    <label htmlFor="password" className='flex items-center justify-between w-full relative'>Password:
                        <input
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className='border-b-2 border-slate-100 p-3 w-2/4 hover:border-slate-600 transition-border duration-300 text-center outline-none'
                            type={type ? "text" : "password"} id="password" name="password" placeholder='Enter your password:'
                            autoComplete='current-password' />
                        {password && <img className='absolute top-4 right-0' onClick={() => setType(prev => !prev)} src={type ? hiddenEye : eyeIcon} alt="Eye Icon" width="18" />}
                    </label>
                </div>

                <div>
                    <button onClick={handleLogin} className='bg-green-600 hover:bg-green-800 text-white px-4 py-3'>Login</button>
                </div>
            </form>

            <div className='w-full flex flex-wrap items-center gap-3 justify-center'>
                {loading && <p>Loading...</p>}
                {
                    users.length > 0 && users.map(user => {
                        return (
                            <div key={user.id} className='border-2 border-black p-5 rounded-md min-w-5/12 transition-transform duration-500 ease-in-out hover:transform hover:scale-105 flex flex-col items-start justify-center gap-3'>
                                <p>email: {user.email}</p>
                                <h4 className='w-full relative flex items-center justify-between'>
                                    <div className='flex items-center justify-start gap-3'>
                                        Password:
                                        <input type={show ? "text" : "password"} value={user.password} readOnly />
                                    </div>
                                    <img className='absolute top-1 right-0' onClick={() => setType(prev => !prev)} src={show ? hiddenEye : eyeIcon} alt="Eye icon" width="18" />
                                </h4>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Login;