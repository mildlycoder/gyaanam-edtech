import React, { useEffect, useState } from 'react'
import sanityClient from '../../../services/client'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

const builder = imageUrlBuilder(sanityClient)

const Card = ({course}) => {
  const [courseImg, setCourseImg] = useState('')
  
  function urlFor(source) {
    return builder.image(source)
  }
  return (
    <article className='flex flex-col gap-5'>
      <img src={urlFor(course.courseImg).url()} className='w-[90%] hover:scale-105 transition-all'/>
      <h1 className='text-2xl'>{course.course}</h1>
      <h2 className='text-xl text-[#777777]'>{course.meta}</h2>
      <Link to='/courses'><span className='underline underline-offset-8 font-semibold flex items-center gap-2 hover:scale-110 transition-all hover:translate-x-8'>Explore page<AiOutlineArrowRight/></span></Link>
    </article>
  )
}

export default Card