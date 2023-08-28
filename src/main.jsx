import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import NewCustomer from './pages/NewCustomer';
import Index from './pages/Index';
import { loader as getInfoLoader } from './loader/loaderGetInfo';
import { loader as editInfoLoader } from './loader/loaderEditInfo';
import { action as newInfoAction } from './action/actionPostCustomer';
import { action as editCustomerAction } from './action/actionPatchCustomer';
import { action as deleteCustomerAction } from './action/actionDeleteCustomer';
import { action as newExpensetAction } from './action/actionPatchWallet';
import { action as editExpenseAction } from './action/actionPatchExpense';
import { action as deleteExpenseAction } from './action/actionDeleteExpense';
import ErrorPage from './pages/ErrorPage';
import ExpensePlanner from './pages/ExpensePlanner';
import EditCustomer from './pages/EditCustomer';







const router = createBrowserRouter([
 { 
  path: '/',
  element: <Layout/>, 
  children:[
    {
      index: true,
      element: <Index/>,
      loader: getInfoLoader,
      errorElement: <ErrorPage/>
    },
    {
      path:'/info/new',
      element: <NewCustomer/>,
      action: newInfoAction,
      errorElement: <ErrorPage/>
    },
    {
      path:'/expense/planner',
      loader: getInfoLoader,
      element: <ExpensePlanner/>
      
    },
    {
      path: '/customer/:id/edit',
      element: <EditCustomer/>,
      loader: editInfoLoader,
      action: editCustomerAction,
      errorElement: <ErrorPage/>

    },
    {
      path: '/customer/:id/delete',
      action: deleteCustomerAction
    },
    {
      path:'/expense/planner/new',
      action: newExpensetAction,
      
    },
    {
      path:'/expense/planner/:customer/edit/:id',
      action: editExpenseAction,
      
    },
    {
      path: '/expense/planner/:customer/delete/:id',
      action: deleteExpenseAction,
    
    }

  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
