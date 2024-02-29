import {useContext} from 'react'
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../src/context/AuthContext';

import { useNavigate } from 'react-router-dom';

const Tabs = ({tab, setTab}) => {
  const {dispatch} = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
    navigate("/");
  };  

 

  return (
    <div className='border border-black'>
      <span className='lg:hidden'>
        <BiMenu className="w-6 h-6 cursor-pointer" />

      </span>
      <div className=' lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
        <button 
        onClick={()=>setTab('overview')}
        className={`${
            tab=="overview"
            ? "bg-indigo-100 text-primaryColor"
            :" text-headingColor"
        }w-full btn mt-0 rounded-md` } 
        >
            Overview
            </button>


        <button 
         onClick={()=>setTab('appointments')}
        className={`${
            tab=="appointments"
            ? "bg-indigo-100 text-primaryColor"
            :" text-headingColor"
         } w-full btn mt-0 rounded-md` } 
        >
            Appointments
            </button>



        <button 
         onClick={()=>setTab('settings')}
        className={`${
            tab=="settings"
            ? "bg-indigo-100 text-primaryColor"
            :" text-headingColor"
        }w-full btn mt-0 rounded-md` } 
        >
            Profile
            </button>

            <div className='mt-[100px] w-full'>
            <button 
            onClick={handleLogout}
             className='w-full bg-black  p-3 text-[16px]  rounded-md  '>
                Logout
                </button>
            <button className='w-full h-auto bg-[#000] border border-black z-20 mt-4 p-3 text-[16px] rounded-md '>Delete account</button>

          </div>
        
      </div>
    </div>
  )
}

export default Tabs
