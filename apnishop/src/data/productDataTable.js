//importing icons
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import api from '../api';

const formateDate = (dateString)=>{
    const date = new Date(dateString);
  
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', '');
}



export const columns = (handleNavigate, handleOpenConfirmPopUp) =>[
    {
        field: 'id',
        headerClassName: 'super-app-theme--header',
        headerName: 'Id',
        flex: 1,
        minWidth: 120,
    },
    {
       field: 'imagedata',
       headerClassName:'super-app-theme--header',
       headerName:'Product Image',
       flex:1,
       minWidth:150,
       renderCell:(params)=>(
         <img src={params.value} className='w-10 h-10' alt={params.row.id}></img>
       )
    },
    {
        field: 'product_code',
        headerClassName: 'super-app-theme--header',
        headerName: 'Product Code',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'product_name',
        headerClassName: 'super-app-theme--header',
        headerName: 'Product Name',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'company_code',
        headerClassName: 'super-app-theme--header',
        headerName: 'Company Code',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'product_company_code',
        headerClassName: 'super-app-theme--header',
        headerName: 'Product Company Code',
        flex: 1,
        minWidth: 180,
    },
    {
        field: 'prod_company_name',
        headerClassName: 'super-app-theme--header',
        headerName: 'Product Company Name',
        flex: 1,
        minWidth: 180,
    },
    {
        field: 'user_id',
        headerClassName: 'super-app-theme--header',
        headerName: 'User Id',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'quantity',
        headerClassName: 'super-app-theme--header',
        headerName: 'Quantity',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'unit_price',
        headerClassName: 'super-app-theme--header',
        headerName: 'Unit Price',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'description',
        headerClassName: 'super-app-theme--header',
        headerName: 'Desciption',
        flex: 1,
        minWidth: 180,
    },
    {
        field: 'color',
        headerClassName: 'super-app-theme--header',
        headerName: 'Color',
        flex: 1,
        minWidth: 150,
        renderCell:(params)=>(
            <div className='w-full h-full flex items-center gap-2'>
                <span style={{backgroundColor:params.value}} className='w-5 h-5 rounded-full'></span>
                <span>{params.value}</span>
            </div>
        )
    },
    {
        field: 'size',
        headerClassName: 'super-app-theme--header',
        headerName: 'Size',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'weight',
        headerClassName: 'super-app-theme--header',
        headerName: 'Weight',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'action',
        headerClassName: 'super-app-theme--header',
        headerName: 'Action',
        flex: 1.5,
        minWidth: 200,
        renderCell: (params) => (
          <div className="flex gap-3 items-center w-full h-full">
            <button onClick={()=>handleNavigate(params.row)} className="bg-blue-500 md:text-base text-sm hover:bg-blue-600 flex justify-center items-center rounded-md text-white md:w-10 w-12 h-6 md:h-7">
              <BorderColorOutlinedIcon style={{fontSize:'1.2rem'}}></BorderColorOutlinedIcon>
            </button>
            <button onClick={()=>handleOpenConfirmPopUp(params.row)} className="bg-red-500 md:text-base text-sm hover:bg-red-600 flex justify-center items-center rounded-md text-white md:w-10 w-12 h-6 md:h-7">
              <DeleteOutlineOutlinedIcon style={{fontSize:'1.2rem'}}></DeleteOutlineOutlinedIcon>
            </button>
          </div>
        ),
      },

]


//Custom data

export const productData = [
   {
     id:'12',
     user_id:'123',
     company_code:'542',
     product_code:'752',
     product_company_code:'PD1136',
     product_name:'eyeconic',
     prod_company_name:'LAKME',
     quantity:'1',
     unit_price:350,
     description:'hey we are',
     color:'#28c981',
     size:12,
     weight:350
   }
]

export const getAllProduct = async () =>{
    try{
       const response = await api.get('/Product/GetProductDetails?user_id=7034&productcode=7034')
       return response.data
    }catch(err){
        throw err
    }
}


//latest products

export const latestProductColumns = () =>[
    {
        field: 'id',
        headerClassName: 'super-app-theme--header',
        headerName: 'Id',
        flex: 1,
        minWidth: 120,
    },
    {
        field: 'product_code',
        headerClassName: 'super-app-theme--header',
        headerName: 'Product Code',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'product_name',
        headerClassName: 'super-app-theme--header',
        headerName: 'Product Name',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'company_code',
        headerClassName: 'super-app-theme--header',
        headerName: 'Company Code',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'product_company_code',
        headerClassName: 'super-app-theme--header',
        headerName: 'Product Company Code',
        flex: 1,
        minWidth: 180,
    },
    {
        field: 'prod_company_name',
        headerClassName: 'super-app-theme--header',
        headerName: 'Product Company Name',
        flex: 1,
        minWidth: 180,
    },
    {
        field: 'user_id',
        headerClassName: 'super-app-theme--header',
        headerName: 'User Id',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'quantity',
        headerClassName: 'super-app-theme--header',
        headerName: 'Quantity',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'unit_price',
        headerClassName: 'super-app-theme--header',
        headerName: 'Unit Price',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'description',
        headerClassName: 'super-app-theme--header',
        headerName: 'Desciption',
        flex: 1,
        minWidth: 180,
    },
    {
        field: 'color',
        headerClassName: 'super-app-theme--header',
        headerName: 'Color',
        flex: 1,
        minWidth: 150,
        renderCell:(params)=>(
            <div className='w-full h-full flex items-center gap-2'>
                <span style={{backgroundColor:params.value}} className='w-5 h-5 rounded-full'></span>
                <span>{params.value}</span>
            </div>
        )
    },
    {
        field: 'size',
        headerClassName: 'super-app-theme--header',
        headerName: 'Size',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'weight',
        headerClassName: 'super-app-theme--header',
        headerName: 'Weight',
        flex: 1,
        minWidth: 150,
    },
]