import {useState} from 'react';
import fackData from '../../../fakeData/laptop'
import './Shope.css'
import Product from '../Product/Product'
import Card from '../../Card/Card';
const Shope =()=>{
    const fackData10 = fackData.slice(0,10);
    const [products,setProducts] = useState(fackData10);
    const [card, setCard] = useState([]);
    const handleAddProduct = (product) =>{
        setCard(oldCard => [...oldCard,product]);
    }

    return(
       <div className="shop-container">
           <div className="product-container">
                {
                   products.map(product => <Product  handleAddProduct={handleAddProduct} product = {product}></Product>)
                }               
           </div>
           <div className="card-container">
                <Card card ={card}></Card>
           </div>
       </div>
    )
}

export default Shope;


