import React from 'react';
import "./UserProfile.css";

export default function UserProfile(props) {

    if(props.usef)
    {
        return(
            // <div class="d-flex flex-column mb-3" id="usep">
            // <div class="p-2">User: Admin</div>
            // </div>
            <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="shadow mx-auto">
            <div className="card mx-auto">
                {/* <div className="card-header">admin</div> */}
                <div className="card-body">
                    <p className="card-text"> Email: admin</p>
                    <p className="card-text"> User: admin </p>
                    <p className="card-text"> Age: none </p>
                    <p className='card-text'> Contact: 9734562134 </p>
                </div>
            </div>
            </div>
            </>
        );
    }
    else return;
}