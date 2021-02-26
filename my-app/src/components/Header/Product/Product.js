import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, stock} = props.product;
    return (
        <div className='product'>
            <div className='laptop-img'>
                <img src={img} alt="img" />
            </div>
            <div className='info'>
                <h2>{name}</h2>
                <p><small>Price : {price}</small></p>
                <p><small>Stock : {stock}</small></p>
                <button onClick={()=> props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> Add Card</button>
            </div>
        </div>
    )
}

export default Product
