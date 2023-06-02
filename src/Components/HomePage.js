import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/apiActions";
import { addToCart } from "../redux/actions/cartActions";
import {useNavigate} from 'react-router-dom';
import { isDisabled } from "@testing-library/user-event/dist/utils";

const HomePage=()=>{
    let navigate=useNavigate();
    const dispatch = useDispatch();
    const{loading,products,error}=useSelector(state=>state.products);
    const [applyClass,setApplyClass]=useState(false)
    function Disable(product){
        dispatch(addToCart(product))
        setApplyClass(true)
    }

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error :{error}</h1>

    return(
        <div>
            <button onClick={()=>navigate('cart')}>Cart Page</button>
            <div className="container">
    {
        products.map((product,index)=>(
            
            <div key={product.id}>
                
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} style={{width:"200px"}} />
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>₹{product.price}</strong></p>
            <p><strong>Discount:</strong>{product.discountPercentage}</p>
            <p><strong>Rating:</strong>{product.rating}</p>
            <p><strong>stock:</strong>{product.stock}</p>
            <p><strong>Brand:</strong>{product.brand}</p>
            <p><strong>category:</strong>{product.category}</p>
            <br></br>
            <button className={applyClass?"styling":""} onClick={()=>{ Disable(product) }}>Add to Cart</button>
           </div>
        
        ))
    }
        </div>        
        </div>
    )

}
export default HomePage;