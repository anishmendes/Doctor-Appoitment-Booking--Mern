import React, { useState } from "react";
import doctorImg from '../../assets/images/doctor-img02.png';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";


const DoctorDetails = () => {
  const [tab, setTab] = useState('about'); 

  return (
    <section>
      <div className="max-w-[1170px] mx-10">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="" />
              </figure>

              <section className="mt-[50px]">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-3 text-sm lg:py-2 lg:px-4 text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold rounded mr-4">
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">Anish Mainali</h3>

                <section className="flex mt-[-12px] flex-row gap-0">
                  <span className="flex items-center mt-[-20px] gap-[6px] text-[14px] leading lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="flex text-[14px] mt-[-12px] leading lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    (272)
                  </span>
                  <br />
                </section>

                <p className="text__para text-[14px] mt-[-20px] leading-5 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, laboriosam!
                </p>
              </section>

            
                
              </div>
              
              
              
                <button
                  onClick={() => setTab('about')}
                  className={` ${tab === "about" && "border-b border-solid border-primaryColor"} py-[-20px] px-2 mr-5 text-[16px] bg-[#f7fdfd] border border-solid-[#f9fdfe] outline-none rounded leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab('feedback')} 
                  className={`${tab === "feedback" && "border-b border-solid border-primaryColor" } py-[-20px] mt-[10px] px-2 mr-5 text-[16px] bg-[#f7fdfd] border border-solid-[#f9fdfe] outline-none rounded leading-7 text-headingColor font-semibold`}
                > Feedback
                </button>
          



          

              <div className="mt-[10px]">
                    {
                        tab ==='about' && <DoctorAbout/>
                    }
                    {
                        tab ==='feedback' && <Feedback/>
                    }
              </div>
            </div>
            <div>
              <SidePanel/>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default DoctorDetails;
