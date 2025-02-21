import React from 'react'
import { Link } from 'react-router-dom'

import productImage01 from '../assets/productImage01.webp'

function Product() {
  return (
    <div>
        <Link to="/jacket">
          <div><img src={ productImage01 } alt="Image of the product" className='aspect-1/1 object-cover rounded-t-xl' /></div>
          <div className='m-3'>
              <p className="mt-1.5 md:mt-0 text-xs md:text-sm">M-LF-0200342-Men Leather Formalss</p>
              <div className="mt-1.5 flex gap-5 text-xs md:text-sm"><p>Rs. 1,500</p></div>
          </div>
        </Link>
      </div>
  )
}

export default Product