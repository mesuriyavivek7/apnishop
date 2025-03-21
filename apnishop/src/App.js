import React, { useEffect } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { loginStart, loginFailure } from "./redux/actions/authActions";
import axios from 'axios'

//importing General components
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

//Importing Admin dashboard components
import Dashboard from "./components/Admin/Dashboard";

//Importing General Components
import MyDashboard from "./pages/MyDashboard";
import Product from "./pages/Product";
import Company from "./pages/Company";
import AddNewProduct from "./pages/AddNewProduct";
import EditProduct from "./pages/EditProduct";
import AddNewCompany from "./pages/AddNewCompany";
import AddUser from "./pages/AddUser";
import User from "./pages/User";
import OrderDetails from "./pages/OrderDetails";
import Order from "./pages/Order";
import Profile from "./pages/Profile";

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  const { user, api_token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  //Set bearer token
  useEffect(()=>{
     const token = api_token
     if(token){
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     }
  },[user])

  //vallidate user 
  // useEffect(()=>{
  //   const validateUser = async () =>{
  //      dispatch(loginStart())
  //      try{
  //         await axios.post(`${process.env.REACT_APP_API_BASE_URL}/User/verify_token`,{api_token:api_token})
  //      }catch(err){
  //        console.log(err)
  //        dispatch(loginFailure("Validation failed"))
  //      }
  //   }
  //   validateUser()
  // },[dispatch])

  const AppRouter = createBrowserRouter(
    [
      {
        path:'/',
        element: !user ? (
          <Login/>
        ) : (
          <Navigate to={`/admin/dashboard/`} />
        ),
      },
      {
        path:'/forget-password',
        element: !user ? (
          <ForgetPassword/>
        ) : (
          <Navigate to={`/admin/dashboard/`}/>
        )
      },
      {
        path:'/reset-password',
        element: !user ? (
          <ResetPassword/>
        ) : (
          <Navigate to={`/admin/dashboard/`}/>
        )
      },
      {
        path:'/admin',
        element:(
          <ProtectedRoute>
            <Dashboard></Dashboard>
          </ProtectedRoute>
          
        ),
        children:[
          {
            path:'dashboard',
            element:(  
              <ProtectedRoute>
                <MyDashboard></MyDashboard>
              </ProtectedRoute>
            )
          },
          {
            path:'products',
            element:(
              <ProtectedRoute>
                <Product></Product>
              </ProtectedRoute>
            ) 
          },
          {
            path:'products/addnew',
            element:(
              <ProtectedRoute>
              <AddNewProduct></AddNewProduct>
              </ProtectedRoute>
            )
          },
          {
            path:'products/edit',
            element:(
              <ProtectedRoute>
              <EditProduct></EditProduct>
              </ProtectedRoute>
            )
          },
          {
            path:'company',
            element:(
              <ProtectedRoute>
                <Company></Company>
              </ProtectedRoute>
            )
          },
          {
            path:'company/addnew',
            element:(
              <ProtectedRoute>
                <AddNewCompany></AddNewCompany>
              </ProtectedRoute>
            )
          },
          {
            path:'users',
            element:(
              <ProtectedRoute>
                <User></User>
              </ProtectedRoute>
            )
          },
          {
            path:'users/addnew',
            element:(
              <ProtectedRoute>
                <AddUser></AddUser>
              </ProtectedRoute>
            )
          },
          {
            path:"orders",
            element:(
              <ProtectedRoute>
                 <Order></Order>
              </ProtectedRoute>
            ) 
          },
          {
            path:'orders/orderdetails',
            element:(
              <ProtectedRoute>
                <OrderDetails></OrderDetails>
              </ProtectedRoute>
            )
          },
          {
            path:'profile',
            element:(
              <ProtectedRoute>
                <Profile></Profile>
              </ProtectedRoute>
            )
          }
          
        ]
      },
    ]
  )
  return (
    <div className="max-w-[100vw] max-h-screen">
       <ToastContainer></ToastContainer>
       <RouterProvider router={AppRouter}></RouterProvider>
     </div>

  );
}

export default App;
