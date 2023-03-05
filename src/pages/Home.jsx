import React,{useEffect, useState} from 'react'
import {Loader, Card} from '../components/page components/index'
import {FiFeather} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import {BiSun} from 'react-icons/bi'
import {RiFocus2Fill} from 'react-icons/ri'
import {TbBooks} from 'react-icons/tb'
import {MdOutlineGroup} from 'react-icons/md'
import {BsEye} from 'react-icons/bs'
import {GiBookStorm} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import sanityClient  from '../../services/client'

const Home = () => {
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        const fetchCoures = async() => {
            try {
                const res =await  sanityClient.fetch(`*[_type == "course"]`)
                setCourses(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCoures()
    },[])

    return (
    <main className=''>
        
        {/* hero section */}
        <section className='bg-[#65E4A3] grid md:grid-cols-2 md:gap-28 gap-8 grid-cols-1 md:px-[6.25rem] md:pt-[3.5rem] md:pb-[6rem] px-[1rem] py-5'>
            <section>
                <h1 className='text-xl'>About</h1>
                <h2 className='text-5xl font-semibold leading-tight'>
                    <span>Investing in education:</span>
                    <span>The Key to a Better Future</span>
                </h2>
            </section>

            <section className='flex flex-col gap-6'>
                <p className='w-[80%] text-base'>
                Join us today and experience the power of a world-class education. Let us help you unlock your potential and achieve your academic goals.
                </p>

                <Link to='/register'><button className='px-10 py-2 rounded-r-full rounded-l-full font-semibold border-2 border-[#0A2640] hover:bg-transparent hover: transition-all'>Register</button></Link>
            </section>
        </section>

        {/* courses section */}
        <section>
            <div className='md:px-[5.25rem] md:py-[3.5rem] px-[1rem] py-5 text-center flex flex-col gap-4'>
                <h1 className='text-xl'>Our services</h1>
                <h2 className='text-5xl leading-tight'>Courses we offer</h2>
            </div>

            <section className='grid md:grid-cols-4 grid-cols-1 gap-6 md:px-[4rem] pb-[6rem] px-[1rem] py-5'>
                {
                    courses.map((course, index) => {
                        return(
                            <Card key={index} course={course}/>
                        )
                    })
                }
            </section>
        </section>

        {/* about gyaanam */}
        <section className='bg-[#0A2640] text-neutral-50 grid grid-cols-2 md:px-[5.25rem] md:p-[6rem]'>
            <section className='col-start-2 flex flex-col gap-5'>
                <h1 className='text-xl'>Our story</h1>
                <h2 className='text-5xl'>Why Gyaanam</h2>
                <p className='text-xl md:w-[80%] leading-relaxed'>Our platform is designed to be student-friendly, with an easy-to-navigate interface and a user-friendly experience. Our expert educators and tutors provide interactive and engaging sessions that make learning fun and effective. With our comprehensive study materials, personalized assessments, and individualized coaching, we strive to ensure that every student receives the support they need to succeed.</p>
            </section>
        </section>
    </main>
  )
}

export default Home