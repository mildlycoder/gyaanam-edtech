import { async } from '@firebase/util'
import React , {useState} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import {auth} from '../../firebase-config'

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const [currentSession, setCurrentSession] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    const logoutUser = async () => {
        await signOut(auth)
        setLoggedIn(false)
    }

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser?.email){
            setLoggedIn(true)
        }
        setCurrentSession(currentUser)
    })

  return (
    <main className='min-h-screen'>
        <form className='flex flex-col gap-5 md:w-[30%] mx-auto my-[6rem] shadow-md p-14'>
            <div>
                <h1 className='md:text-2xl text-xl font-semibold'>Email</h1>
                <input
                type='email'
                value={userInfo.email}
                onChange={(e) => setUserInfo({...userInfo, email:e.target.value})}
                className='border-[1px] border-black p-2 rounded-l-full rounded-r-full w-full'
                />
            </div>

            <div>
                <h2 className='md:text-2xl text-xl font-semibold'>Password</h2>
                <input
                type='password'
                value={userInfo.password}
                onChange={(e) => setUserInfo({...userInfo, password:e.target.value})}
                className='border-[1px] border-black p-2 rounded-l-full rounded-r-full w-full'
                />
            </div>
            
            <button 
            onClick={registerUser}
            className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'
            >
                Register
            </button>
            {
                (loggedIn)&&
                <div className='flex flex-col gap-5'>
                <h1>
                    {currentSession?.email} logged in 
                </h1>
                <button 
                onClick={logoutUser}
                className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'
                >
                    log out
                </button>
                </div>
            }
        </form>
    </main>
  )
}

export default Register