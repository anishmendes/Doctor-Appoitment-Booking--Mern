import {useContext, useState} from 'react'
import userImg from '../../src/assets/images/doctor-img01.png'
import { authContext } from './../../src/context/AuthContext';
import MyBookings from './MyBookings';
import Profile from './Profile';


const MyAccount = () => {
    const {dispatch} = useContext(authContext)
    const [tab,setTab] = useState('bookings')

    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }
  return (
   <section>
     <div className='max-w-[1170px] px-5 mx-auto'>
        <div className="grid md:grid-cols-3 gap-10 ">
            <div className="pb-[50px] px-[30px] rounded-md">
                <div className="flex items-center justify-center">

                    <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-x-primaryColor'>
                        <img src={userImg} alt=""  className='w-[100px] h-[100px] rounded-full'   />
                    </figure>
                </div>


                <div className='text-center mt-4'>
                    <h3 className='text-[18px] leading-[30px] text-headingColor font-bold '>Anurag Ghimire</h3>
                    <p className='text-textColor text-[15px] leading-6 font-medium'>
                        example@gmail.com
                    </p>
                    <p className='text-textColor text-[15px] leading-6 font-medium'>
                     Blood Type:{""} <span className="ml-2 text-headingColor text-[22px] leading-8 ">O+</span>
                    </p>
                </div>

                <div className='mt-[50px] md:mt-[100px]'>
                <button onClick={handleLogout}
                 className='w-full p-3 text-[16px] leading-7 rounded-md '>
                    Logout
                    </button>
                <button className='w-full mt-4 p-3 text-[16px] leading-7 rounded-md  '>Delete account</button>

              </div>

            </div>
           <div className='md:col-span-2 md:px-[30px]'>
               <div>
                <button onClick={()=> setTab('bookings')} className={`${tab=='bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7
              border border-solid border-primaryColor ` }>My Bookings</button>

                <button
                 onClick={()=> setTab('settings')}
                  className={`${tab=='settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7
              border border-solid border-primaryColor ` }
              >
              Profile Settings</button>
               </div>

            {
                tab == 'bookings' && <MyBookings/>
            }
            {
                tab == 'settings' && <Profile/>
            }
                
           </div>
        </div>
    
    </div>  
   </section>
  )
}

export default MyAccount

