import React, { useState, useContext, useEffect } from 'react';

import img1 from "../assets/firstImg.webp"
import img2 from "../assets/secondImg.webp"

import avantGarde from "../assets/cards/avantGarde.webp"
import coffeeTable from "../assets/cards/coffeeTable.jpeg"
import comfyBed from '../assets/cards/comfyBed.jpeg'

function Home() {


    return (
        <div className='w-full h-auto'>
            <div className="w-full flex items-center justify-between gap-20 px-10 mt-5">
                <div className='w-1/2 flex flex-col items-start justify-center gap-14'>
                    <h2 className='text-[#394e6a] text-[70px] font-bold w-full leading-none'>We are changing the way people shop</h2>
                    <p className="text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                    <button className='bg-[#0069e0] text-white uppercase px-4 py-3 font-bold rounded-md'>our products</button>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <div className='w-2/3 overflow-x-auto flex scrollbar-hide'>
                        <img className='w-full' src={img1} alt="First Image" />
                        <img className='w-full' src={img2} alt="Second Image" />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-start justify-center gap-10 my-20">
                <div className="w-full flex flex-col items-start justify-center gap-5">
                    <h2 className='text-[#394e6a] text-2xl'>Featured Products</h2>
                    <div className='w-full border-2 border-slate-300'></div>
                </div>
                <div className='w-full flex items-center justify-between flex-wrap gap-5'>
                    <div className='w-[30%] h-[300px] flex flex-col items-center justify-center shadow-md shadow-slate-300 transition-all duration-300 ease-linear hover:shadow-slate-500 rounded-lg gap-5 py-5'>
                        <img className='w-full px-6 rounded-lg h-[200px] object-cover' src={avantGarde} alt="" />
                        <h2>Avant-Garde Lamp</h2>
                        <span>$179.99</span>
                    </div>
                    <div className='w-[30%] h-[300px] flex flex-col items-center justify-center shadow-md shadow-slate-300 transition-all duration-300 ease-linear hover:shadow-slate-500 rounded-lg gap-5 py-5'>
                        <img className='w-full px-6 rounded-lg h-[200px] object-cover' src={coffeeTable} alt="" />
                        <h2>Coffee Table</h2>
                        <span>$179.99</span>
                    </div>
                    <div className='w-[30%] h-[300px] flex flex-col items-center justify-center shadow-md shadow-slate-300 transition-all duration-300 ease-linear hover:shadow-slate-500 rounded-lg gap-5 py-5'>
                        <img className='w-full px-6 rounded-lg h-[200px] object-cover' src={comfyBed} alt="" />
                        <h2>Comfy Bed</h2>
                        <span>$129.99</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home