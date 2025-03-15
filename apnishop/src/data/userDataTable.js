import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import api from '../api';



const formateDate = (dateString)=>{
    const date = new Date(dateString);
  
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', '');
}

export const userColumns = (handleOpenConfirmPopUp,handleNavigate)=>[
    {
        field: 'userid',
        headerClassName: 'super-app-theme--header',
        headerName: 'User Id',
        flex: 1,
        minWidth: 120,
      },
      {
        field: 'FirstName',
        headerClassName: 'super-app-theme--header',
        headerName: 'Name',
        flex: 1,
        minWidth: 150,
      },
      {
        field: 'Email',
        headerClassName: 'super-app-theme--header',
        headerName: 'Email',
        flex: 1,
        minWidth: 200,
      },
      {
        field: 'MobileNumber',
        headerClassName: 'super-app-theme--header',
        headerName: 'MobileNumber',
        flex: 1,
        minWidth: 150,
      },
      {
        field: 'City',
        headerClassName: 'super-app-theme--header',
        headerName: 'City',
        flex: 1,
        minWidth: 150,
      },
      {
        field: 'State',
        headerClassName: 'super-app-theme--header',
        headerName: 'State',
        flex: 1,
        minWidth: 150,
      },
      {
        field: 'GSTNo',
        headerClassName: 'super-app-theme--header',
        headerName: 'GST No',
        flex: 1,
        minWidth: 180,
      },
      {
        field: 'isActive',
        headerClassName: 'super-app-theme--header',
        headerName: 'Status',
        flex: 1,
        minWidth: 150,
        renderCell:(params)=>(
            <span className={`${params.value==1?"bg-green-500":"bg-red-500"} text-white p-1 rounded-md`}>{params.value==1?'Active':"Inactive"}</span>
        )
      },
      {
        field: 'AppCmpMapID',
        headerClassName: 'super-app-theme--header',
        headerName: 'AppCmpMapID',
        flex: 1,
        minWidth: 150,
      },
      {
        field: 'CmpID',
        headerClassName: 'super-app-theme--header',
        headerName: 'CmpID',
        flex: 1,
        minWidth: 150,
      },
      {
        field: 'company_name',
        headerClassName: 'super-app-theme--header',
        headerName: 'Company Name',
        flex: 1,
        minWidth: 160,
      },
      {
        field: 'RegistrationDate',
        headerClassName: 'super-app-theme--header',
        headerName: 'Registration Date',
        flex: 1,
        minWidth: 150,
        renderCell:(params)=>(
            <span>{formateDate(params.value)}</span>
        )
      },
      {
        field: 'RenewalDate',
        headerClassName: 'super-app-theme--header',
        headerName: 'Renewal Date',
        flex: 1,
        minWidth: 150,
        renderCell:(params)=>(
            <span>{formateDate(params.value)}</span>
        )
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
  
export const getAllUsers = async ()=>{
  try{
    const response = await api.get(`/User/GetMobileUserDataDetails?CompanyCode=7034`)
    return response.data
  }catch(err){
    throw err
  }
}


//Custom data
export const userData = [
     { 
        id:1,
        userid:"123",
        FirstName:"Dhruv Patel",
        Email:"dhruvpatel12@gmail.com",
        MobileNumber:"8624232322",
        City:"Ahmedabad",
        State:"Gujarat",
        GSTNo:"HDG253434243",
        isActive:"1",
        AppCmpMapID:"908",
        CmpID:"202",
        company_name:"Lakme",
        RegistrationDate:"2024-02-28T12:00:00Z",
        RenewalDate:"2024-02-28T12:00:00Z"
     },

]