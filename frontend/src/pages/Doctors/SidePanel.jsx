
import React from "react";
import convertTime from './../../utils/convertTime';
import { BASE_URL, token } from './../../config';

const SidePanel =  ({doctorId, ticketPrice, timeSlots}) => {
 console.log(doctorId, ticketPrice, timeSlots, "this our error")

 const bookingHandler = async()=>{
    try {
        const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
            method: 'post',
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

      const data = await res.json()

      if(!res.ok){
        throw new Error(data.message + 'Please try again')
      }
      
      if(data.session.url){
        window.location.href = data.session.url
      }


      } catch (err){
      toast.error(err.message)
      }
     }




    return (
        <section className="shadow-panelShadow p-3 lg:p-5 rounded-md "> 
        <section className="flex items-center justify-between ">
            <p className="text__para mt-0 font-semibold ">
            Ticket Price 
            </p>
            {/* <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
            NPR {ticketPrice}
            </span> */}
        </section>
        <section  className="mt-[30px]">
            <p className="text__para mt-0 font-semibold text-headingColor ">
                    Available Times Slots:
            </p>

            <ul className="mt-3 ">
                {timeSlots.length>0 && timeSlots?.map((item,index)=>(
                      <li key={index} className="flex items-center justify-between mb-2">
                      <p className="text-[15px] leading-6 text-textColor font-semibold ">
                         {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                      </p>
                      <p className="text-[15px] leading-6 text-textColor font-semibold ">
                          {convertTime(item.startingTime)}- {convertTime(item.endingTime)}
                      </p>
  
                  </li>
                 
                ))}
            

            </ul>
        </section>

        <button onClick={bookingHandler} className="btn px-2 w-full rounded-md mt-[-45px]">Book Appointment</button>
        </section>
    )
}
export default SidePanel;