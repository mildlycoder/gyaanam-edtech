import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='bg-[#65E4A3]'>
      <nav className='flex items-center justify-between md:mx-[6.25rem] md:py-[3.5rem] mx-[1.25rem] py-5'>
        <div className='flex items-center'>
          <img src='/assets/GET-logo-8.png' className='h-[2.125rem]'/>
        </div>

        <ul>
        <Link to='/login'><li><button className='px-10 py-2 rounded-r-full rounded-l-full font-semibold border-2 border-[#0A2640] hover:bg-transparent hover: transition-all'>Log in</button></li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar