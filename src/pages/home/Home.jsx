import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import Track from '../../components/track/Track';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/CartSlice';
import { store } from '../../redux/store';

function Home() {

const dispatch=useDispatch()
const cartItem=useSelector(state=>state.cart)
console.log("CartItem",cartItem);

const addCart=()=>{
    dispatch(addToCart("Shirt"))
}
const deleteCart=()=>{
    dispatch(deleteFromCart("Shirt"))
}

  return (
    <div>
      <Layout>
        {/* <div className="flex justify-center">
            <button className='m-5 bg-gray-300' onClick={addCart}>add</button>
            <button className='bg-gray-300' onClick={deleteCart}>del</button>
        </div> */}
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonial/>
      </Layout>
    </div>
  )
}

export default Home
