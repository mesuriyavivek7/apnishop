//importing icons
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import api from '../api';

const formateDate = (dateString)=>{
  const date = new Date(dateString);

  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options).replace(',', '');
}


export const columns = (handleOpenConfirmPopUp,handleNavigate)=>[
    {
      field: 'id',
      headerClassName: 'super-app-theme--header',
      headerName: 'Id',
      flex: 1,
      minWidth: 120,
    },
    {
      field: 'company_code',
      headerClassName: 'super-app-theme--header',
      headerName: 'Company Code',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'company_name',
      headerClassName: 'super-app-theme--header',
      headerName: 'Company',
      flex: 1,
      minWidth: 160,
    },
    {
      field: 'gst_no',
      headerClassName: 'super-app-theme--header',
      headerName: 'Gst No',
      flex: 1,
      minWidth: 180,
    },
    {
      field:'mail_id',
      headerClassName: 'super-app-theme--header',
      headerName: 'Mail id',
      flex: 0.8,
      minWidth: 180,
    },
    {
      field:'mobile_no',
      headerClassName: 'super-app-theme--header',
      headerName: 'Mobile No',
      flex: 0.8,
      minWidth: 160,
    },
    {
      field: 'company_address',
      headerClassName: 'super-app-theme--header',
      headerName: 'Address',
      flex: 0.8,
      minWidth: 180,
    },
    {
      field: 'city_name',
      headerClassName: 'super-app-theme--header',
      headerName: 'City',
      flex: 0.8,
      minWidth: 150,
    },
    {
      field: 'state_name',
      headerClassName: 'super-app-theme--header',
      headerName: 'State',
      flex: 0.8,
      minWidth: 150,
    },
    {
      field:'PinCode',
      headerClassName: 'super-app-theme--header',
      headerName: 'PinCode',
      flex: 0.8,
      minWidth: 150,
    },
    {
      field:'Country',
      headerClassName: 'super-app-theme--header',
      headerName: 'Country',
      flex: 0.8,
      minWidth: 150,
    },
    {
      field:'Email_id',
      headerClassName: 'super-app-theme--header',
      headerName: 'Email id',
      flex: 0.8,
      minWidth: 160,
    },
    {
      field:'RegistrationDate',
      headerClassName: 'super-app-theme--header',
      headerName: 'Registration Date',
      flex: 0.8,
      minWidth: 180,
    }, 
    {
      field:'RenewalDate',
      headerClassName: 'super-app-theme--header',
      headerName: 'Renewal Date',
      flex: 0.8,
      minWidth: 180,
    }, 
    {
      field:'PaymentStatus',
      headerClassName: 'super-app-theme--header',
      headerName: 'Payment Status',
      flex: 0.8,
      minWidth: 160,
      renderCell:(params)=>(
        <div className='flex justify-center w-full h-full items-center'>
          <span className={`${params.value==="Y"?"bg-green-500":"bg-red-500"} h-8 w-20 text-white font-semibold flex justify-center rounded-md items-center`}>{params.value}</span>
        </div>
      )
    },
    {
      field:'referencecode',
      headerClassName: 'super-app-theme--header',
      headerName: 'Reference Code',
      flex: 0.8,
      minWidth: 160,
    },
    {
      field:'created_by',
      headerClassName: 'super-app-theme--header',
      headerName: 'Created By',
      flex: 0.8,
      minWidth: 160,
    },
    {
      field:'created_date',
      headerClassName: 'super-app-theme--header',
      headerName: 'Created Date',
      flex: 0.8,
      minWidth: 160,
    },
    {
      field:'created_host',
      headerClassName: 'super-app-theme--header',
      headerName: 'Created Host',
      flex: 0.8,
      minWidth: 160,
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
  ];


export const companyData = [
  {
    id:'123',
    company_code:'2345',
    company_name:'Adani',
    gst_no:'65e5vvffvfvf55d',
    mail_id:'a@example.com',
    mobile_no:'8736353532',
    company_address:'Borivali Mumbai',
    city_name:'Mumbai',
    state_name:'Maharastra',
    PinCode:'752424',
    Country:'India',
    Email_id:'b@example.com',
    RegistrationDate:'2025-02-25T10:00:00.000Z',
    RenewalDate:"2025-02-25T10:00:00.000Z",
    PaymentStatus:"No",
    referencecode:"75454",
    created_by:'5343',
    created_date:'2025-02-25T10:00:00.000Z',
    created_host:'103.86.19.214'
  }
]


export const getCompanyData = async (req, res, next) =>{
  try{
    const response = await api.get('/User/GetCompanyDetailsUserWise?user_id=7034')
    return response.data
  }catch(err){
    throw err
  }
}


// export const getDoctors = async ()=>{
//   try{
//     const response = await api.get(`/Doctor/GetAllDoctor`)
//     console.log(response.data.data)
//     return response.data.data
//   }catch(err){
//    throw err
//   }
// }