import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Product from '../components/product.jsx'
import Footer from '../components/Footer.jsx'

const Products = () => {
    return (
        <>
            <Header />

            <Link to="/" className="mx-5 md:mx-15 my-7 md:my-7 flex gap-3 w-fit"><svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg><span className='font-medium md:text-lg'>Back</span></Link>

            <div className='mx-5 md:mx-10 xl:mx-15 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-1 md:gap-5'>

              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />

            </div>

            <Footer />
        </>
    )
}

export default Products