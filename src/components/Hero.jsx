import { Link } from 'react-router-dom'

import heroimg1 from '../assets/heroimg1.jpg'

function Hero() {
  return (
    <div className='w-full h-[85vh] md:h-auto md:aspect-16/9 relative'>
        <img src={ heroimg1 } alt="Image of clothes" className='w-full h-full object-cover' />
        <div className='absolute bottom-20 md:bottom-30 w-full text-white'>
            <div className='w-fit mx-auto text-center'>
                <p className="text-7xl md:text-9xl font-secondary">Wear the Peace</p>
                <p className="md:text-2xl font-medium uppercase tracking-wide"><Link to="/wears" className='flex gap-2 md:gap-5 justify-center items-center [&:hover_svg]:translate-x-2'><span>Explore the best wears</span><span><svg className='w-5 md:w-7 transition duration-40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#ffffff' d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Hero