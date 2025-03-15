import api from '../api';
//importing icons
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const formateDate = (dateString)=>{
    const date = new Date(dateString);
  
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', '');
}


export const orderColumn = (handleOpenUpdateData,handleOpenConfirmPopUp) => [
    {
        field: 'orderid',
        headerClassName: 'super-app-theme--header',
        headerName: 'Order Id',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking
    },
    {
        field: 'FirstName',
        headerClassName: 'super-app-theme--header',
        headerName: 'First Name',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking
    },
    {
        field: 'LastName',
        headerClassName: 'super-app-theme--header',
        headerName: 'Last Name',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking
    },
    {
        field: 'username',
        headerClassName: 'super-app-theme--header',
        headerName: 'username',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking
    },
    {
        field: 'Email',
        headerClassName: 'super-app-theme--header',
        headerName: 'Email',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'MobileNumber',
        headerClassName: 'super-app-theme--header',
        headerName: 'Mobile Number',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'City',
        headerClassName: 'super-app-theme--header',
        headerName: 'City',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'State',
        headerClassName: 'super-app-theme--header',
        headerName: 'State',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'GSTNo',
        headerClassName: 'super-app-theme--header',
        headerName: 'GST No',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'orderdate',
        headerClassName: 'super-app-theme--header',
        headerName: 'Order Date',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'OrderStatusText',
        headerClassName: 'super-app-theme--header',
        headerName: 'Order Status',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'InvoiceNo',
        headerClassName: 'super-app-theme--header',
        headerName: 'Invoice No',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'invoicepdfname',
        headerClassName: 'super-app-theme--header',
        headerName: 'Invoice Pdf Name',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'PurchaseAmount',
        headerClassName: 'super-app-theme--header',
        headerName: 'Purchase Amount',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'DiscountAmount',
        headerClassName: 'super-app-theme--header',
        headerName: 'Discount Amount',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'TotalAmount',
        headerClassName: 'super-app-theme--header',
        headerName: 'Total Amount',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'WeeksSinceOrder',
        headerClassName: 'super-app-theme--header',
        headerName: 'Weeks Since Order',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'HoursSinceOrder',
        headerClassName: 'super-app-theme--header',
        headerName: 'Hours Since Order',
        flex: 0.5, // Proportional width
        minWidth: 150, // Minimum width to prevent shrinking   
    },
    {
        field: 'DaysSinceOrder',
        headerClassName: 'super-app-theme--header',
        headerName: 'Days Since Order',
        flex: 0.5, // Proportional width
        minWidth: 180, // Minimum width to prevent shrinking   
    },
    {
        field: 'RemainingHoursInWeek',
        headerClassName: 'super-app-theme--header',
        headerName: 'Remaining Hours In Week',
        flex: 0.5, // Proportional width
        minWidth: 180, // Minimum width to prevent shrinking   
    },
    {
        field: 'RemainingDaysInWeek',
        headerClassName: 'super-app-theme--header',
        headerName: 'Remaining Days In Week',
        flex: 0.5, // Proportional width
        minWidth: 180, // Minimum width to prevent shrinking   
    },
    {
        field: 'action',
        headerClassName: 'super-app-theme--header',
        headerName: 'Action',
        flex: 1.5,
        minWidth: 150,
        renderCell: (params) => (
          <div className="flex gap-3 items-center w-full h-full">
            <button onClick={()=>handleOpenUpdateData(params.row)} className="bg-blue-500 md:text-base text-sm hover:bg-blue-600 flex justify-center items-center rounded-md text-white md:w-10 w-12 h-6 md:h-7">
              <BorderColorOutlinedIcon style={{fontSize:'1.2rem'}}></BorderColorOutlinedIcon>
            </button>
            <button onClick={()=>handleOpenConfirmPopUp(params.row)} className="bg-red-500 md:text-base text-sm hover:bg-red-600 flex justify-center items-center rounded-md text-white md:w-10 w-12 h-6 md:h-7">
              <DeleteOutlineOutlinedIcon style={{fontSize:'1.2rem'}}></DeleteOutlineOutlinedIcon>
            </button>
          </div>
        ),
      },
]


export const getAllOrder = async ()=>{
    try{
        const response = await api.get(`/Order/GetOrderDetails/?user_id=7034`)
        return response.data
    }catch(err){
        throw err
    }
}