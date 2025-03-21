import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";

//Importing components
import NotificationBar from "../NotificationBar";

//importing images
import LOGO from "../../assets/logo.jpeg";
import PERSON from "../../assets/asset4.jpg";

import { useLocation , Outlet, useNavigate} from "react-router-dom";

//importing icons
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isActive = (pathname) =>{
    return location.pathname.includes(pathname)
  }

  const getCurrentPageName = () =>{
    const arr = location.pathname.split('/')
    if(arr.length>=3){
      return arr[2].charAt(0).toUpperCase()+arr[2].slice(1)
    }else{
      return "Dashboard"
    }
  }

  const handleNavigate = (pathname) =>{
     navigate(pathname)
  }

  const [isMenuOpen,setIsMenuOpen] = useState(true)
  const [isProfileOpen,setIsProfileOpen] = useState(false)

  const [notificationOpen,setNotificationOpen] = useState(false)

  const popupRef = useRef(null)

  const notificationRef = useRef(null)

  // Handle click outside
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsProfileOpen(false)
    }

    if(notificationRef.current && !notificationRef.current.contains(event.target)){
     setNotificationOpen(false)
    }

  };

  const getName = (name) =>{
    if(!name) return "Unknown"
    return String(name).charAt(0).toUpperCase() + String(name).slice(1);
  }

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const logoutUser = () =>{
     dispatch(logout())
     console.log("logout user")
     navigate('/')
  }

  return (
    <div className="flex h-screen bg-lightgray">
      {/* Navbar */}
      <div className="fixed bg-white z-40 top-0 right-0 left-0 md:h-24 h-20 flex items-center">
        <div className={`${isMenuOpen?"md:w-72":"md:w-28"} w-28 duration-300 transition-all px-5 h-full flex items-center gap-2`}>
          <img className="w-10 h-10" alt="logo" src={LOGO}></img>
          {isMenuOpen && <h1 className="text-themeblue md:block hidden text-2xl transition-all duration-300 font-semibold">ApniEshop</h1>}
        </div>
        <div className="flex justify-between px-2 md:px-8 h-full w-full items-center">
          <div className="flex items-center gap-3">
            <span onClick={()=>setIsMenuOpen(!isMenuOpen)} className="text-themeblue cursor-pointer">
              {isMenuOpen ? <MenuIcon style={{ fontSize: "2rem" }}></MenuIcon> : <ArrowRightAltIcon style={{fontSize: "2rem"}}></ArrowRightAltIcon>}
            </span>
            <span className="text-2xl md:block hidden font-bold">{getCurrentPageName()}</span>
          </div>
          
          <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 md:gap-8">
            <span onClick={()=>setNotificationOpen((prevData)=>!prevData)} className="bg-gray-100 text-themeblue cursor-pointer rounded-md flex justify-center items-center w-12 h-12">
              <NotificationsNoneOutlinedIcon
                style={{ fontSize: "1.8rem" }}
              ></NotificationsNoneOutlinedIcon>
            </span>
            <div onClick={()=>setIsProfileOpen(!isProfileOpen)} className="relative flex cursor-pointer items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={PERSON}
                alt="profile"
              ></img>
              <div className="md:flex hidden flex-col">
                <h4 className="text-base leading-4 font-bold">{getName(user?.firstName)}</h4>
                <h4 className="text-sm">{user?.isAdmin?"Admin":"Member"}</h4>
              </div>
              {isProfileOpen && 
               <div ref={popupRef} className="absolute z-40 w-36 md:w-48 shadow rounded-md border bg-white top-[120%] right-0 flex flex-col ">
                 <Link to="/admin/profile"><div className="flex hover:bg-lightgray p-2 items-center gap-2 text-gray-500"><span className="text-blue-500"><AccountCircleIcon></AccountCircleIcon></span> Profile</div></Link>
                 <div onClick={logoutUser} className="flex hover:bg-lightgray p-2 items-center gap-2 text-gray-500"><span className="text-red-500"><LogoutIcon></LogoutIcon></span> Logout</div>
              </div>
              }
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="w-full relative flex md:mt-24 mt-20">
        {/* Sidebar For Web screen */}
        <div className={`${isMenuOpen?"w-72":"w-28"} z-40 md:block hidden transition-all duration-300 shadow-lg bg-white`}>
            <div onClick={()=>handleNavigate('/admin/dashboard')} className={`group flex ${isActive("dashboard") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('dashboard') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><DashboardOutlinedIcon style={{fontSize:'1.5rem'}}></DashboardOutlinedIcon></span>
               {isMenuOpen && <span className={`${isActive("dashboard") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Dashboard</span>}
            </div>
            <div onClick={()=>handleNavigate('products')} className={`group flex ${isActive("products") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('products') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><Inventory2OutlinedIcon style={{fontSize:'1.5rem'}}></Inventory2OutlinedIcon></span>
               {isMenuOpen && <span className={`${isActive("products") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Products</span>}
            </div>
            <div onClick={()=>handleNavigate('company')} className={`group flex ${isActive("company") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('company') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><StoreOutlinedIcon style={{fontSize:'1.5rem'}}></StoreOutlinedIcon></span>
               {isMenuOpen && <span className={`${isActive("company") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Company</span>}
            </div>
            <div onClick={()=>handleNavigate('users')} className={`group flex ${isActive("users") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('users') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><GroupOutlinedIcon style={{fontSize:'1.5rem'}}></GroupOutlinedIcon></span>
               {isMenuOpen && <span className={`${isActive("users") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Users</span>}
            </div>
            <div onClick={()=>handleNavigate('orders')} className={`group flex ${isActive("orders") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('orders') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><ShoppingBagOutlinedIcon style={{fontSize:'1.5rem'}}></ShoppingBagOutlinedIcon></span>
               {isMenuOpen && <span className={`${isActive("orders") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Order Details</span>}
            </div>
       
        </div>


        {/* sidebar for mobile screen */}
        <div className={`${isMenuOpen?"-left-96":"left-0"} z-40 w-64 bottom-0 top-0 md:hidden absolute transition-all duration-300 shadow-lg bg-white`}>
            <div onClick={()=>handleNavigate('/admin')} className={`group flex ${isActive("dashboard") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('dashboard') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><DashboardOutlinedIcon style={{fontSize:'1.5rem'}}></DashboardOutlinedIcon></span>
               <span className={`${isActive("dashboard") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Dashboard</span>
            </div>
            <div onClick={()=>handleNavigate('products')} className={`group flex ${isActive("products") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('products') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><Inventory2OutlinedIcon style={{fontSize:'1.5rem'}}></Inventory2OutlinedIcon></span>
               <span className={`${isActive("products") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Products</span>
            </div>
            <div onClick={()=>handleNavigate('company')} className={`group flex ${isActive("company") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('company') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><StoreOutlinedIcon style={{fontSize:'1.5rem'}}></StoreOutlinedIcon></span>
               <span className={`${isActive("company") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Company</span>
            </div>
            <div onClick={()=>handleNavigate('users')} className={`group flex ${isActive("users") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('users') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><GroupOutlinedIcon style={{fontSize:'1.5rem'}}></GroupOutlinedIcon></span>
               <span className={`${isActive("users") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Users</span>
            </div>
            <div onClick={()=>handleNavigate('orders')} className={`group flex ${isActive("orders") && "bg-blue-50 border-r-2 border-themeblue"} hover:bg-blue-50 py-4 cursor-pointer px-8 items-center gap-2`}>
               <span className={`${isActive('orders') ? "text-themeblue" : "text-gray-700 group-hover:text-themeblue"} `}><ShoppingBagOutlinedIcon style={{fontSize:'1.5rem'}}></ShoppingBagOutlinedIcon></span>
               <span className={`${isActive("orders") && "text-themeblue"} group-hover:text-themeblue font-medium text-lg`}>Order Details</span>
            </div>
           
        </div>
          <NotificationBar ref={notificationRef} notificationOpen={notificationOpen}></NotificationBar>
        {/* Outlate */}
        <div className="w-full md:px-6 px-4 py-2 md:py-4 overflow-y-auto ">
            <Outlet></Outlet>
        </div>
      </div>

    </div>
  );
}
