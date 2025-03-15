import React, { useState, useCallback } from 'react'
import { useDropzone } from "react-dropzone";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { toast } from 'react-toastify'



//Importing icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CircleX, LoaderCircle } from 'lucide-react';

import { Link } from 'react-router-dom';


function EditProduct() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const updatedFiles = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setFiles((prev) => [...prev, ...updatedFiles]);
  }, []);

  const removeFile = (name) => {
    setFiles(files.filter((file) => file.name !== name));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

   const [openColorBox,setOpenColorBox] = useState(false)
   const [color, setColor] = useColor("#123123");

   const [errors,setErrors] = useState({})
   const [loading,setLoading] = useState(false)

   const [formData,setFormData] = useState({
      id:'',
      user_id:'',
      company_code:'',
      product_code:'',
      product_company_code:'',
      product_name:'',
      prod_company_name:'',
      quantity:'',
      unit_price:'',
      description:'',
      color:'',
      size:'',
      weight:'',
      imagedata:[],
   })

   const handleChange = (e) =>{
     const {name, value} = e.target
     setFormData((prevData)=>({...prevData,[name]:value}))
   }

   const validateData = () =>{
     let newErrors = {}
     if(files.length===0) newErrors.image="Please upload at least one product image."
     if(!formData.user_id) newErrors.user_id='Please select user for this product.'
     if(!formData.company_code) newErrors.company_code="Please enter company code."
     if(!formData.product_code) newErrors.product_code="Please enter product code."
     if(!formData.product_company_code) newErrors.product_company_code="Please enter product company code."
     if(!formData.product_name) newErrors.product_name="Please enter product name."
     if(!formData.prod_company_name) newErrors.prod_company_name="Please enter product company name."
     if(!formData.quantity) newErrors.quantity="Please enter product quantity."
     if(!formData.description) newErrors.description="Please enter description."
     if(!formData.unit_price) newErrors.unit_price="Please enter unit price."
     if(!formData.color) newErrors.color="Please select color for this product."
     if(!formData.size) newErrors.size="Please enter size for this product."
     if(!formData.weight) newErrors.weight="Please enter weight for this product."

     setErrors(newErrors)

     return Object.keys(newErrors).length===0
   }

   const handleUpdateProduct = async ()=>{
     if(validateData()){
        setLoading(true)
        try{
            toast.success("Successfully Added.")
        }catch(err){
            console.log(err)
            toast.error("Something went wrong.")
        }
     }
   }
  return (
    <>
    {
       openColorBox &&
       (
        <div className='fixed inset-0 flex justify-center items-center '>
          <div className='p-5 relative border shadow w-1/3 rounded-2xl bg-white'>
          <span onClick={()=>setOpenColorBox(false)} className='absolute cursor-pointer z-50 top-1 right-1 text-red-500'>
            <CircleX></CircleX>
          </span>
          <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />
          </div>
        </div>
       )
    }
    <div className='flex h-full flex-col gap-3 md:gap-4'>
      <div className='bg-white custom-shadow rounded-md md:py-4 py-3 px-3 md:px-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
           <Link to={'/admin/products'}><span className='text-gray-600 cursor-pointer'><ArrowBackIosIcon style={{fontSize:'1.4rem'}}></ArrowBackIosIcon></span></Link>
           <h1 className='text-gray-800 text-base md:text-lg font-medium'>Edit Product</h1>
        </div>
      </div>
      <div className='md:py-6 md:px-4 bg-white rounded-md custom-shadow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 py-3 px-3'>
          
      <div className="col-span-2 bg-white rounded-lg">
      <div className='mb-2'>Select Product Images <span className='text-sm text-red-500'>*</span></div>
      <div
        {...getRootProps()}
        className="border-2 border-dashed p-6 text-center cursor-pointer rounded-lg"
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">Drag & drop images here, or click to select</p>
      </div>

       <div className="mt-4 grid grid-cols-3 md:grid-cols-8 gap-4">
        {files.map((file) => (
          <div key={file.name} className="relative">
            <img
              src={file.preview}
              alt={file.name}
              className="w-24 h-24 object-cover rounded-md shadow"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full"
              onClick={() => removeFile(file.name)}
            >
              ✕
            </button>
          </div>
          ))}
         </div>

         {errors.image && <span className='text-sm text-red-500'>{errors.image}</span>}

         </div>

          <div className='flex flex-col gap-2'>
             <label htmlFor='user_id' className='font-medium text-gray-700'>User <span className='text-red-500'>*</span></label>
             <input name='user_id' onChange={handleChange} type='text' value={formData.user_id} id='user_id' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. jode toe'></input>
             {errors.user_id && <span className='text-sm text-red-400'>{errors.user_id}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='company_code' className='font-medium text-gray-700'>Company Code <span className='text-red-500'>*</span></label>
             <input name='company_code' onChange={handleChange} type='text' value={formData.company_code} id='company_code' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 724242'></input>
             {errors.company_code && <span className='text-sm text-red-400'>{errors.company_code}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='product_code' className='font-medium text-gray-700'>Product Code <span className='text-red-500'>*</span></label>
             <input name='product_code' onChange={handleChange} type='text' value={formData.product_code} id='product_code' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 983242'></input>
             {errors.product_code && <span className='text-sm text-red-400'>{errors.product_code}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='product_name' className='font-medium text-gray-700'>Product Name <span className='text-red-500'>*</span></label>
             <input name='product_name' onChange={handleChange} type='text' value={formData.product_name} id='product_name' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Eyeconic'></input>
             {errors.product_name && <span className='text-sm text-red-400'>{errors.product_name}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='product_company_code' className='font-medium text-gray-700'>Product Company Code <span className='text-red-500'>*</span></label>
             <input name='product_company_code' onChange={handleChange} type='text' value={formData.product_company_code} id='product_company_code' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 287242'></input>
             {errors.product_company_code && <span className='text-sm text-red-400'>{errors.product_company_code}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='prod_company_name' className='font-medium text-gray-700'>Product Company Name <span className='text-red-500'>*</span></label>
             <input name='prod_company_name' onChange={handleChange} type='text' value={formData.prod_company_name} id='prod_company_name' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Lakme'></input>
             {errors.prod_company_name && <span className='text-sm text-red-400'>{errors.prod_company_name}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='quantity' className='font-medium text-gray-700'>Quantity <span className='text-red-500'>*</span></label>
             <input name='quantity' onChange={handleChange} type='number' value={formData.quantity} id='quantity' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 1'></input>
             {errors.quantity && <span className='text-sm text-red-400'>{errors.quantity}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='unit_price' className='font-medium text-gray-700'>Unit Price <span className='text-red-500'>*</span></label>
             <input name='unit_price' onChange={handleChange} type='text' value={formData.unit_price} id='unit_price' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. 200'></input>
             {errors.unit_price && <span className='text-sm text-red-400'>{errors.unit_price}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='color' className='font-medium text-gray-700'>Color <span className='text-red-500'>*</span></label>
             <div onClick={()=>setOpenColorBox(true)}  className='p-2 cursor-pointer outline-none border border-gray-200 flex items-center gap-2'>
                <div style={{backgroundColor:color.hex}} className={'border w-6 h-6 rounded-full'}></div>
                <span>Change Product Color</span>
             </div>
             {errors.color && <span className='text-sm text-red-400'>{errors.color}</span>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor='description' className='font-medium text-gray-700'>Description <span className='text-red-500'>*</span></label>
             <textarea name='description' onChange={handleChange} type='text' value={formData.description} id='unit_price' className='p-2 outline-none border-b-2 border-gray-200' placeholder='Ex. Product Description'></textarea>
             {errors.description && <span className='text-sm text-red-400'>{errors.description}</span>}
          </div>
          <div className='flex place-content-center col-span-2'>
             <button onClick={handleUpdateProduct} className='bg-themeblue flex justify-center items-center p-2 w-1/5 text-white font-medium'>
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
    </>
  )
}

export default EditProduct