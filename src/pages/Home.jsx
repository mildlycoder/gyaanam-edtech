import React,{useEffect, useState} from 'react'
import {Loader, Card, TeamCard} from '../components/page components/index'
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

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
    const [courses, setCourses] = useState([])
    const [team, setTeam] = useState([])
    useEffect(()=>{
        const fetchCoures = async() => {
            try {
                const coursesQuery =await  sanityClient.fetch(`*[_type == "course"]`)
                setCourses(coursesQuery)
            } catch (error) {
                console.log(error)
            }
        }

        const fetchTeam = async() => {
            try {
                const teamQuery =await  sanityClient.fetch(`*[_type == "team"]`)
                setTeam(teamQuery)
            } catch (error) {
                console.log(error)
            }
        }
        

        fetchCoures()
        fetchTeam()
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
    <main className=''>
        
        {/* hero section */}
        <section className='bg-[#65E4A3] grid md:grid-cols-2 md:gap-28 gap-8 grid-cols-1 md:px-[6.25rem] md:pt-[3.5rem] md:pb-[6rem] px-[1rem] py-5'>
            <section>
                <h2 className='text-5xl font-semibold leading-tight flex flex-col'>
                    <span>Investing in education:</span>
                    <span>The Key to a Better Future</span>
                </h2>
            </section>

            <section className='flex flex-col gap-6'>
                <p className='w-[80%] text-base'>
                Join us today and experience the power of a world-class education. Let us help you unlock your potential and achieve your academic goals.
                </p>

                <Link to='/register'><button className='px-11 py-3 rounded-r-full rounded-l-full font-semibold border-2 border-[#0A2640] hover:bg-[#0A2640] hover:text-[#65E4A3] hover:scale-110 transition-all'>Register</button></Link>
            </section>

            <section className='col-span-2'>
            <Carousel
            infinite={true}
            transitionDuration={500}
            autoPlay={true}
            removeArrowOnDeviceType={["tablet", "mobile","superLargeDesktop","desktop"]}
            autoPlaySpeed={3000}
            ssr={true}
            showDots={true}
            className='rounded-md'
            responsive={responsive}>
                <img src='/assets/banner-1.jpg'/>
                <img src='/assets/banner-2.jpg'/>
                <img src='/assets/banner-3.jpg'/>
            </Carousel>
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

        {/* team */}
        <section className='md:px-[5.25rem] md:p-[6rem]'>
            <div className='text-left w-[75%] mx-auto flex flex-col gap-5'>
                <h1 className='text-xl'>Our team</h1>
                <h2 className='text-5xl'>The people behind the work</h2>
                <p className='text-xl leading-relaxed text-[#777777]'>
                Our team is dedicated to bring quality education to a granular level. We are working towards a goal of bringing a revolution in the EdTech sector. We are post-graduate educators and teachers with experience over five years in the running ed-industry.
                </p>
            </div>


            <section className='grid md:grid-cols-4 grid-cols-1 gap-6 md:px-[4rem] md:pb-[4rem] md:pt-[6rem] px-[1rem]'>
                {
                    team.map((member, index) => {
                        return(
                            <TeamCard key={index} member={member}/>
                        )
                    })
                }
            </section>
        </section>


    </main>
  )
}

export default Home