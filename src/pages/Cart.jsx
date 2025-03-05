import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Product from '../components/Product'
import Footer from '../components/Footer'

import productImage01 from '../assets/productImage01.webp'
import productImage02 from '../assets/productImage02.webp'

function Cart() {
  return (
    <div>
        <Header />

        <div className="my-10 md:my-25 mx-2.5 md:mx-15">
            <p className="mb-3 md:mb-7 ms-5 md:ms-10 text-lg md:text-3xl">Your Cart</p>

            <div className="flex flex-col gap-5">
                <div className="md:px-10 w-full flex items-center justify-between">
                    <div className='flex items-center gap-3 md:gap-7'>
                        <div><img className='w-35 aspect-square rounded-2xl' src={ productImage01 } alt="Image of the product" /></div>
                        <div className='flex flex-col md:gap-0.5 max-w-40 md:max-w-80'>
                            <p className="font-medium">M-LF-0200342-Men Leather Formals</p>
                            <p>Size: 43</p>
                            <p>Color: Gray</p>
                        </div>
                    </div>
                    <div><p>Rs. 1,500</p></div>
                </div>
                <div className="md:px-10 w-full flex items-center justify-between">
                    <div className='flex items-center gap-3 md:gap-7'>
                        <div><img className='w-35 aspect-square rounded-2xl' src={ productImage02 } alt="Image of the product" /></div>
                        <div className='flex flex-col md:gap-0.5 max-w-40 md:max-w-80'>
                            <p className="font-medium">M-LF-0200342-Men Leather Formals</p>
                            <p>Size: 43</p>
                            <p>Color: Gray</p>
                        </div>
                    </div>
                    <div><p>Rs. 1,500</p></div>
                </div>

                <div className='pt-5 md:pt-15 md:px-10 text-end'>
                    <p><span className='font-semibold'>Subtotal:</span>&nbsp;&nbsp; Rs. 3,000</p>
                    <Link to="/" className='mt-7 mb-10 md:mt-10 md:mb-15 w-full block py-3 md:py-4 px-6 md:px-7 text-center text-white hover:text-accent bg-primary hover:bg-primary-300 font-medium'><span>Checkout</span></Link>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Cart