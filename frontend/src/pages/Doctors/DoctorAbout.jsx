
// import { fromatDate } from '../../utils/fromatDate';

const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 "> 
                    About  <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                        Anish Mainali

                    </span>
                </h3>
                <p className="text__para ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet illum ea recusandae, eveniet quis inventore sit voluptates vero. Inventore itaque corporis facere enim neque officia, est corrupti mollitia soluta assumenda earum cupiditate incidunt, autem ipsa alias. Officiis provident, impedit doloremque neque, ratione eligendi deleniti quas suscipit libero ab et laboriosam!
                </p>
            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Education
                </h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex felx-col justify-between sm:items-end md:gap-5 mb-[30px] ">
                    
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                           13 Nov 2018 - 13 Nov 2018 {/* {fromatDate("12-08-2018")} - {fromatDate("12-08-2018")} */}
                        </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                PHD in Surgeon
                            </p>
                        
                        <p className="text-[14px] leading-5 font-medium text-textColor ">
                                New CCT Hospital, Chitwan
                            </p>
                    </li>
                    <li className="flex felx-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                       
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            13 Nov 2018 - 13 Nov 2018
                                {/* {fromatDate("12-08-2018")} - {fromatDate("12-08-2018")} */}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                PHD in Surgeon
                            </p>
                    
                        <p className="text-[14px] leading-5 font-medium text-textColor ">
                                New CCT Hospital, Chitwan
                            </p>
                    </li>
                </ul>
            </div>

                <div className="my-12">
                    <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                        Experience
                        
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                        <li className="p-4 rounded bg-[#fff9ea]">
                            <span className="text-yellowColor text-[15px] leadig-6 font-semibold ">
                            13 Nov 2018 - 13 Nov 2018
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                Sr. Surgeon
                            </p>
                            <p className="text-[14px] leading-5 font-medium text-textColor ">
                                New CCT Hospital, Chitwan
                            </p>
                        </li>
                        <li className="p-4 rounded bg-[#fff9ea]">
                            <span className="text-yellowColor text-[15px] leadig-6 font-semibold ">
                            13 Nov 2018 - 13 Nov 2018
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                Sr. Surgeon
                            </p>
                            <p className="text-[14px] leading-5 font-medium text-textColor ">
                                New CCT Hospital, Chitwan
                            </p>
                        </li>
                    </ul>
                </div>




        </div>
    )
}
export default DoctorAbout; 