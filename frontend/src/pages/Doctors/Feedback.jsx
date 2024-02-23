import avatar from '../../assets/images/avatar-icon.png';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';
import React, { useState } from 'react';  // Import useState from 'react'

const Feedback = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);  // Fix the typo

    return (
        <div>
            <div className="mb-[50px]">
                <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
                    All review (272)
                </h4>
                <div className="flex justify-between gap-10 mb-[30px]">
                    <div className='flex gap-3'>
                        <figure className="w-10 h-10 rounded-full">
                            <img className="w-full " src={avatar} alt="" />
                        </figure>
                        <div>
                            <h5 className="text-[16px] leading-6 text-primaryColor font-bold" >
                                Ali Amhed
                            </h5>
                            <p className="text-[14px] leading-6 text-textColor ">
                                Feb 14, 2023
                            </p>
                            <p className="text__para mt-3 font-medium text-[15px] ">Good Services, highly recommended👍</p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {[...Array(5).keys()].map((_, index) => <AiFillStar key={index} color='#0067FF' />)}
                    </div>
                </div>
                {!showFeedbackForm && <div className="text-center mt-[-105px]">
                    <button className='btn' onClick={() => setShowFeedbackForm(true)}>
                        Give Feedback
                    </button>
                </div>}

                {showFeedbackForm && <FeedbackForm />}
            </div>
        </div>
    )
}

export default Feedback;
