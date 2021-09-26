import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {}

    //cart total
    const totalReducer = (preValue, curValue) => preValue + curValue.salary;
    const total = cart.reduce(totalReducer, 0).toFixed(2)

    return (
        <div className="team-cart">
            <h2 className="text-dark text-center">Team list</h2>
            <h4><span className="text-dark ">Added Member:</span> {cart.length}</h4>
            <h4><span className="text-dark ">Total Cost: $</span> {total} </h4>
            <hr />
            <ul className="list-group">
                {cart.map(member => <li className="list-group-item  list-item">{member.name}  key={member.key} <i className="fas fa-times-circle" ></i></li> )
                }
            </ul>
        </div>
        
    );
    
};

export default Cart;