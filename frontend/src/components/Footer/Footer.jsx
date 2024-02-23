import React from "react";
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillFacebook, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.facebook.com/",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/binayak1001",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/binayak-lamsal/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: '/home',
    display: "Home",
  },
  {
    path: '/',
    display: "About Us",
  },
  {
    path: '/services',
    display: "Services",
  },
  {
    path: '/',
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: '/find-a-doctor',
    display: "Find a Doctor",
  },
  {
    path: '/',
    display: "Request an Appointment",
  },
  {
    path: '/',
    display: "Find a Location",
  },
  {
    path: '/',
    display: "Get an Opinion",
  },
];

const quickLinks03 = [
  {
    path: '/',
    display: "Donate",
  },
  {
    path: '/contact',
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-[#fefffa]">
      <div className="container flex flex-row">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo1} alt="" className="logo-img" />
            <p className="text-[16px] leading-7 text-textColor mt-4 mx-[55px]">
              Copyright {year} developed by ©SABCare , all rights reserved
            </p>
  
            <div className="flex items-center gap-3 mt-4 mx-[55px]">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="w-9 h-9 border border-soliid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
  

  <div className="flex flex-row gap-[100px]  md:ml-[250px]">
          <div>
           
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor"> Quick Links</h2>



                    <ul>
                      {
                        quickLinks01.map((item,index) => (
                          <li key={index} className="mb-4">
                            <Link to={item.path} className=" text-[16px] leading-7 font-[400] text-textColor "> {
                              item.display
                            }

                            </Link>

                          </li>
                        ))
                      }
                    </ul>



          </div>

          <div>
           
           <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor"> I want to:</h2>



                   <ul>
                     {
                       quickLinks02.map((item,index) => (
                         <li key={index} className="mb-4">
                           <Link to={item.path} className=" text-[16px] leading-7 font-[400] text-textColor "> {
                             item.display
                           }

                           </Link>

                         </li>
                       ))
                     }
                   </ul>



         </div>

         <div>
           
           <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor"> Support</h2>



                   <ul>
                     {
                       quickLinks03.map((item,index) => (
                         <li key={index} className="mb-4">
                           <Link to={item.path} className=" text-[16px] leading-7 font-[400] text-textColor "> {
                             item.display
                           }

                           </Link>

                         </li>
                       ))
                     }
                   </ul>

                  </div>
                  </div>
         </div>
        </div>
      
    </footer>
  );
  
};

export default Footer;
