import React from 'react';

const Member = (props) => {
    console.log(props.member);
    const {name,age,picture,salary: salary,address} = props.member||{};
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{address}</p>
                        <p>Salary: ${salary}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary"><i class="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;