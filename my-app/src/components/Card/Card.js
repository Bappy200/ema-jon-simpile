import React from 'react'

const Card = (props) => {
    let total = 0;
    for (let i = 0; i < props.card.length; i++) {
        const product = props.card[i];
        total = total + product.price;
        
    }

    let shopingCharge = 0;
    if(total > 35){
        shopingCharge = 0;
    }
    else if(total > 15){
        shopingCharge = 4.5;
    }
    else if(total > 0){
        shopingCharge = 12.5;
    }

    const tax = total/10;

    const formateNumber = (number) =>{
        return number.toFixed(2);
    }

    return (
        <div>
            <h2>Total Card : {props.card.length}</h2>
            <h3>Shoping Charge : {shopingCharge}</h3>
            <h3>Tax-Vat : {formateNumber(tax)}</h3>
            <h3>Total Price : {total+shopingCharge+tax}</h3>
        </div>
    )
}

export default Card
