import React,{useState} from 'react'
import {FormField, Loader, Card} from '../components/page components/index'
import {FiFeather} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import {BiSun} from 'react-icons/bi'
import {RiFocus2Fill} from 'react-icons/ri'
import {TbBooks} from 'react-icons/tb'
import {MdOutlineGroup} from 'react-icons/md'
import {BsEye} from 'react-icons/bs'
import {GiBookStorm} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
    <main className=''>
        <section className=' bg-[#0A2640] py-[1rem] pb-[10rem]'>
            <article className='px-[1.25rem] mx-auto text-neutral-100  md:text-center'>
                <h1 className='md:text-6xl text-[40px] md:w-[61.375rem] mx-auto leading-[3rem] mt-[2rem] mb-[1rem]'>
                    Experience the difference with us
                </h1>
                <h2 className='text-md mt-[1rem] mb-[2rem] md:w-[65%] md:mx-auto'>
                This survey is conducted by GET to know and acknowledge the students struggling with their curriculum. You are kindly requested to be a part of this survey and help GET with its campaign.
                </h2>
                <Link to='/survey'>
                <button className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] text-lg px-8 py-3 font-semibold rounded-l-full rounded-r-full'>
                    Take survey
                </button>
                </Link>
            </article>
        </section>

        <section>
            <div className='mt-[-6rem] flex justify-center'>
                <img src='/assets/hero-desktop.png' className='hidden md:block'/>
                <img src='/assets/hero-mobile.png' className='block md:hidden w-[90%]'/>
            </div>

            <article className='md:my-[8rem] my-[5rem] md:w-[55%] w-[80%] mx-auto'>
                <h2 className='text-[#0A2640] text-4xl my-4'>Why this survey?</h2>
                <p className='text-gray-500 text-xl my-2'>
                We understand that studying can be a challenging task for students, and we want to help. That's why we're conducting a survey to understand the difficulties and hardships that students face when it comes to their studies.
                </p>
                <p className='text-gray-500 text-xl my-6'>
                By participating in this survey, you'll be helping us improve our platform to better serve you and other students like you
                </p>
            </article>
        </section>

        <section className='bg-[#0A2640] py-[2rem] '>
        <article className='my-[4rem] w-[90%] md:w-[60%] mx-auto text-neutral-100'>
                <h2 className='text-4xl my-10'>Why Gyaanam Educare Tutorials?</h2>
            </article>
            <section className='w-[90%] md:w-[60%] mx-auto flex flex-col gap-12 mb-[6rem]'>
                <article className='flex gap-4'>
                    <div className='w-[100%] md:w-[16%]'>
                    <img src='/assets/value-1.png'/>
                    </div>
                    <article className='font-thin'>
                        <h1 className='text-[#69E6A6] text-2xl md:text-4xl'>Acessible to all</h1>
                        <h2 className='text-neutral-100 my-3 text-lg md:text-xl'>Gyaanam Educare Tutorials learning system is designed to make learning easy and accessible for all students.</h2>
                    </article>
                </article>
                <article className='flex gap-4'>
                    <div className='w-[100%] md:w-[20%]'>
                    <img src='/assets/value-2.png'/>
                    </div>
                    <article className='font-thin'>
                        <h1 className='text-[#69E6A6] text-2xl md:text-4xl'>Student-friendly</h1>
                        <h2 className='text-neutral-100 my-3 text-lg md:text-xl'>We have a dedicated team of educators who are constantly working to improve our platform and make it more student-friendly.</h2>
                    </article>
                </article>
                <article className='flex gap-4'>
                    <div className='w-[100%] md:w-[20%]'>
                    <img src='/assets/value-3.png'/>
                    </div>
                    <article className='font-thin'>
                        <h1 className='text-[#69E6A6] text-2xl md:text-4xl'>Better support</h1>
                        <h2 className='text-neutral-100 my-3 text-lg md:text-xl'>You will be playing a vital role in helping us understand the challenges that students face and how we can better support you.</h2>
                    </article>
                </article>
            </section>
        </section>

        <section className='md:px-[8rem] md:pt-[7rem] pt-[5rem] md:pb-[1rem] pb-[3rem]'>
            <section className='w-[80%] md:w-[85%] mx-auto flex flex-col md:flex-row justify-between gap-5'>
                <article>
                    <h1 className='text-5xl my-8'>7-days free trial session</h1>
                    <p className='hover:bg-[#0A2640] hover:text-neutral-100 transition-all p-3 w-[90%] text-lg rounded-md flex items-center gap-3'><RiFocus2Fill/>Day 1 Aptitude test and counseling.</p>
                    <p className='hover:bg-[#0A2640] hover:text-neutral-100 transition-all p-3 w-[90%] text-lg rounded-md flex items-center gap-3'><TbBooks/>Day 2 to Day 4 lectures.</p>
                    <p className='hover:bg-[#0A2640] hover:text-neutral-100 transition-all p-3 w-[90%] text-lg rounded-md flex items-center gap-3'><MdOutlineGroup/>Day 5 Revision and Doubt clearing session.</p>
                    <p className='hover:bg-[#0A2640] hover:text-neutral-100 transition-all p-3 w-[90%] text-lg rounded-md flex items-center gap-3'><BiSun/>Day 6 Test series day</p>
                    <p className='hover:bg-[#0A2640] hover:text-neutral-100 transition-all p-3 w-[90%] text-lg rounded-md flex items-center gap-3'><FiFeather/>Day 7 PTM and analysed result declaration.</p>
                </article>
                <img src='/assets/hero-2.png' className='hidden md:block'/>
            </section>
        </section>

        <section className='md:px-[8rem] pb-[4rem] pt-[4rem]'>
            <article className='md:w-[75%] mx-auto bg-cta-pattern bg-[#0A2640] p-[4rem] text-center md:rounded-md'>
                <h1 className='text-3xl my-5 text-neutral-100 font-thin'>Take survey now!</h1>
                <Link to='/survey'>
                <button className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] text-lg px-8 py-2 mb-3 font-semibold rounded-l-full rounded-r-full'>
                    Start Now
                </button>
                </Link>
            </article>
        </section>
    </main>
  )
}

export default Home