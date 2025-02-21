import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='mt-15 md:mt-30'>

        <div className='mx-5 md:mx-15 xl:mx-35 grid md:grid-cols-4 gap-y-7 md:gap-0 justify-center md:justify-between text-center md:text-left text-accent-300'>

            <div className='text-sm'>
                <p className="mb-6 font-bold">Leather</p>
                <nav>
                    <ul className="flex flex-col gap-2.5">
                        <li><Link to="/">Men</Link></li>
                        <li><Link to="/">Woman</Link></li>
                        <li><Link to="/">Kids</Link></li>
                        <li><Link to="/">Formal</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='text-sm'>
                <p className="mb-6 font-bold">Jeans</p>
                <nav>
                    <ul className="flex flex-col gap-2.5">
                        <li><Link to="/">Men</Link></li>
                        <li><Link to="/">Woman</Link></li>
                        <li><Link to="/">Kids</Link></li>
                        <li><Link to="/">Formal</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='text-sm'>
                <p className="mb-6 font-bold">Wool</p>
                <nav>
                    <ul className="flex flex-col gap-2.5">
                        <li><Link to="/">Men</Link></li>
                        <li><Link to="/">Woman</Link></li>
                        <li><Link to="/">Kids</Link></li>
                        <li><Link to="/">Formal</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='text-sm'>
                <p className="mb-6 font-bold">Parachute</p>
                <nav>
                    <ul className="flex flex-col gap-2.5">
                        <li><Link to="/">Men</Link></li>
                        <li><Link to="/">Woman</Link></li>
                        <li><Link to="/">Kids</Link></li>
                        <li><Link to="/">Formal</Link></li>
                    </ul>
                </nav>
            </div>

        </div>

        <p className="mt-15 md:mt-25 mb-5 text-center text-xs">Copyright © 2025 by Jacketers | All rights reserved.</p>
      
    </div>
  )
}

export default Footer
