import React, { useState } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loading";
import { BASE_URL } from "./../../config";
import useFetchData from "./../../hooks/useFetchData";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  console.log("this is our doctor dat ahere ", doctor);

  const {
    _id,
    name,
    qualifications,
    experiences,
    timeSlots,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
    reviews,
  } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto ">
        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" />
                </figure>

                <section className="mt-[50px]">
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-3 text-sm lg:py-2 lg:px-4 text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold rounded mr-4">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>

                  <section className="flex mt-[-12px] flex-row gap-0">
                    <span className="flex items-center mt-[-20px] gap-[6px] text-[14px] leading lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="" />
                      {averageRating.toFixed(2)}&nbsp;
                    </span>
                    <span className="flex text-[14px] mt-[-12px] leading lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      ({totalRating})
                    </span>
                    <br />
                  </section>

                  <p className="text__para text-[14px] mt-[-20px] leading-5 md:text-[15px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </section>
              </div>

              <button
                onClick={() => setTab("about")}
                className={` ${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-[-20px] px-2 mr-5 text-[16px] bg-[#f7fdfd] border border-solid-[#f9fdfe] outline-none rounded leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-[-20px] mt-[10px] px-2 mr-5 text-[16px] bg-[#f7fdfd] border border-solid-[#f9fdfe] outline-none rounded leading-7 text-headingColor font-semibold`}
              >
                {" "}
                Feedback
              </button>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>
            <div>
              <SidePanel
                doctorId={_id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
