import { useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/layeredupBlack.svg'


function Header() {
  const [topNav, settopNav] = useState(false)

  return (
    <header className='px-2.5 md:px-15 py-3 md:py-7 flex items-center justify-between w-full'>
      {/* <div><img src={logo} className='w-7.5 md:w-10' alt="Layered Up" /></div> */}
      <div><Link to="/" className='text-lg md:text-2xl uppercase tracking-wider italic'><span className='text-2xl md:text-3xl'>K</span>aftan</Link></div>

      <nav className={topNav ? 'block fixed top-0 right-0 h-full w-80 md:w-full bg-white z-1' : 'hidden md:block'}>
        <ul className="flex gap-4 md:gap-10 uppercase text-2xl md:text-base flex-col md:flex-row pt-23 px-10 md:p-0">
          <li><Link to="/wears" className='pb-1 hover:border-b-2'>Men</Link></li>
          <li><Link to="/wears" className='pb-1 hover:border-b-2'>Women</Link></li>
          <li><Link to="/wears" className='pb-1 hover:border-b-2'>Kids</Link></li>
          <li><Link to="/wears" className='pb-1 hover:border-b-2'>Leather</Link></li>
          <li><Link to="/wears" className='pb-1 hover:border-b-2'>Woolen</Link></li>
          <li><Link to="/wears" className='pb-1 hover:border-b-2'>Parachute</Link></li>
        </ul>
      </nav>

      <div className='flex gap-3'>
        <Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg></Link>
        <button className='md:hidden z-10' onClick={() => { settopNav(!topNav) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></button>
      </div>
    </header>
  )
}

export default Header