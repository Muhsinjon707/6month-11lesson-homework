import React, { useState, useEffect } from 'react';

import eyeIcon from "../assets/eye.png";
import hiddenEye from "../assets/hidden.png";

function Register() {
    const [loading, setLoading] = useState(false);
    const [show, setType] = useState(false);

    const [users, setUsers] = useState([]);
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    const validate = (first_name, last_name, email, password, confirm_password) => {
        if (!first_name || !last_name || !email || !password || !confirm_password) {
            alert("All fields are required!");
            return false;
        }

        if (password !== confirm_password) {
            alert("Passwords should match!");
            return false;
        }

        return true;
    };

    const handleRegistration = (e) => {
        e.preventDefault();

        if (!validate(first_name, last_name, email, password, confirm_password)) {
            return;
        }

        let user = {
            id: Date.now(),
            first_name,
            last_name,
            email,
            password
        };

        let copied = [...users];
        copied.push(user);
        setUsers(copied);

        localStorage.setItem('users', JSON.stringify(copied));

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const deleteOnlyThis = (id) => {
        let conf = confirm("Do you want to delete this?");

        if (!conf) {
            return;
        }

        let copied = [...JSON.parse(localStorage.getItem("users"))];

        let newArray = copied.map(user => user.id !== id);

        localStorage.setItem('users', JSON.stringify(newArray));
    };

    useEffect(() => {
        setLoading(true);

        let storedData = JSON.parse(localStorage.getItem('users')) || [];

        if (storedData) {
            setUsers(storedData);
            setLoading(false);
        }

    }, []);

    return (
        <div className='w-full flex flex-col gap-10 items-center justify-center m-10'>
            <form onSubmit={handleRegistration} className='min-w-[600px] flex flex-col items-start justify-center gap-10 border-2 border-black rounded-md p-10'>
                <div className='w-full flex flex-col items-start justify-center gap-7'>
                    <label htmlFor="first_name" className='flex items-center justify-between w-full'>First name:
                        <input
                            value={first_name} onChange={(e) => setFirstName(e.target.value)}
                            className='border-b-2 border-slate-100 p-3 w-2/4 hover:border-slate-600 transition-border duration-300 text-center outline-none'
                            type="text" id="first_name" name="first_name" placeholder='Enter first name:'
                            autoComplete='username' />
                    </label>
                    <label htmlFor="last_name" className='flex items-center justify-between w-full'>Last name:
                        <input
                            value={last_name} onChange={(e) => setLastName(e.target.value)}
                            className='border-b-2 border-slate-100 p-3 w-2/4 hover:border-slate-600 transition-border duration-300 text-center outline-none'
                            type="text" id="last_name" name="last_name" placeholder='Enter your last name:'
                            autoComplete='username' />
                    </label>
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
                            type={show ? "text" : "password"} id="password" name="password" placeholder='Enter your password:'
                            autoComplete='current-password' />
                        {password && <img className='absolute top-4 right-0' onClick={() => setType(prev => !prev)} src={show ? hiddenEye : eyeIcon} alt="Eye Icon" width="18" />}
                    </label>
                    <label htmlFor="confirm_password" className='flex items-center justify-between w-full relative'>Confirm password:
                        <input
                            value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)}
                            className='border-b-2 border-slate-100 p-3 w-2/4 hover:border-slate-600 transition-border duration-300 text-center outline-none'
                            type={show ? "text" : "password"} id="confirm_password" name="confirm_password" placeholder='Enter your confirm password:'
                            autoComplete="current-password" />
                        {password && <img className='absolute top-4 right-0' onClick={() => setType(prev => !prev)} src={show ? hiddenEye : eyeIcon} alt="Eye Icon" width="18" />}
                    </label>
                </div>

                <div>
                    <button className='bg-green-600 hover:bg-green-800 text-white px-4 py-3' type="submit">Register</button>
                </div>
            </form>

            <div className='w-full flex flex-wrap items-center gap-3 justify-center'>
                {loading && <p>Loading...</p>}
                {
                    users.length > 0 && users.map(user => {
                        return (
                            <div key={user.id} className='border-2 border-black p-5 rounded-md min-w-5/12 transition-transform duration-500 ease-in-out hover:transform hover:scale-105 flex flex-col items-start justify-center gap-3'>
                                <h2 className='flex gap-4 items-center'>Fullname: <span className='flex items-center justify-center gap-3 font-bold text-lg'>{user.first_name} {user.last_name}</span></h2>
                                <p>email: {user.email}</p>
                                <h4 className='w-full relative flex items-center justify-between'>
                                    <div className='flex items-center justify-start gap-3'>
                                        Password:
                                        <input type={show ? "text" : "password"} value={user.password} readOnly />
                                    </div>
                                    <img className='absolute top-1 right-0' onClick={() => setType(prev => !prev)} src={show ? hiddenEye : eyeIcon} alt="Eye icon" width="18" />
                                </h4>
                                <button onClick={() => deleteOnlyThis(user.id)} className='self-end bg-red-600 transition-bg duration-300 ease-out hover:bg-red-700 text-white px-2 py-2'>Delete</button>
                            </div>
                        );
                    })
                }
                {
                    users.length === 0 && <p>No users yet...</p>
                }
            </div>
        </div>
    );
}

export default React.memo(Register);