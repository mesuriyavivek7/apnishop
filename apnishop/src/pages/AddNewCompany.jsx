import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CAMERA from "../assets/camera.png";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import api from "../api";

//Importing icons
import { LoaderCircle, X } from "lucide-react";


function AddNewCompany() {
  const {user} = useSelector((state)=>state.auth)
  const [formData, setFormData] = useState({
    user_id: user.user_id,
    companyname: "",
    companycode: "",
    GSTNo: "",
    Mobile_No: "",
    Email_id: "",
    password: "",
    newpassword: "",
    company_address: "",
    City_name: "",
    state_name: "",
    refrencecode: "",
    company_img: "none", // Default value
    companylogo: "", // Binary data (empty by default)
  });
  const [preview,setPreview] = useState(null)
  const [errors, setErrors] = useState({});
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseFile = () =>{
    setPreview(null)
    setFormData((prevData)=>({...prevData,"companylogo":""}))
  }

  const handleFileChange = (e) =>{
     const selectedFile = e.target.files[0]
     
     if (selectedFile) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
      
      if (!validTypes.includes(selectedFile.type)) {
        toast.error("Only jpeg, png, jpg, gif files allow.")
        return;
      }

      setFormData((prevData)=>({...prevData,"companylogo":selectedFile}))
      setPreview(URL.createObjectURL(selectedFile)); // Generate preview URL
    }
  }

  const validateData = () =>{
     let newErrors = {}
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


     if(!formData.companyname) newErrors.companyname = 'Company name is required.'
     if(!formData.companycode) newErrors.companycode = 'Company code is required.'
     if(!formData.GSTNo) newErrors.GSTNo = 'Gst no is required.'
     else if(!formData.Mobile_No) newErrors.Mobile_No = 'Mobile no is required.'
     if(formData.Mobile_No.length!==10) newErrors.Mobile_No = 'Mobile no is not valid.'
     if(!formData.Email_id) newErrors.Email_id = 'Email id is required.'
     else if(!emailRegex.test(formData.Email_id)) newErrors.Email_id ='Email id is invalid.'
     if(!formData.password) newErrors.password = 'Password is required.'
     if(!formData.newpassword) newErrors.newpassword = 'New password is required.'
     if(!formData.company_address) newErrors.company_address = 'Company address is required.'
     if(!formData.City_name) newErrors.City_name = 'City name is required.'
     if(!formData.state_name) newErrors.state_name = 'State name is required.' 
     if(!formData.refrencecode) newErrors.refrencecode = 'Reference code is required.'
     if(!formData.companylogo) newErrors.companylogo = 'Company logo is required.'


     setErrors(newErrors)

     return Object.keys(newErrors).length===0

  }


  const handleSubmit = async () =>{
     if(validateData()){
      setLoading(true)

      const filedata = new FormData()

      for (var i in formData){
          if(formData.hasOwnProperty(i) && formData[i]!==undefined){
            filedata.append(i, formData[i])
          }
      }

      try{
         const response = await api.post('/Company/Add',filedata,{
            headers: { "Content-Type": "multipart/form-data" }
          })
         console.log(response)
         toast.success("New company added successfully")
         setFormData({
            user_id: user.user_id,
            companyname: "",
            companycode: "",
            GSTNo: "",
            Mobile_No: "",
            Email_id: "",
            password: "",
            newpassword: "",
            company_address: "",
            City_name: "",
            state_name: "",
            refrencecode: "",
            company_img: "none", // Default value
            companylogo: "", // Binary data (empty by default)
         })
       }catch(err){
         console.log(err)
         toast.error("Something went wrong.")
      }finally{
         setLoading(false)
      }
     }
  }

  return (
    <div className="flex h-full flex-col gap-3 md:gap-4">
      <div className="bg-white custom-shadow rounded-md md:py-4 py-3 px-3 md:px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to={"/admin/company"}>
            <span className="text-gray-600 cursor-pointer">
              <ArrowBackIosIcon style={{ fontSize: "1.4rem" }} />
            </span>
          </Link>
          <h1 className="text-gray-800 text-base md:text-lg font-medium">
            Add New Company
          </h1>
        </div>
      </div>

      <div className="md:py-6 md:px-4 bg-white rounded-md custom-shadow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 py-3 px-3">
        {/* Company Image Upload */}
        <div className="flex items-center gap-4 p-4">
          <div className="flex relative w-32 h-32 border items-center rounded-full justify-center">
            {preview && <X onClick={handleCloseFile} className="absolute w-5 h-5 text-red-500 cursor-pointer top-1 -right-2"></X>}
            <div className="w-full h-full p-2">
              <img className="rounded-full" src={preview?preview:CAMERA} alt="camera" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-gray-700">Upload Company Image</span>
            <input onChange={handleFileChange} accept="image/*"  type="file" id="companylogo" className="hidden" />
            <label
              htmlFor="companylogo"
              className="p-1 hover:bg-blue-800 transition-all w-32 duration-300 bg-themeblue text-white rounded-md cursor-pointer text-center"
            >
              {preview?"Change":"Upload"} Image
            </label>
            {errors.companylogo && <span className="text-sm text-red-500">{errors.companylogo}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-4">
        {/* Form Fields */}
        <div className="flex flex-col gap-2">
          <label htmlFor="companycode" className="font-medium text-gray-700">
            Company Code <span className="text-red-500">*</span>
          </label>
          <input
            name="companycode"
            onChange={handleChange}
            type="text"
            value={formData.companycode}
            id="companycode"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. 65334"
          />
          {errors.companycode && <span className="text-sm text-red-400">{errors.companycode}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="companyname" className="font-medium text-gray-700">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            name="companyname"
            onChange={handleChange}
            type="text"
            value={formData.companyname}
            id="companyname"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. Lakme"
          />
          {errors.companyname && <span className="text-sm text-red-400">{errors.companyname}</span>}
        </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Email_id" className="font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            name="Email_id"
            onChange={handleChange}
            type="email"
            value={formData.Email_id}
            id="Email_id"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. a@example.com"
          />
          {errors.Email_id && <span className="text-sm text-red-400">{errors.Email_id}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Mobile_No" className="font-medium text-gray-700">
            Mobile No <span className="text-red-500">*</span>
          </label>
          <input
            name="Mobile_No"
            onChange={handleChange}
            type="text"
            value={formData.Mobile_No}
            id="Mobile_No"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. 75343432"
          />
          {errors.Mobile_No && <span className="text-sm text-red-400">{errors.Mobile_No}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-medium text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            value={formData.password}
            id="password"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. ****"
          />
          {errors.password && <span className="text-sm text-red-400">{errors.password}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="GSTNo" className="font-medium text-gray-700">
            GST No <span className="text-red-500">*</span>
          </label>
          <input
            name="GSTNo"
            onChange={handleChange}
            type="text"
            value={formData.GSTNo}
            id="GSTNo"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. 27AAAPA1234A1Z5"
          />
          {errors.GSTNo && <span className="text-sm text-red-400">{errors.GSTNo}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company_address" className="font-medium text-gray-700">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            name="company_address"
            onChange={handleChange}
            type="text"
            value={formData.company_address}
            id="company_address"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. 3/b Sterling Park"
          />
          {errors.company_address && <span className="text-sm text-red-400">{errors.company_address}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="City_name" className="font-medium text-gray-700">
            City <span className="text-red-500">*</span>
          </label>
          <input
            name="City_name"
            onChange={handleChange}
            type="text"
            value={formData.City_name}
            id="City_name"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. Ahmedabad"
          />
          {errors.City_name && <span className="text-sm text-red-400">{errors.City_name}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="state_name" className="font-medium text-gray-700">
            State <span className="text-red-500">*</span>
          </label>
          <input
            name="state_name"
            onChange={handleChange}
            type="text"
            value={formData.state_name}
            id="state_name"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. Ahmedabad"
          />
          {errors.state_name && <span className="text-sm text-red-400">{errors.state_name}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="newpassword" className="font-medium text-gray-700">
            New password <span className="text-red-500">*</span>
          </label>
          <input
            name="newpassword"
            onChange={handleChange}
            type="text"
            value={formData.newpassword}
            id="newpassword"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. ****"
          />
          {errors.newpassword && <span className="text-sm text-red-400">{errors.newpassword}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="refrencecode" className="font-medium text-gray-700">
            Reference Code <span className="text-red-500">*</span>
          </label>
          <input
            name="refrencecode"
            onChange={handleChange}
            type="text"
            value={formData.refrencecode}
            id="refrencecode"
            className="p-2 outline-none border-b-2 border-gray-200"
            placeholder="Ex. 846464"
          />
          {errors.refrencecode && <span className="text-sm text-red-400">{errors.refrencecode}</span>}
        </div>


        <div className="col-span-1 md:col-span-2 flex place-content-center">
           <button onClick={handleSubmit} className="text-white w-36 hover:bg-blue-800 transition-all duration-300 bg-themeblue p-2 rounded-md">
              {
               loading ? 
               <div className="flex items-center gap-2">
                   <LoaderCircle className="animate-spin"></LoaderCircle>
                   <span>...Loading</span>
               </div>:
               <span>Submit</span>
              } 
            </button>
        </div>


      </div>
    </div>
  );
}

export default AddNewCompany;
