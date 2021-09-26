import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {}
    
    //cart total
    const totalreducer = (preValue, curValue) => preValue + curValue.salary;
    const total = cart.reduce(totalreducer, 0).toFixed(2)
   
    
    
    
    return (
        <div>
            <h3>Added product: {cart.length}</h3>
            <h3>Total: {total} </h3>
            <ul className="list-group">
                {cart.map(member => <li className="list-group-item">{member.name}</li>)}
            </ul>
            
        </div>
    );
};

export default Cart;