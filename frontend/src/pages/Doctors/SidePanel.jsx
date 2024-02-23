

import React from "react";

const SidePanel =  () => {
    return (
        <section className="shadow-panelShadow p-3 lg:p-5 rounded-md "> 
        <section className="flex items-center justify-between ">
            <p className="text__para mt-0 font-semibold ">
            Ticket Price 
            </p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
            NPR 400
            </span>
        </section>
        <section >
            <p className="text__para mt-0 font-semibold text-headingColor ">
                    Available Times:
            </p>

            <ul className="mt-3 ">
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold ">
                        Sunday
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold ">
                        04:00PM - 09:30PM
                    </p>

                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold ">
                        Monday
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold ">
                        04:00PM - 09:30PM
                    </p>

                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold ">
                        Thurday
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold ">
                        12:00PM - 04:30PM
                    </p>

                </li>

            </ul>
        </section>

        <button className="btn px-2 w-full rounded-md mt-[-45px]">Book Appointment</button>
        </section>
    )
}
export default SidePanel;