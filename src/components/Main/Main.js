import React, { useState } from 'react';
import Member from '../Member/Member';

const Main = () => {
    const {members,setMembers} = useState([])
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 border">
                    <div className="row row-cols-1 row-cols-md-3 m-1 g-4">
                        <Member />
                        
                    </div>
                </div>
                <div className="col-2">col-4</div>
            </div>
        </div>

    );
};

export default Main;