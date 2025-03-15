import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

//Importing icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CAMERA from '../assets/camera.png'
import { LoaderCircle } from 'lucide-react';

function AddNewCompany() {

  const [formData,setFormData] = useState({
    RegistrationDate: "",
    RenewalDate: "",
    um_cancel_flag: "",
    PaymentStatus: null,
    mail_id: "",
    id: null,
    company_code: null,
    company_name: "",
    gst_no: "",
    company_address: "",
    city_name: "",
    state_name: "",
    Email_id: "",
    password: "",
    cancel_flag: "",
    created_by: "",
    created_date: "",
    created_host: "",
    last_modified_by: null,
    last_modified_date: null,
    last_modified_host: null,
    mobile_no: "",
    company_img: null,
    referencecode: null,
    Country: null,
    PinCode: null
  })


  const [loading,setLoading] = useState(false)
  const [errors,setErrors] = useState({})

  const handleChange = (e) =>{
    const {name, value} = e.target

    setFormData((prev)=>({...prev,[name]:value}))
  }

  return (
    <div className='flex h-full flex-col gap-3 md:gap-4'>
       <div className='bg-white custom-shadow rounded-md md:py-4 py-3 px-3 md:px-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
           <Link to={'/admin/company'}><span className='text-gray-600 cursor-pointer'><ArrowBackIosIcon style={{fontSize:'1.4rem'}}></ArrowBackIosIcon></span></Link>
           <h1 className='text-gray-800 text-base md:text-lg font-medium'>Add New Company</h1>
        </div>
      </div>
      <div className='md:py-6 md:px-4 bg-white rounded-md custom-shadow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 py-3 px-3'>
         <div className='flex items-center gap-4 p-4'>
            <div className='flex w-32 h-32 border items-center rounded-full justify-center'>
               <div className='w-full h-full p-3'>
                  <img src={CAMERA} alt='camera'></img>
               </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-medium text-gray-700'>Upload Company Image</span>
              <input type='file' id='company_img' className='hidden'></input>
              <label htmlFor='company_img' className='p-1 hover:bg-blue-800 transition-all w-32 duration-300 bg-themeblue text-white rounded-md cursor-pointer text-center'>Upload Image</label>
            </div>
         </div>
         <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
             <label htmlFor='company_code' className='font-medium text-gray-700'>Company Code <span className='text-red-500'>*</span></label>
             <input name='company_code' onChange={handleChange} type='text' value={formData.company_code} id='company_code' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 65334'></input>
             {errors.company_code && <span className='text-sm text-red-400'>{errors.company_code}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='company_name' className='font-medium text-gray-700'>Company Name <span className='text-red-500'>*</span></label>
             <input name='company_name' onChange={handleChange} type='text' value={formData.company_name} id='company_name' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Lakme'></input>
             {errors.company_name && <span className='text-sm text-red-400'>{errors.company_name}</span>}
          </div>
         </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='Email_id' className='font-medium text-gray-700'>Email Address <span className='text-red-500'>*</span></label>
             <input name='Email_id' onChange={handleChange} type='text' value={formData.Email_id} id='Email_id' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. a@example.com'></input>
             {errors.Email_id && <span className='text-sm text-red-400'>{errors.Email_id}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='mobile_no' className='font-medium text-gray-700'>Mobile No <span className='text-red-500'>*</span></label>
             <input name='mobile_no' onChange={handleChange} type='text' value={formData.mobile_no} id='mobile_no' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 75343432'></input>
             {errors.mobile_no && <span className='text-sm text-red-400'>{errors.mobile_no}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='password' className='font-medium text-gray-700'>Password <span className='text-red-500'>*</span></label>
             <input name='password' onChange={handleChange} type='text' value={formData.password} id='mobile_no' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. ****'></input>
             {errors.password && <span className='text-sm text-red-400'>{errors.password}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='gst_no' className='font-medium text-gray-700'>Gst No <span className='text-red-500'>*</span></label>
             <input name='gst_no' onChange={handleChange} type='text' value={formData.gst_no} id='mobile_no' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 27AAAPA1234A1Z5'></input>
             {errors.gst_no && <span className='text-sm text-red-400'>{errors.gst_no}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='company_address' className='font-medium text-gray-700'>Address <span className='text-red-500'>*</span></label>
             <input name='company_address' onChange={handleChange} type='text' value={formData.company_address} id='mobile_no' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex.3/b Sterling Park'></input>
             {errors.company_address && <span className='text-sm text-red-400'>{errors.company_address}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='PinCode' className='font-medium text-gray-700'>Pincode <span className='text-red-500'>*</span></label>
             <input name='PinCode' onChange={handleChange} type='text' value={formData.PinCode} id='PinCode' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 354433'></input>
             {errors.PinCode && <span className='text-sm text-red-400'>{errors.PinCode}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='city_name' className='font-medium text-gray-700'>City <span className='text-red-500'>*</span></label>
             <input name='city_name' onChange={handleChange} type='text' value={formData.city_name} id='city_name' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Mumbai'></input>
             {errors.city_name && <span className='text-sm text-red-400'>{errors.city_name}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='state_name' className='font-medium text-gray-700'>State <span className='text-red-500'>*</span></label>
             <input name='state_name' onChange={handleChange} type='text' value={formData.state_name} id='state_name' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Maharastra'></input>
             {errors.state_name && <span className='text-sm text-red-400'>{errors.state_name}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='Country' className='font-medium text-gray-700'>Country <span className='text-red-500'>*</span></label>
             <input name='Country' onChange={handleChange} type='text' value={formData.Country} id='Country' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. India'></input>
             {errors.Country && <span className='text-sm text-red-400'>{errors.Country}</span>}
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
          <div className='flex flex-col gap-2'>
             <label htmlFor='referencecode' className='font-medium text-gray-700'>Reference Code <span className='text-red-500'>*</span></label>
             <input name='referencecode' onChange={handleChange} type='date' value={formData.referencecode} id='referencecode' className='p-2 outline-none border-b-2 border-gray-200' ></input>
             {errors.referencecode && <span className='text-sm text-red-400'>{errors.referencecode}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='um_cancel_flag' className='font-medium text-gray-700'>Um Cancel Flag <span className='text-red-500'>*</span></label>
             <select value={formData.um_cancel_flag} id='um_cancel_flag' name='um_cancel_flag' className='p-2 border-2 outline-none'>
               <option value={''}>--- Select Flag ---</option>
               <option value={'Y'}>Yes</option>
               <option value={'N'}>No</option>
             </select>
             {errors.um_cancel_flag && <span className='text-sm text-red-400'>{errors.um_cancel_flag}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='cancel_flag' className='font-medium text-gray-700'>Cancel Flag <span className='text-red-500'>*</span></label>
             <select value={formData.um_cancel_flag} id='cancel_flag' name='cancel_flag' className='p-2 border-2 outline-none'>
               <option value={''}>--- Select Flag ---</option>
               <option value={'Y'}>Yes</option>
               <option value={'N'}>No</option>
             </select>
             {errors.cancel_flag && <span className='text-sm text-red-400'>{errors.cancel_flag}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='created_by' className='font-medium text-gray-700'>Create By <span className='text-red-500'>*</span></label>
             <input name='created_by' onChange={handleChange} type='text' value={formData.created_by} placeholder='Ex. Raj' id='referencecode' className='p-2 outline-none border-b-2 border-gray-200' ></input>
             {errors.created_by && <span className='text-sm text-red-400'>{errors.created_by}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='created_host' className='font-medium text-gray-700'>Create Host <span className='text-red-500'>*</span></label>
             <input name='created_host' onChange={handleChange} type='text' value={formData.created_host} placeholder='Ex. 103.86.19.214' id='created_host' className='p-2 outline-none border-b-2 border-gray-200' ></input>
             {errors.created_host && <span className='text-sm text-red-400'>{errors.created_host}</span>}
          </div>
          <div className='col-span-1 md:col-span-2 flex place-content-center'>
             <button className='bg-themeblue flex justify-center items-center p-2 w-1/5 text-white font-medium'>
               {
                  loading ?
                  (
                    <div className='flex items-center gap-2'>
                     <LoaderCircle className='animate-spin'></LoaderCircle>
                     <span>Loading...</span>
                   </div>
                  )
                  :(
                    <span>Submit</span>
                  )
               }
             </button>
          </div>
      </div>
    </div>
  )
}

export default AddNewCompany