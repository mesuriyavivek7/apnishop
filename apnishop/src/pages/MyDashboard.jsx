import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import api from '../api';

//Importing icons
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import { latestProductColumns } from '../data/productDataTable';
// import { latestColumns, fetchAllUsers } from '../data/EmployeeDataTable';
import { Link } from 'react-router-dom';

export default function MyDashboard() {

  const [doctorsCount,setDoctorsCount] = useState(0)
  const [chemistCount,setChemistCount] = useState(0)
  const [productCount,setProductCount] = useState(0)

  // const fetchCounts = async ()=>{
  //    try{
  //       const [doctorsResponse, chemistResponse] = await Promise.all([
  //         api.get('/Doctor/GetAllDoctor'),
  //         api.get('/Chemist/GetAllChemist')
  //       ])
  //       setDoctorsCount(doctorsResponse.data.data.length)
  //       setChemistCount(chemistResponse.data.data.length)
  //    }catch(err){
  //      console.log(err)
  //      toast.error("Something went wrong.")
  //    }
  // }

  const [employee,setEmployee] = useState([])
  const [loading,setLoading] = useState(false)

    
//   const getEmployeeData = async ()=>{
//     try{
//      setLoading(true)
//      const data = await fetchAllUsers()
//      setEmployee(data.map((item,index)=>({...item,id:index+1}))?.slice(0,5))
//     }catch(err){
//      console.log(err)
//      toast.error(err.response.data.message || "Something went wrong.")
//     }finally{
//      setLoading(false)
//     }
//  }

//  useEffect(()=>{
//   //  getEmployeeData()
//    fetchCounts()
//  },[])

  return (
  <div className='flex h-full flex-col gap-4'>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
      <div className='flex custom-shadow p-4 bg-white  rounded-lg flex-col gap-2'>
         <h1 className='text-lg text-gray-600'>PRODUCTS</h1>
         <span className='text-2xl'>{doctorsCount}</span>
         <div className='flex justify-between items-center'>
            <Link to={'/admin/products'}><span className='underline cursor-pointer'>See all products</span></Link>
            <span className='bg-themeblue text-white w-10 h-10 flex justify-center items-center rounded-md'><Inventory2OutlinedIcon style={{fontSize:'1.8rem'}}></Inventory2OutlinedIcon></span>
         </div>
      </div>
      <div className='flex p-4 bg-white custom-shadow rounded-lg flex-col gap-2'>
         <h1 className='text-lg text-gray-600'>COMPANY</h1>
         <span className='text-2xl'>{chemistCount}</span>
         <div className='flex justify-between items-center'>
            <Link to={'/admin/company'}><span className='underline cursor-pointer'>See all company</span></Link>
            <span className='bg-themeblue text-white w-10 h-10 flex justify-center items-center rounded-md'><StoreOutlinedIcon style={{fontSize:'1.8rem'}}></StoreOutlinedIcon></span>
         </div>
      </div>
      <div className='flex p-4 bg-white custom-shadow rounded-lg flex-col gap-2'>
         <h1 className='text-lg text-gray-600'>USERS</h1>
         <span className='text-2xl'>120</span>
         <div className='flex justify-between items-center'>
            <Link to={'/admin/users'}><span className='underline cursor-pointer'>See all users</span></Link>
            <span className='bg-themeblue text-white w-10 h-10 flex justify-center items-center rounded-md'><GroupOutlinedIcon style={{fontSize:'1.8rem'}}></GroupOutlinedIcon></span>
         </div>
      </div>
    </div>
    <div className="h-full flex flex-col gap-2 py-4 px-3 custom-shadow rounded-md bg-white">
        <h1 className='font-medium text-lg'>New Products</h1>
        <Box
          sx={{
            height: "100%",
            "& .super-app-theme--header": {
              backgroundColor: "#edf3fd",
            },
          }}
        >
          <DataGrid
            rows={employee}
            columns={latestProductColumns()}
            loading={loading}
            pagination={false}
            disableRowSelectionOnClick
          />
        </Box>

    </div>
  </div>
    
  )
}
