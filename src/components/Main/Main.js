import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';

const Main = () => {
    const [members, setMembers] = useState([])
    // for member 
    const [cart, setCart] = useState([])
    const handleAddMember = (member) => {
        const newCart = [...cart, member]
        setCart(newCart)

    }
    useEffect(() => {
        fetch('profiles.json')
            .then(res => res.json())
            .then(data => setMembers(data)
            )
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row row-cols-1 row-cols-md-3 m-1 g-4">
                        {
                            members.map(member => <Member member={member} key={member.key} handleAddMember={handleAddMember} />)
                        }
                    </div>
                </div>
                <div className="col-3">
                    <Cart
                        cart={cart} />
                </div>
            </div>
        </div>

    );
};

export default Main;