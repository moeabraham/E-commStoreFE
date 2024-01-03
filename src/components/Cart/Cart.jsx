import React from 'react';
import "./Cart.scss";
import {useSelector} from "react-redux";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useDispatch} from "react-redux";
import {removeItem, resetCart} from "../../redux/cartReducer"
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

function Cart() {
    const dispatch = useDispatch()
    const products = useSelector(state=> state.cart.products)
    // console.log(products)
    const total = ()=>{
        let total = 0;
        products.forEach((item)=> (total += item.quantity * item.price))
        return total.toFixed(2);
    }
    const stripePromise = loadStripe('pk_test_51NBWz2BPKBdyI1LpahsIzES1waUNXsKBc397hKOOWOYZbl0yif3RoD5doWhH4fFaFzXoipSRpFLBUfZ3NmW21cxu00CUuoy4OD');

    const handlePayment =async ()=> {
        try{
          const stripe =  await stripePromise
          const res = await makeRequest.post("/orders",{
            products
          })
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          })
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='cart'>
        <h1>Products in Your Cart</h1>
        {products?.map((item)=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price"> {item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlineOutlinedIcon className='delete' onClick={()=> dispatch(removeItem(item.id))} />

            </div>
        ) )}
        <div className="total">
            <span>SubTotal</span>
            <span>{total()}</span>
        </div>
        <button className='cartButton' onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart;