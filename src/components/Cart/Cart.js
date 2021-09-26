import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    
    //cart total
    const totalreducer = (preValue, curValue) => preValue + curValue.salary;
    const total = cart.reduce(totalreducer, 0)
   
    
    
    
    return (
        <div>
            <h3>Added product: {cart.length}</h3>
            <ul className="list-group">
                {cart.map(member => <li className="list-group-item">{member.name}</li>)}
            </ul>
            <h3>Total: {total}</h3>
        </div>
    );
};

export default Cart;