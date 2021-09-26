import React from 'react';
import './Member.css'

const Member = (props) => {
    const { name, age, picture, salary, employer, country } = props.member || {};
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="Programmer_Image" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {age}</li>
                            <li className="list-group-item">Country: {country}</li>
                            <li className="list-group-item">Employer: {employer}</li>
                            <li className="list-group-item">Salary: ${salary}</li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <button
                            onClick={() => props.handleAddMember(props.member)}
                            className="btn btn-primary "><i class="fas fa-user-plus"></i> Hire Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;