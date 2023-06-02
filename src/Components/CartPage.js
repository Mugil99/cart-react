import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart,checkout } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";

const CartPage=()=>{
    const {cart}=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    let navigate=useNavigate();
    const totalPrice=cart.reduce((total,product)=>total+product.price,0)
   
    return(
        <div>
          <div className="container">  
            {
               cart.map(item=>(
                <div key={item.id}>
                   <h3>{item.title}</h3>
                   <img src={item.thumbnail} alt={item.title} style={{width:"200px"}}/> 
                            <p><strong>Description:</strong>{item.description}</p>
                            <p><strong>₹{item.price}</strong></p>
                            <button
                              onClick = {() => dispatch(removeFromCart(item.id))}
                            >Remove From Cart</button>
                           
                </div>
                
               ))
            }
            </div>
            <h2>Total Price: {totalPrice}</h2>
            <button onClick={()=>{dispatch(checkout()) }} style={{margin:"5px"}}>Checkout</button>
            <button onClick={()=>navigate('/cart-react')} style={{margin:"5px"}}>Homepage</button>
        
        </div>
    )
}
export default CartPage;