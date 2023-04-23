import React, { useEffect, useState } from 'react'

const ScoreCard = () => {

    const [loading, setLoading] = useState(true);
    useEffect(()=> {
      setTimeout(()=> {
        setLoading(false);
      },20000);
  
      return ()=> {
        clearTimeout(10000)
      }
    },[]);

    // if(loading) {
    //     return (<div>
    //         wait...
    //     </div>)
    // }
    
  return (
    <div className='w-full rounded-lg bg-primary h-30 flex flex-col justify-center items-center'>
        <span className='text-white p-5'>
        The interviewee's responses contain several instances of filler words like "um," "uh," and "you know," which can make their answers sound less polished and professional. Additionally, the overuse of the phrase "like" also detracts from their overall fluency. However, the interviewee shows enthusiasm for the role and has relevant experience and skills to offer, including a background in data engineering and proficiency in relevant programming languages. They also show a willingness to learn and stay current with industry developments, and have clear aspirations for their future career growth.
        </span>
        <span className='text-white my-5'> Final Score: Grading 32% efficient.</span>
    </div>
  )
}

export default ScoreCard