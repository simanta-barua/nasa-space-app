import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {}

    //cart total
    const totalreducer = (preValue, curValue) => preValue + curValue.salary;
    const total = cart.reduce(totalreducer, 0).toFixed(2)




    return (
        <div className="team-cart">
            <h2>Team list</h2>
            <h3>Added Member: {cart.length}</h3>
            <h4>Total Cost: {total} </h4>
            <ul className="list-group">
                {cart.map(member => <li className="list-group-item">{member.name} <i class="fas fa-times-circle"></i></li>)}
            </ul>

        </div>
    );
};

export default Cart;