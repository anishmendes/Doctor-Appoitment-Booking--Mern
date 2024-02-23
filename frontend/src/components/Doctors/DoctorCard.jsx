import React from "react";
import starIcon from '../../assets/images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const DoctorCard = ({ doctor }) => {
    const {
        name, avgRating, totalRating, photo, specialization, totalPatients, hospital
    } = doctor;

    return (
        <div className="p-3 lg:p-5">
  <img src={photo} className="w-full" alt={name} />

  <h2 className="text-[18px] leading-10 lg:text-[26px] lg:leading-9 text-headingColor font-700 mt-3 lg:mt-5">
    {name}
  </h2>

  <div className="mt-[-80px] mt-2lg:mt-3 gap-20 flex items-center justify-start">
    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-3 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
      {specialization}
    </span>

    <div className="flex items-center gap-[6px]">
      <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
        <img src={starIcon} alt="Star Icon" />
        {avgRating}
      </span>

      <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
        ({totalRating})
      </span>
    </div>
  </div>

  <div className="lg:mt-[-150px] flex items-center justify-between">
    <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
      +{totalPatients} patients
    </h3>
  </div>


  <section className="flex flex-row items-center justify-start mt-[-120px] gap-[20px]">

<p className="flex items-center gap-[6px] text-[14px] leading-6 md:mt-1 font-400 text-textColor">
  At {hospital}
</p>

<Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] ml-[10px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
</Link>

</section>

</div>

    );
};

export default DoctorCard;
