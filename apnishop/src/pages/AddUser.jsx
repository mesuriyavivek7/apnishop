import React, { useState, useCallback } from 'react'
import "react-color-palette/css";
import { toast } from 'react-toastify'

//Importing icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { LoaderCircle } from 'lucide-react';

import { Link } from 'react-router-dom';


function AddUser() {

  const [formData,setFormData] = useState({
    FirstName: "",
    Email: "",
    MobileNumber: "",
    City: "",
    State: "",
    GSTNo: "",
    isActive: null,
    userid: null,
    AppCmpMapID: null,
    CmpID: null,
    company_name: "",
    RegistrationDate: "",
    RenewalDate: ""
  })
  
  const [loading,setLoading] = useState(false)
  const [errors,setErrors] = useState({})

  const validateData = () =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let newErrors = {}
    if(!formData.FirstName) newErrors.FirstName = 'User name is required.'
    if(!formData.Email) newErrors.Email = "Email address is required."
    else if(emailRegex.test(formData.Email)) newErrors.Email = 'Invalid Email address.'
    if(!formData.MobileNumber) newErrors.MobileNumber="Mobile Number is required."
    else if(formData.MobileNumber.length!==10) newErrors.MobileNumber="Invalid mobile number."
    if(!formData.City) newErrors.city = 'City is required.'
    if(!formData.State) newErrors.State = 'State is required.'
    if(!formData.GSTNo) newErrors.GSTNo = 'GST No is required.'
    if(!formData.AppCmpMapID) newErrors.AppCmpMapID = 'App Cmp is required.'
    if(!formData.CmpID) newErrors.CmpID = 'CMP is required.'
    if(!formData.company_name) newErrors.company_name = 'Company name is required.'
    if(!formData.RegistrationDate) newErrors.RegistrationDate = 'Registration date is required.'
    if(!formData.RenewalDate) newErrors.RenewalDate = 'Renewal Date is required.'

    setErrors(newErrors)

    return Object.keys(newErrors).length===0
  }

  const handleSubmit = async ()=>{
     if(validateData()){
        try{
            setLoading(true)
        }catch(err){
            setLoading(false)
            console.log(err)
            toast.error("Something went wrong.")
        }
     }
  }

  const handleChange = (e) =>{
    const {name , value} = e.targate
    setFormData((prevData)=>({...formData,[name]:value}))
  }

  return (
    <div className='flex h-full flex-col gap-3 md:gap-4'>
       <div className='bg-white custom-shadow rounded-md md:py-4 py-3 px-3 md:px-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
           <Link to={'/admin/products'}><span className='text-gray-600 cursor-pointer'><ArrowBackIosIcon style={{fontSize:'1.4rem'}}></ArrowBackIosIcon></span></Link>
           <h1 className='text-gray-800 text-base md:text-lg font-medium'>Add New Product</h1>
        </div>
      </div>
      <div className='md:py-6 md:px-4 bg-white rounded-md custom-shadow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 py-3 px-3'>
        <div className='flex flex-col gap-2'>
             <label htmlFor='FirstName' className='font-medium text-gray-700'>Name <span className='text-red-500'>*</span></label>
             <input name='FirstName' onChange={handleChange} type='text' value={formData.FirstName} id='user_id' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. jode toe'></input>
             {errors.FirstName && <span className='text-sm text-red-400'>{errors.FirstName}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='Email' className='font-medium text-gray-700'>Email <span className='text-red-500'>*</span></label>
             <input name='Email' onChange={handleChange} type='text' value={formData.Email} id='Email' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. example@gmail.com'></input>
             {errors.Email && <span className='text-sm text-red-400'>{errors.Email}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='MobileNumber' className='font-medium text-gray-700'>MobileNumber <span className='text-red-500'>*</span></label>
             <input name='MobileNumber' onChange={handleChange} type='text' value={formData.MobileNumber} id='MobileNumber' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 635323..'></input>
             {errors.MobileNumber && <span className='text-sm text-red-400'>{errors.MobileNumber}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='City' className='font-medium text-gray-700'>City <span className='text-red-500'>*</span></label>
             <input name='City' onChange={handleChange} type='text' value={formData.City} id='City' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Ahmedabad'></input>
             {errors.City && <span className='text-sm text-red-400'>{errors.City}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='State' className='font-medium text-gray-700'>State <span className='text-red-500'>*</span></label>
             <input name='State' onChange={handleChange} type='text' value={formData.State} id='State' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Gujarat'></input>
             {errors.State && <span className='text-sm text-red-400'>{errors.State}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='GSTNo' className='font-medium text-gray-700'>GST No <span className='text-red-500'>*</span></label>
             <input name='GSTNo' onChange={handleChange} type='text' value={formData.GSTNotate} id='GSTNo' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 27AAAPA1234A1Z5'></input>
             {errors.GSTNo && <span className='text-sm text-red-400'>{errors.GSTNo}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='AppCmpMapID' className='font-medium text-gray-700'>AppCmpMap ID <span className='text-red-500'>*</span></label>
             <input name='AppCmpMapID' onChange={handleChange} type='text' value={formData.AppCmpMapID} id='AppCmpMapID' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 453'></input>
             {errors.AppCmpMapID && <span className='text-sm text-red-400'>{errors.AppCmpMapID}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='CmpID' className='font-medium text-gray-700'>Cmp ID <span className='text-red-500'>*</span></label>
             <input name='CmpID' onChange={handleChange} type='text' value={formData.CmpID} id='CmpID' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 8987'></input>
             {errors.CmpID && <span className='text-sm text-red-400'>{errors.CmpID}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='company_name' className='font-medium text-gray-700'>Comany Name<span className='text-red-500'>*</span></label>
             <input name='company_name' onChange={handleChange} type='text' value={formData.company_name} id='company_name' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Lakme'></input>
             {errors.company_name && <span className='text-sm text-red-400'>{errors.company_name}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='RenewalDate' className='font-medium text-gray-700'>Renewa Date <span className='text-red-500'>*</span></label>
             <input name='RenewalDate' onChange={handleChange} type='date' value={formData.RenewalDate ? new Date(formData.RenewalDate).toISOString().split('T')[0] : ''} id='Country' className='p-2 outline-none border-b-2 border-gray-200' ></input>
             {errors.RenewalDate && <span className='text-sm text-red-400'>{errors.RenewalDate}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='RegistrationDate' className='font-medium text-gray-700'>Registration Date <span className='text-red-500'>*</span></label>
             <input name='RenewalDate' onChange={handleChange} type='date' value={formData.RegistrationDate ? new Date(formData.RegistrationDate).toISOString().split('T')[0] : ''} id='RegistrationDate' className='p-2 outline-none border-b-2 border-gray-200' ></input>
             {errors.RegistrationDate && <span className='text-sm text-red-400'>{errors.RegistrationDate}</span>}
          </div>
          <div className='col-span-1 md:col-span-2 flex place-content-center'>
            <button className='p-2 w-1/5 bg-themeblue flex justify-center items-center text-white'>
                {
                    loading ? 
                    <div className='flex items-center gap-2'>
                        <LoaderCircle className='animate-spin'></LoaderCircle>
                        <span>Loading...</span>
                    </div>
                    :<span>Submit</span>
                }
            </button>
          </div>
      </div>
    </div>
  )
}

export default AddUser