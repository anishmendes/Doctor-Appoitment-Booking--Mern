import React from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false)


  const [formData, setFormData] = useState({
   name:"",
    email: "",
    password: "",
    photo: selectedFile,
    gender:"",
    role:"patient",
     
  });

  const navigate = useNavigate()
 

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };



  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    
    const data = await uploadImageToCloudinary(file)

    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({...formData, photo:data.url})

  };


    const submitHandler = async event => {
      event.preventDefault();
      setLoading(true)
      

      try {
        const res = await fetch(`${BASE_URL}/api/v1/auth/register`,{
          method:'post',
          headers:{
            "Content-Type":"application/json"
          },
          
          body: JSON.stringify(formData)
        })
       
       const {message} = await res.json()
    

       if(!res.ok){
        throw new Error(message)
       }

       setLoading(false)
       toast.success(message)
       navigate('/login')

      } catch (err) {
        
        toast.error(err.message)
        setLoading(false)
      }
    };

  return (
    <section className="px-5 xl:px-0">
      <section className="max-w-[1170px] mx-auto ">
        <section className="grid grid-cols-1 lg:grid-cols-2">
          {/* ======img box====== */}
          <section className="hidden lg:block bg:primaryColor rounded-l-lg ">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </section>

          {/* ====SignUp-Form==== */}

          <section className="rounded-l-lg lg:p-16 py-10 ">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <section className="mt-[-70px]">
                <section className="mb-0.1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
 />
                                    {/* <p className="px-4 py-2 text-red-500">{formError?.name }</p> */}

                </section>
                <section className="mb-0.1 mt-[-30px]">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    
                  />
                  {/* <p className="px-4 py-2 text-red-500">{formError?.email }</p> */}
                </section>
                <section className="mb-0.1 mt-[-30px]">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    
                  />
                  {/* <p className="px-4 py-2 text-red-500">{formError?.password }</p> */}
                  
                </section>
              </section>

              <section className="mb-5 flex items-center justify-between  ">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7 "
                >
                  Are you a:{" "}
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    id="role"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7 "
                >
                  Gender:{" "}
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    id="gender"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </section>

              <section className="mb-5 flex mt-[-40px] items-center gap-3 ">
                { selectedFile && ( <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center ">
                  <img src={previewURL} alt="" className="w-full rounded-full " />
                </figure>)}

                <section className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileInputChange}
                    id="customfile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customfile"
                    className=" Upload-Photo absolute  top-0 left-2 w-full h-full flex items-center px-[1.75rem ] py-[5px] pt-[10px] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </section>
              </section>
              <section className="mt-[-30px]">
                <button
                  disabled={loading &&  true}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-2"
                >
                  { loading ? <HashLoader size={35} color="#ffff" />:"Sign Up"}
                </button>
              </section>
              <section>
                <p className="mt-[-30px] text-textColor text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primaryColor font-medium ml-1 "
                  >
                    LogIn
                  </Link>
                </p>
              </section>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Signup;
