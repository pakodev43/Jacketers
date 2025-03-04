import React from 'react'

import { Link } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import productImage01 from '../assets/productImage01.webp'

const Productindividual = () => {
    return (
        <>
            <Header />

            <Link to="/wears" className="mx-5 md:mx-15 my-2 md:my-5 flex gap-3 w-fit"><svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg><span className='font-medium md:text-lg'>Back</span></Link>

            <div className='mx-5 md:mx-15 md:grid grid-cols-[2fr_1fr] gap-10'>
                <div>
                  <img src={ productImage01 } alt="Image of the home" className='w-full object-cover aspect-1/1 rounded-2xl' />
                </div>

                <div className='mt-7 md:mt-20 mb-10 md:mb-15'>
                        <p className='mb-1 text-lg md:text-2xl text-primary'><span className='font-semibold'>M-LF-0200342-Men Leather Formals</span></p>
                        <p className="mb-1 text-sm text-accent-300">MLF020034201541</p>
                        <p className="text-lg flex gap-3 mb-5 md:mb-8 text-accent-300">Rs. 1,500</p>

                        <div className='my-3'>
                          <p className="text-sm mb-2.5 font-medium text-accent-300">COLOR</p>
                          <div className="flex flex-wrap gap-1.5">
                            <input type="radio" className='hidden [&:checked+label]:bg-accent [&:checked+label]:text-white' name="color" id="colorBlack" value="colorBlack" defaultChecked />
                            <label className='py-2.5 px-6 border-1 border-primary-310 text-sm hover:text-white hover:bg-accent cursor-pointer' htmlFor="colorBlack">BLACK</label>
                            <input type="radio" className='hidden [&:checked+label]:bg-accent [&:checked+label]:text-white' name="color" id="colorBrown" value="colorBrown" />
                            <label className='py-2.5 px-6 border-1 border-primary-310 text-sm hover:text-white hover:bg-accent cursor-pointer' htmlFor="colorBrown">BROWN</label>
                            <input type="radio" className='hidden [&:checked+label]:bg-accent [&:checked+label]:text-white' name="color" id="colorGrey" value="colorGrey" />
                            <label className='py-2.5 px-6 border-1 border-primary-310 text-sm hover:text-white hover:bg-accent cursor-pointer' htmlFor="colorGrey">GREY</label>
                          </div>
                        </div>

                        <div className='my-3'>
                          <p className="text-sm mb-2.5 font-medium text-accent-300">SIZE</p>
                          <div className="flex flex-wrap gap-1.5">
                            <input type="radio" className='hidden [&:checked+label]:bg-accent [&:checked+label]:text-white' name="size" id="size41" value="41" defaultChecked />
                            <label className='py-2.5 px-7.5 border-1 border-primary-310 text-sm hover:text-white hover:bg-accent cursor-pointer' htmlFor="size41">41</label>
                            <input type="radio" className='hidden [&:checked+label]:bg-accent [&:checked+label]:text-white' name="size" id="size42" value="42" />
                            <label className='py-2.5 px-7.5 border-1 border-primary-310 text-sm hover:text-white hover:bg-accent cursor-pointer' htmlFor="size42">42</label>
                            <input type="radio" className='hidden [&:checked+label]:bg-accent [&:checked+label]:text-white' name="size" id="size43" value="43" />
                            <label className='py-2.5 px-7.5 border-1 border-primary-310 text-sm hover:text-white hover:bg-accent cursor-pointer' htmlFor="size43">43</label>
                            <input type="radio" className='hidden [&:checked+label]:bg-accent [&:checked+label]:text-white' name="size" id="size44" value="44" />
                            <label className='py-2.5 px-7.5 border-1 border-primary-310 text-sm hover:text-white hover:bg-accent cursor-pointer' htmlFor="size44">44</label>
                            <input type="radio" className='hidden [&:checked+label]:bg-accent [&:checked+label]:text-white' name="size" id="size45" value="45" />
                            <label className='py-2.5 px-7.5 border-1 border-primary-310 text-sm hover:text-white hover:bg-accent cursor-pointer' htmlFor="size45">45</label>
                          </div>
                        </div>

                        <Link to="/" className='mt-7 mb-10 md:mt-10 md:mb-15 w-full block py-3 md:py-4 px-6 md:px-7 text-center text-white hover:text-accent bg-primary hover:bg-primary-300 font-medium'><span>Add to bag</span></Link>
                        <div>
                          <p className='font-medium text-accent-200 text-lg mb-1 md:mb-2'>Product Description</p>
                          <p className="mt-0 md:my-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis veritatis velit perferendis consequatur sunt est sapiente inventore veniam? Sint velit ipsum porro enim placeat quae modi laboriosam qui laudantium?</p>
                        </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Productindividual