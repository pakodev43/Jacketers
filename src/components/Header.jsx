import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    // const [topNav, settopNav] = useState(false)
  
    return (
      <header className='px-2.5 md:px-15 py-3 flex items-center justify-between w-full'>
        <div>
          <Link to="/"><p className='text-4xl md:text-7xl font-bold font-tertiary'>Jacketers</p></Link>
    
          {/* <nav className={topNav ? 'block fixed top-0 right-0 h-full w-80 md:w-full text-right bg-white border-s-5 border-primary' : 'hidden md:block'}> */}
          <nav className="mt-0.5 md:mt-1">
            <ul className="flex gap-4 md:gap-6 font-bold md:text-2xl">
              <li><Link to="/products" className='pb-1 hover:border-b-2'>Leather</Link></li>
              <li><Link to="/products" className='pb-1 hover:border-b-2'>Woolen</Link></li>
              <li><Link to="/products" className='pb-1 hover:border-b-2'>Jeans</Link></li>
              <li><Link to="/jacket" className='pb-1 hover:border-b-2'>Parachute</Link></li>
            </ul>
          </nav>
        </div>
  
        <div className='hidden gap-3'>
          <button className='z-10' onClick={() => { settopNav(!topNav) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></button>
        </div>

        <div><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"><path fill="inherit" d="M21.5389 10.1119L20.7915 10.1742L21.5389 10.1119ZM22.4278 20.7785L23.1752 20.7163L22.4278 20.7785ZM1.5758 20.7785L2.32321 20.8408L1.5758 20.7785ZM2.46469 10.1119L1.71728 10.0496L2.46469 10.1119ZM17.3351 6.33333H16.5851V6.33333L17.3351 6.33333ZM15.773 2.5621L15.2427 3.09243L15.773 2.5621ZM8.23055 2.5621L8.76088 3.09243L8.23055 2.5621ZM6.66846 6.33333H5.91846V6.33333L6.66846 6.33333ZM16.5851 13C16.5851 13.4142 16.9209 13.75 17.3351 13.75C17.7493 13.75 18.0851 13.4142 18.0851 13L16.5851 13ZM5.91846 13C5.91846 13.4142 6.25424 13.75 6.66846 13.75C7.08267 13.75 7.41846 13.4142 7.41846 13H5.91846ZM20.7915 10.1742L21.6804 20.8408L23.1752 20.7163L22.2863 10.0496L20.7915 10.1742ZM19.7703 22.9167H4.23326V24.4167H19.7703V22.9167ZM2.32321 20.8408L3.2121 10.1742L1.71728 10.0496L0.828392 20.7163L2.32321 20.8408ZM4.23326 22.9167C3.11193 22.9167 2.23009 21.9583 2.32321 20.8408L0.828392 20.7163C0.662394 22.7082 2.23437 24.4167 4.23326 24.4167V22.9167ZM21.6804 20.8408C21.7735 21.9583 20.8917 22.9167 19.7703 22.9167V24.4167C21.7692 24.4167 23.3412 22.7082 23.1752 20.7163L21.6804 20.8408ZM18.8814 8.41667C19.8783 8.41667 20.7087 9.18077 20.7915 10.1742L22.2863 10.0496C22.1387 8.27876 20.6584 6.91667 18.8814 6.91667V8.41667ZM5.12215 6.91667C3.34518 6.91667 1.86485 8.27876 1.71728 10.0496L3.2121 10.1742C3.29488 9.18077 4.12531 8.41667 5.12215 8.41667V6.91667ZM17.3351 8.41667H18.8814V6.91667H17.3351V8.41667ZM5.12215 8.41667H6.66846V6.91667H5.12215V8.41667ZM6.66846 8.41667H17.3351V6.91667H6.66846V8.41667ZM18.0851 6.33333C18.0851 4.71993 17.4442 3.17261 16.3034 2.03177L15.2427 3.09243C16.1022 3.95197 16.5851 5.11776 16.5851 6.33333H18.0851ZM16.3034 2.03177C15.1625 0.890921 13.6152 0.25 12.0018 0.25V1.75C13.2174 1.75 14.3832 2.23289 15.2427 3.09243L16.3034 2.03177ZM12.0018 0.25C10.3884 0.25 8.84107 0.89092 7.70022 2.03177L8.76088 3.09243C9.62043 2.23289 10.7862 1.75 12.0018 1.75V0.25ZM7.70022 2.03177C6.55938 3.17261 5.91846 4.71993 5.91846 6.33333H7.41846C7.41846 5.11776 7.90134 3.95197 8.76088 3.09243L7.70022 2.03177ZM16.5851 6.33333L16.5851 7.66667L18.0851 7.66666L18.0851 6.33333L16.5851 6.33333ZM16.5851 7.66667L16.5851 13L18.0851 13L18.0851 7.66667L16.5851 7.66667ZM5.91846 6.33333L5.91846 7.66667L7.41846 7.66667L7.41846 6.33333L5.91846 6.33333ZM5.91846 7.66667L5.91846 13H7.41846L7.41846 7.66667L5.91846 7.66667Z"></path></svg></Link></div>
      </header>
    )
}

export default Header