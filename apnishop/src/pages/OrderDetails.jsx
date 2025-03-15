import React from 'react'

//Importing icons
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

//Importing images
import CARD from '../assets/credit-card.png'
import EXPRESS from '../assets/express-delivery.png'
import BOX from '../assets/box.png'
import SHAMPOO from '../assets/shampoo.jpg'

function OrderDetails() {
  return (
    <div className='flex flex-col gap-4'>
         <div className='bg-white custom-shadow p-4 flex flex-col gap-4 rounded-md'>
            <h1 className='text-lg font-medium'>Order Details (Order #51)</h1>
            <div className='flex w-full flex-col mt-2 gap-3'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-2'>
                      <span className='text-gray-500'><CalendarTodayOutlinedIcon style={{fontSize:'1.3rem'}}></CalendarTodayOutlinedIcon></span>
                      <span className='text-gray-600 font-medium'>Order Date</span>
                    </div>
                    <span className='font-medium text-gray-500'>10-07-2024 10:44:52</span>
                </div>
                <hr></hr>
                <div className='flex justify-between items-start'>
                 <div className='flex items-center gap-2'>
                      <span className='text-gray-500'><EditNoteOutlinedIcon style={{fontSize:'1.6rem'}}></EditNoteOutlinedIcon></span>
                      <span className='text-gray-600 font-medium'>Remark</span>
                 </div>
                 <span className='font-medium text-gray-500'>Cashback Offer</span>
                </div>
            </div>
         </div>
         <div className='grid grid-cols-3 items-center gap-4'>
           <div className='p-4 bg-white custom-shadow rounded-md flex flex-col gap-2'>
              <h1 className='font-semibold text-lg'>Your Company Address</h1>
              <div className='grid grid-cols-2 items-center gap-6'>
                 <div className='flex flex-col gap-4'>
                   <p className='text-sm text-gray-600 font-medium'>COSMETIC INDUSTRY 5 - BYOGESS ARPARKSOS Ahmedabad India</p>
                   <p className='text-sm text-gray-600 font-medium'>GST No. alhipt7589363 <br></br> Mobile No: 9090273736</p>
                 </div>
                 <div className='p-1'>
                    <img src={CARD} className='h-36 opacity-25' alt='card'></img>
                 </div>
              </div>
           </div>
           <div className='p-4 bg-white custom-shadow rounded-md flex flex-col gap-2'>
              <h1 className='font-semibold text-lg'>Billing Address</h1>
              <div className='grid grid-cols-2 items-center gap-6'>
                 <div className='flex flex-col gap-4'>
                   <p className='text-sm text-gray-600 font-medium'>Info Services A - 112, xyz Ahmedabad Gujarat 123456 Gst No.</p>
                   <p className='text-sm text-gray-600 font-medium'>Mobile Number: 8265343432</p>
                 </div>
                 <div className='p-1'>
                    <img src={BOX} className='h-36 opacity-25' alt='card'></img>
                 </div>
              </div>
           </div>
           <div className='p-4 bg-white custom-shadow rounded-md flex flex-col gap-2'>
              <h1 className='font-semibold text-lg'>Shipping Address</h1>
              <div className='grid grid-cols-2 items-center gap-6'>
                 <div className='flex flex-col gap-4'>
                   <p className='text-sm text-gray-600 font-medium'>ABC A - 112, xyz Ahmedabad Gujarat 123456 Gst No.</p>
                   <p className='text-sm text-gray-600 font-medium'>Mobile Number: 8265343432</p>
                 </div>
                 <div className='p-1'>
                    <img src={EXPRESS} className='h-36 opacity-25' alt='card'></img>
                 </div>
              </div>
           </div>
         </div>
         <div className='p-4 bg-white custom-shadow rounded-md flex flex-col gap-4'>
            <h1 className='text-lg font-medium'>Order Details (Order# 51)</h1>
            <div className='flex flex-col gap-2'>
                 <div className='p-4 flex place-content-end'>
                     <h1 className='font-medium text-themeblue text-lg'>Order Accepted</h1>
                 </div>
                 {/* For Table headers */}
                 <div className='flex px-4 items-center'>
                    <div className='w-1/2'>
                        <h1 className='font-semibold'>Product </h1>
                    </div>
                    <div className='w-1/2 grid grid-cols-4'>
                        <h1 className='font-semibold text-end'>Qty</h1>
                        <h1 className='font-semibold text-end'>Unit Price</h1>
                        <h1 className='font-semibold text-end'>Discount</h1>
                        <h1 className='font-semibold text-end'>Total</h1>
                    </div>
                 </div>
                 {/* For Products */}
                 <div className='flex px-4 items-center'>
                    <div className='w-1/2'>
                       <div className='flex gap-2 items-center'>
                          <img src={SHAMPOO} className='w-16 border rounded-md h-16' alt='productimage'></img>
                          <div className='flex flex-col '>
                            <h1 className='text-sm text-gray-600 font-semibold'>SHAMPOO HEARNAND SHOPDER, product code: asdd</h1>
                            <span className='text-sm text-gray-500 font-semibold'>Product Company Name: Lakme</span>
                          </div>
                       </div>
                    </div>
                    <div className='w-1/2 grid grid-cols-4'>
                        <h1 className='font-smibold text-end text-gray-600'>2</h1>
                        <h1 className='font-smibold text-end text-gray-600'>150.00</h1>
                        <h1 className='font-smibold text-end text-gray-600'>0.00</h1>
                        <h1 className='font-semibold text-end text-gray-600'>300.00</h1>
                    </div>
                 </div>
                 {/* For Billing Summary */}
                 <div className='flex mt-4 flex-col'>
                 <div className='flex p-4 border-t place-content-end'>
                    <div className='w-1/4 grid grid-cols-2 items-center'>
                        <span className='text-end text-gray-500'>Subtotal</span>
                        <span className='text-end text-gray-500'>300.00</span>
                    </div>
                 </div>
                 <div className='flex p-4 border-t place-content-end'>
                    <div className='w-1/4 grid grid-cols-2 items-center'>
                        <span className='text-end text-gray-500'>Discount Amount</span>
                        <span className='text-end text-gray-500'>34.00</span>
                    </div>
                 </div>
                 <div className='flex p-4 border-t place-content-end'>
                    <div className='w-1/4 grid grid-cols-2 items-center'>
                        <span className='text-end font-semibold text-gray-800'>Total</span>
                        <span className='text-end font-semibold text-gray-800'>266.00</span>
                    </div>
                 </div>
                 <div className='flex p-4 border-t place-content-end'>
                    <div className='w-1/4 grid grid-cols-2 items-center'>
                        <span className='text-end text-gray-500'>Other Expense</span>
                        <span className='text-end text-gray-500'>300.00</span>
                    </div>
                 </div>
                 <div className='flex p-4 border-t place-content-end'>
                    <div className='w-1/4 grid grid-cols-2 items-center'>
                        <span className='text-end font-semibold text-gray-800'>Grand Total</span>
                        <span className='text-end font-semibold text-gray-800'>566.00</span>
                    </div>
                 </div>
                 </div>
            </div>
         </div>
         <div className='bg-white overflow-hidden custom-shadow flex flex-col rounded-md'>
             <div className='bg-purple p-4 flex items-center justify-between'>
               <h1 className='text-lg font-semibold text-white'>Discount</h1>
               <span className='text-lightgray'>Order Accepted</span>
             </div>
             <div className='p-4 flex flex-col gap-4'>
               <div className='flex w-72 flex-col gap-2'>
                 <label className='font-semibold'>Discount Type</label>
                 <select className='border p-1 rounded-md outline-none'>
                    <option value={''}>--- Select Discount Type ----</option>
                 </select>
               </div>
               <div className='flex w-72 flex-col gap-2'>
                 <label className='font-semibold'>Other Expense / Courier</label>
                 <input type='text' placeholder='Other Expenses' className='border p-1 rounded-md outline-none'></input>
               </div>
             </div>
         </div>
    </div>
  )
}

export default OrderDetails