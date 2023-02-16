import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='bg-[#0A2640]'>
      <nav className='flex items-center justify-between md:mx-[6.25rem] md:py-[3.5rem] mx-[1.25rem] py-5 border-b-[1px] border-[#69E6A6]'>
        <div className='flex items-center'>
          <img src='/assets/GET-logo-8.png' className='h-[2.125rem]'/>
        </div>

        <ul>
        <Link to='/login'><li><button className='bg-neutral-50 px-5 py-2 rounded-r-full rounded-l-full font-semibold border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50 transition-all'>Log in</button></li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar