import React, {useState, useEffect} from 'react'
import Airtable from 'airtable'
import { useNavigate } from "react-router-dom"
import { BiMessageAltError } from 'react-icons/bi'
import {AiOutlineArrowRight} from 'react-icons/ai'

const base = new Airtable({apiKey: import.meta.env.VITE_API_KEY}).base('apphpL7lHo7AHeRV9')

const Survey = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1)
    const [code, setCode] = useState("")
    const codes = ["GYAAN_FGX", "GYAAN_6Y9", "GYAAN_L2X", "GYAAN_ZZ0", "GYAAN_GRG", "GYAAN_1UJ", "GYAAN_CHV", "GYAAN_JVF", "GYAAN_HP7", "GYAAN_PK4"]
    const [user, setUser] = useState({
        's_name': '',
        'phone_no': '',
        'school': '',
        'satisfaction_tutorials': '',
        'grade': '',
        'board': '',
        'academic_status': '',
        'curriculum_status': '',
        'curriculum_issue': '',
        'difficult_sub': '',
        'changes': '',
        'library_need': '',
        'batch_student_efficiency' : '',
        'doubt_frequency': '',
        'opinions': '',
        'survey_partner': '',
        'free_trial': '',
        'whatsapp_grp': '',
        'annual_budget': '',
        'coupon_code' : ''
    })

    useEffect(()=>{
        const randomIndex = Math.floor(Math.random() * 9)
        const generatedCode = codes[randomIndex]
        setUser({...user, 'coupon_code': generatedCode})
    },[])
    const [error, setError] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('clicked')
        console.log(user)
        if(user.s_name && user.phone_no && user.school && user.grade && user.board && user.satisfaction_tutorials && user.academic_status && user.difficult_sub && user.curriculum_issue && user.curriculum_status && user.changes && user.library_need && user.batch_student_efficiency && user.survey_partner) {
            base('survey').create([
                {
                    fields : {
                        name: user.s_name,
                        phone_no: '+91' + user.phone_no,
                        school : user.school,
                        grade: user.grade,
                        board: user.board,
                        satisfaction_tutorials: user.satisfaction_tutorials,
                        academic_status: user.academic_status,
                        difficult_sub: user.difficult_sub,
                        curriculum_issue: user.curriculum_issue,
                        curriculum_status: user.curriculum_status,
                        changes: user.changes,
                        doubt_frequency: user.doubt_frequency,
                        library_need: user.library_need,
                        batch_student_efficiency: user.batch_student_efficiency,
                        partner: user.survey_partner,
                        annual_budget: user.annual_budget,
                        whatsapp_grp: user.whatsapp_grp,
                        free_trial: user.free_trial,
                        coupon_code: user.coupon_code
                    }
                }
              ], function(err, records) {
                if (err) {
                  console.error(err);
                  return;
                }
                records.forEach(function (record) {
                  console.log(record.getId());
                  console.log(user)
                });
              });
              setStep(step+1)
        } else {
            setError('*please enter all the fields')
        }
    }

    const checkPersonalInfo = (e) => {
        e.preventDefault()
        if(user.s_name && user.phone_no && (user.phone_no.length === 10) && user.grade && user.board && user.school){
            setStep(step + 1)
        } else {
            setError("*enter personal information correctly")
        }
    }

    const checkIssue = (e) => {
        if(e.target.value === 'No'){
            setUser({...user, 'curriculum_status' : 'No', 'curriculum_issue' : 'no issue'})
            console.log(user)
        } 
        if(e.target.value === 'Yes' && user.curriculum_issue === ''){
                setUser({...user, 'curriculum_status': 'Yes'})
                setError("*please justify your issue regarding curriculum")
                console.log(user)
        }
    }

    return (
    <main className='md:p-[5rem] p-[1rem] py-auto min-h-screen'>
        <form className=' mx-auto flex flex-col md:gap-5'>
            {
                (step === 1) &&
                <section className='md:w-[60%] flex flex-col gap-3 md:mx-auto rounded-lg md:p-8 p-4 pt-3'>
                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Your name <span className='font-normal leading-10'>(नाम)</span></h1>
                    <input 
                    type='text'
                    className='border-[1px] w-full border-black p-2 rounded-r-full rounded-l-full'
                    value={user.s_name}
                    onChange={(e) => setUser({...user, 's_name':e.target.value})}
                    />
                </div>
                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>School<span className='font-normal leading-10'>(विद्यालय)</span></h1>
                    <input 
                    type='text'
                    className='border-[1px] border-black p-2 w-full rounded-r-full rounded-l-full'
                    value={user.school}
                    onChange={(e) => setUser({...user, 'school':e.target.value})}
                    />
                </div>

                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Phone no <span className='font-normal leading-10'>(फोन नंबर)</span></h1>
                    <input 
                    type='tel'
                    className='border-[1px] border-black p-2 w-full rounded-r-full rounded-l-full'
                    value={user.phone_no}
                    onChange={(e) => setUser({...user, 'phone_no':e.target.value})}
                    />
                </div>

                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Grade<span className='font-normal leading-10'>(कक्षा)</span></h1>
                    <select value={user.grade} onChange={(e) => setUser({...user, 'grade':e.target.value})} className='md:w-[55%] p-2 rounded-l-full rounded-r-full my-1 border-2 border-gray-500'>
                        <option value="">choose grade</option>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                        <option value="7th">7th</option>
                        <option value="8th">8th</option>
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                    </select>
                </div>

                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Board<span className='font-normal leading-10'>(बोर्ड)</span></h1>
                    <select value={user.board} onChange={(e) => setUser({...user, 'board':e.target.value})} className='md:w-[55%] p-2 rounded-l-full rounded-r-full my-1 border-2 border-gray-500'>
                        <option value="">choose board</option>
                        <option value="ICSE">ICSE</option>
                        <option value="CBSE">CBSE</option>
                        <option value="State board">State board</option>
                    </select>
                </div>

                <button onClick={checkPersonalInfo} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                </button>
                </section>
            }
            {
                
                <section className='shadow-md rounded-lg md:p-16 p-6'>
                {
                    (step === 2)&&
                    <div className=' my-5 md:w-[60%] mx-auto' onChange={(e)=> setUser({...user, 'academic_status': e.target.value})}>
                    <h1 className='md:md:text-2xl text-xl tex-xl font-semibold'>What is the current status of your academics? <span className='font-normal leading-10'>(आपके शिक्षाविदों की वर्तमान स्थिति क्या है?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='excellent'
                        name='acad_status'
                        /><label className='md:md:text-xl text-lg font-semibold'>Excellent <span className='font-normal leading-10'>(उत्कृष्ट)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Good'
                        name='acad_status'
                        /><label className='md:md:text-xl text-lg font-semibold'>Good <span className='font-normal leading-10'>(अच्छा)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Average'
                        name='acad_status'
                        /><label className='md:md:text-xl text-lg  font-semibold'>Average<span className='font-normal leading-10'>(सामान्य)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Poor'
                        name='acad_status'
                        /><label className='md:md:text-xl text-lg  font-semibold'>Poor<span className='font-normal leading-10'>(खराब)</span></label>
                        </div>
                    </div>
                    <button disabled={!user.academic_status} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                </div>
                }

                {
                    (step === 3)&&
                    <div className=' my-5 md:w-[60%] mx-auto' onChange={(e)=> setUser({...user, 'satisfaction_tutorials': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>How satisfied are you with your current tutorials? (If any)<span className='font-normal leading-10'>(आप अपने मौजूदा ट्यूटोरियल्स से कितने संतुष्ट हैं? (यदि कोई))</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Higly satisfied'
                        name='satisfaction'
                        /><label className='md:text-xl text-lg font-semibold'>Higly satisfied <span className='font-normal leading-10'>(अत्यधिक संतुष्ट)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='satisfied'
                        name='satisfaction'
                        /><label className='md:text-xl text-lg font-semibold'>Satisfied <span className='font-normal leading-10'>(संतुष्ट)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='not so satisfied'
                        name='satisfaction'
                        /><label className='md:text-xl text-lg font-semibold'>not so satisfied <span className='font-normal leading-10'>(इतना संतुष्ट नहीं)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='not at all satisfied'
                        name='satisfaction'
                        /><label className='md:text-xl text-lg font-semibold'>not at all satisfied <span className='font-normal leading-10'>(बिल्कुल संतुष्ट नहीं)</span></label>
                        </div>
                    </div>
                    <button disabled={!user.satisfaction_tutorials} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                }

                {
                    (step === 4)&&
                    <div className=' my-5 md:w-[60%] mx-auto'>
                    <h1 className='md:text-2xl text-xl font-semibold'>Which subject seems to be the most difficult for you?<span className='font-normal leading-10'>(आपको कौन सा विषय सबसे कठिन लगता है?)</span></h1>
                        <select value={user.difficult_sub} onChange={(e) => setUser({...user, 'difficult_sub':e.target.value})} className='md:w-[55%] p-2 rounded-l-full rounded-r-full my-1 border-2 border-gray-500'>
                            <option value="">choose subject</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="biology">Biology</option>
                            <option value="Maths">Maths</option>
                            <option value="history">History</option>
                            <option value="geography">Geography</option>
                            <option value="social science">social science</option>
                        </select>
                        <button disabled={!user.difficult_sub} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full my-[1rem] rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                        next<AiOutlineArrowRight/>
                        </button>
                    </div>
                }
                {
                    (step === 5)&&
                    <div className=' my-5 md:w-[60%] mx-auto' >
                    <h1 className='md:text-2xl text-xl font-semibold'>Are you facing any issues regarding the curriculum? If yes, justify<span className='font-normal leading-10'>(क्या आप पाठ्यक्रम के संबंध में किसी समस्या का सामना कर रहे हैं। यदि हाँ, तो औचित्य दें)</span></h1>
                    <div className='flex flex-col gap-4 my-3' onChange={(e) => checkIssue(e)}>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Yes'
                        name='curriculum_status'
                        /><label className='md:text-xl text-lg font-semibold'>yes <span className='font-normal leading-10'>(हाँ)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='No'
                        name='curriculum_status'
                        /><label className='md:text-xl text-lg font-semibold'>No <span className='font-normal leading-10'>(नहीं)</span></label>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <input
                        type='text' 
                        value={user.curriculum_issue}
                        name='curriculum_issue'
                        className='border-[1px] border-black p-2 rounded-r-full rounded-l-full'
                        onChange={(e)=> setUser({...user, 'curriculum_issue': e.target.value})}
                        />
                    </div>
                    <h1 className='text-center text-md font-thin text-red-600'> {error} </h1>
                    <button disabled={!(user.curriculum_status && user.curriculum_issue)} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center my-[2rem] mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                </div>
                }
                {
                    (step === 6)&&
                    <div className=' my-5 md:w-[60%] mx-auto' onChange={(e)=> setUser({...user, 'changes': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>What changes in the learning method, do you think will help in resolving  your difficulties? <span className='font-normal leading-10'>(आप किस प्रवेश परीक्षा की तैयारी कर रहे हैं?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Change in teaching method'
                        name='Change '
                        /><label className='md:text-xl text-lg font-semibold'>Change in teaching method<span className='font-normal leading-10'>(शिक्षण पद्धति में बदलाव)</span></label>
                        </div>
                        
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Change in learning method.'
                        name='Change '
                        /><label className='md:text-xl text-lg font-semibold'>Change in learning method. <span className='font-normal leading-10'>(सीखने के तरीके में बदलाव।)</span></label>
                        </div>
                        
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Extra revision sessions'
                        name='Change '
                        /><label className='md:text-xl text-lg font-semibold'>Extra revision sessions<span className='font-normal leading-10'>(अतिरिक्त संशोधन सत्र)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Regular self test series '
                        name='Change '
                        /><label className='md:text-xl text-lg font-semibold'>Regular self test series<span className='font-normal leading-10'>(नियमित स्व परीक्षण)</span></label>
                        </div>
                    </div>
                    <button disabled={!user.changes} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                }
                {
                    (step === 7)&&
                    <div className=' my-5 md:w-[60%] mx-auto' onChange={(e)=> setUser({...user, 'library_need': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>Do you think library is a necessity for a tutorial that will benefit students? <span className='font-normal leading-10'>(क्या आपको लगता है कि पुस्तकालय एक ट्यूटोरियल की आवश्यकता है, जो आपके लिए फायदेमंद हो सकता है?)</span></h1>
                    <div className='flex flex-col gap-4 my-3' >
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Yes'
                        name='library'
                        /><label className='md:text-xl text-lg font-semibold'>yes <span className='font-normal leading-10'>(हाँ)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='No'
                        name='library'
                        /><label className='md:text-xl text-lg font-semibold'>No <span className='font-normal leading-10'>(नहीं)</span></label>
                        </div>
                    </div>
                    <button disabled={!user.library_need} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                }
                {
                    (step === 8)&&
                    <div className='my-5 md:w-[60%] mx-auto'>
                   <h1 className='md:text-2xl text-xl font-semibold'>What budget would you prefer as your annual tutorial fee? <span className='font-normal leading-10'>(आप अपने वार्षिक शिक्षण शुल्क के रूप में कौन सा बजट पसंद करेंगे?)</span></h1>
                    <select value={user.annual_budget} onChange={(e) => setUser({...user, 'annual_budget':e.target.value})} className='md:w-[55%] p-2 rounded-l-full rounded-r-full my-4 border-2 border-gray-500'>
                        <option value="">choose your budget</option>
                        <option value="20k">Rs. 20,000</option>
                        <option value="30k">Rs. 30,000</option>
                        <option value="45k">Rs. 45,000</option>
                        <option value="60k">Rs. 60,000</option>
                    </select>
                    <button disabled={!user.annual_budget} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                }
                {
                    (step === 9)&&
                    <div className=' my-5 md:w-[60%] mx-auto' onChange={(e)=> setUser({...user, 'doubt_frequency': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>What is your point of view, regarding the frequency of doubt clearing sessions?
                    <span className='font-normal leading-10'>(संदेह समाशोधन सत्रों की आवृत्ति के बारे में आपका क्या दृष्टिकोण है?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='After completion of each chapter. '
                        name='doubts'
                        /><label className='md:text-xl text-lg font-semibold'>After completion of each chapter.<span className='font-normal leading-10'>(प्रत्येक अध्याय के पूरा होने के बाद)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='once a week'
                        name='doubts'
                        /><label className='md:text-xl text-lg font-semibold'>once a week <span className='font-normal leading-10'>(सप्ताह में एक बार)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='twice a month'
                        name='doubts'
                        /><label className='md:text-xl text-lg font-semibold'>twice a month<span className='font-normal leading-10'>(महीने में दो बार)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='once a month'
                        name='doubts'
                        /><label className='md:text-xl text-lg font-semibold'>once a week <span className='font-normal leading-10'>(महीने में एक बार)</span></label>
                        </div>
                
                        <div className='flex flex-col gap-3'>
                            <h1 className='md:text-xl text-lg font-semibold'>specify if other<span className='font-normal leading-10'>(यदि कोई अन्य हो तो निर्दिष्ट करें)</span></h1>
                            <input
                            type='text' 
                            value={user.doubt_frequency}
                            name='curriculum_issue'
                            className='border-[1px] border-black p-2 rounded-r-full rounded-l-full'
                            onChange={(e)=> setUser({...user, 'doubt_frequency': e.target.value})}
                            />
                        </div>
                    </div>
                    <button disabled={!user.doubt_frequency} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                }
                {
                    (step === 10)&&
                  <div className=' my-5 md:w-[60%] mx-auto' onChange={(e)=> setUser({...user, 'batch_student_efficiency': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>Will a batch of minimal students, as much as 10-15 help you learn efficiently?  <span className='font-normal leading-10'>(क्या कम से कम 10-15 छात्रों का एक बैच आपको कुशलता से सीखने में मदद करेगा?)</span></h1>
                    <div className='flex flex-col gap-4 my-3' >
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Yes'
                        name='batch'
                        /><label className='md:text-xl text-lg font-semibold'>yes <span className='font-normal leading-10'>(हाँ)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='No'
                        name='batch'
                        /><label className='md:text-xl text-lg font-semibold'>No <span className='font-normal leading-10'>(नहीं)</span></label>
                        </div>
                    </div>
                    <button disabled={!user.batch_student_efficiency} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                }
                {
                    (step === 11)&&
                    <div className='my-5 md:w-[60%] mx-auto'>
                    <h1 className='md:text-2xl text-xl font-semibold'>Will you be interested in a Free-Trial by Gyanam?<span className='font-normal leading-10'>(क्या आप ज्ञानम द्वारा फ्री-ट्रायल में रुचि लेंगे?)</span></h1>
                    <select value={user.free_trial} onChange={(e) => setUser({...user, 'free_trial':e.target.value})} className='p-2 rounded-l-full rounded-r-full my-4 border-2 border-gray-500'>
                        <option value="">choose an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Maybe">Maybe</option>
                    </select>
                    <button disabled={!user.free_trial} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                    
                }
                {
                    (step === 12)&&
                    <div className='my-5 md:w-[60%] mx-auto'>
                    <h1 className='md:text-2xl text-xl font-semibold'>Do you want us to add your phone number to our exclusive WhatsApp group for exciting offers and notifications by Gyaanam?<span className='font-normal leading-10'>(क्या आप चाहते हैं कि ज्ञानम द्वारा रोमांचक ऑफर और नोटिफिकेशन के लिए हम आपके फोन नंबर को हमारे विशेष व्हाट्सएप ग्रुप में जोड़ दें?)</span></h1>
                    <select value={user.whatsapp_grp} onChange={(e) => setUser({...user, 'whatsapp_grp':e.target.value})} className='md:w-[55%] p-2 rounded-l-full rounded-r-full my-4 border-2 border-gray-500'>
                        <option value="">choose an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <button disabled={!user.whatsapp_grp} onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                    
                }
                {
                    (step === 13)&&
                    <div className='my-5 md:w-[60%] mx-auto'>
                    <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Survey partner</h1>
                    <select value={user.survey_partner} onChange={(e) => setUser({...user, 'survey_partner':e.target.value})} className='md:w-[55%] p-2 rounded-l-full rounded-r-full my-4 border-2 border-gray-500'>
                        <option value="">choose a survey partner</option>
                        <option value="Sachin">Sanskar</option>
                        <option value="Zaiba">Zaiba</option>
                        <option value="None">None</option>
                    </select>
                    </div>
                    <button onClick={handleSubmit} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] md:text-2xl text-xl px-8 py-2 font-semibold rounded-l-full rounded-r-full md:w-[55%] w-[90%] mx-auto'>
                        Submit
                    </button>
                    </div>
                    
                }
                {
                    (step === 14)&&
                    <div className='my-5 md:w-[60%] mx-auto'>
                    <h1 className='md:text-2xl text-xl font-semibold'>Share your opinions as a student/parent on what could help enhance the learning curve. <span className='font-normal leading-10'>(एक छात्र/माता-पिता के रूप में अपनी राय साझा करें, जो सीखने में बेहतरी को बढ़ाने में मदद करेगा)</span></h1>
                    <textarea
                    type='text'
                    className='border-2 my-5 w-full border-gray-500 p-4 rounded-md'
                    value={user.opinions}
                    onChange={(e) => setUser({...user, 'opinions':e.target.value})}
                    />
                    <button onClick={() => setStep(step +1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'>
                    next<AiOutlineArrowRight/>
                    </button>
                    </div>
                }
                {
               (step === 15)&& 
                <div className='min-h-screen flex flex-col gap-4 justify-center md:items-center'>
                    <h1 className='text-3xl font-semibold'>Thank you for filling our survey!</h1>
                    <h2 className='md:text-2xl text-left text-xl font-semibold'> your coupon code is {user.coupon_code}</h2>
                     <h3>Please take a screenshot or save this code</h3>
                </div>
                }
                </section>

            } 
            
        </form>
    </main>
  )
}

export default Survey