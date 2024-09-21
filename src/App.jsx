import React from 'react'
import { Navigate, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import NoPage from './pages/nopage/NoPage'
import MyState from './context/data/MyState'
import Signup from './pages/registration/Signup'
import Login from './pages/registration/Login'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MyState>
    <Router>
      <Routes>
      {/* <Route path='/' element={<Login/>} /> */}
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/productinfo/:id' element={<ProductInfo/>} />
      <Route path='/order' element={
        <ProtectedRoute>
          <Order/>
        </ProtectedRoute>
      } />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/addproduct' element={
        <ProtectedRouteForAdmin>
          <AddProduct/>
        </ProtectedRouteForAdmin>
      } />
      <Route path='/updateproduct' element={
        <ProtectedRouteForAdmin>
          <UpdateProduct/>
        </ProtectedRouteForAdmin>
      } />
      <Route path='/dashboard' element={
        <ProtectedRouteForAdmin>
          <Dashboard/>
        </ProtectedRouteForAdmin>
      } />
      <Route path='/*' element={<NoPage/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App

// user protected route
export const ProtectedRoute=({children})=>{
    const user=JSON.parse(localStorage.getItem('user'))
    if(user){
      return children
    }else{
      return <Navigate to='/login'/>
    }
}

// admin protected route
export const ProtectedRouteForAdmin=({children})=>{
  const admin=JSON.parse(localStorage.getItem('user'))
  if(admin.user.email==='tanishasaxena2412@gmail.com'){
    return children
  }else{
    return <Navigate to='/login'/>
  }
}