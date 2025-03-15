import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

//Importing icons
import SearchIcon from '@mui/icons-material/Search';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import { columns, getAllProduct } from '../data/productDataTable';

function Product() {
    const navigate = useNavigate()
    const [products,setProducts] = useState([])
    const [filterProducts,setFilterProducts] = useState([])
    const [searchQuery,setSearchQuery] = useState('')
    const [loading,setLoading] = useState(false)
    const [openConfirmPopUp,setOpenConfirmPopUp] = useState(false)
    const [selectedId,setSelectedId] = useState(null)

    const handleNavigate = () =>{
       navigate('/admin/products/edit')
    }

    const fetchData = async () =>{
        try{
          setLoading(true)
          const products = await getAllProduct()
          console.log(products)
          setProducts(products.data)
        }catch(err){
          toast.error("Something went wrong while fetching product data.")
        }finally{
          setLoading(false)
        }
    }

    const handleRemoveProduct = async ()=>{

    }

    const handleCloseConfirmPopUp = ()=>{
        setSelectedId(null)
        setOpenConfirmPopUp(false)
    }

    const handleOpenConfirmPopUp = (data) =>{
       setSelectedId(data.id)
       setOpenConfirmPopUp(true)
    }

    useEffect(()=>{
      if(searchQuery){
        setFilterProducts(() => 
          products.filter((p) =>
            Object.values(p).some((value) =>
              value &&
              value.toString().toLowerCase().includes(searchQuery.trim().toLowerCase())
            )
          )
        );  
      }else{
        setFilterProducts(products)
      }
    },[searchQuery,products])

    useEffect(()=>{
     fetchData()
    },[])

  return (
    <>
    {
      openConfirmPopUp && (
       <div className="fixed z-50 flex justify-center items-center inset-0 bg-black/50">
        <div className="bg-white w-96 rounded-md p-4 flex flex-col">
          <h1 className="font-medium text-lg">Confirmation</h1>
          <span>Are you sure to remove this product?</span>
          <div className="w-full mt-4 flex place-content-end gap-2">
             <button onClick={handleCloseConfirmPopUp} className="font-medium text-white rounded-md p-1 w-20 bg-blue-500 hover:bg-blue-600">Cancel</button>
             <button onClick={handleRemoveProduct} className="font-medium text-white rounded-md p-1 w-20 bg-red-500 hover:bg-red-600">Remove</button>
          </div>
         </div>
       </div>
      )
     }
     <div className='flex h-full flex-col gap-3 md:gap-4'>
       <div className='bg-white custom-shadow rounded-md md:py-4 py-3 px-3 flex items-center justify-between'>
         <h1 className='text-gray-600 text-base md:text-lg font-medium'>Product Details</h1>
         <div className='flex items-center gap-3'>
           <div className='bg-gray-100 md:flex p-1.5 rounded-md hidden gap-1 items-center'>
            <span><SearchIcon></SearchIcon></span>
            <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='outline-none bg-transparent' placeholder='Search Product...' type='text'></input>
           </div>
           <span onClick={fetchData} className='cursor-pointer md:w-9 md:h-9 w-8 h-8 border-slate-200 border flex justify-center items-center rounded-md'><AutorenewIcon></AutorenewIcon></span>
           <Link to={'/admin/products/addnew'}><button className='md:p-2 p-1.5 bg-themeblue md:text-base text-sm text-white rounded-md'>Add New Product</button></Link>
         </div>
       </div>
       <div className='h-full py-4 px-3 custom-shadow rounded-md bg-white'>
         <Box sx={{height:"100%",
          '& .super-app-theme--header': {
            backgroundColor: '#edf3fd',
          },}}>
           <DataGrid
            rows={filterProducts}
            columns={columns(handleNavigate,handleOpenConfirmPopUp,)}
            loading={loading}
            initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
           }}
           pageSizeOptions={[5,10]}
           disableRowSelectionOnClick
          />
         </Box>
       </div>
    </div>
    </>
    
  )
}

export default Product